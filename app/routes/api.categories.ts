import { json } from "@remix-run/node";
import { prisma } from "../../prisma/prismaClient";
import { categorySchema } from "~/schemas/category.schema";

export async function loader() {
  const categories = await prisma.category.findMany();
  return json(categories);
}

export async function action({ request }: { request: Request }) {
  const method = request.method;

  if (method === "POST") {
    const { name, status } = await request.json();

    try {
      const parsed = categorySchema.create.safeParse({ name, status });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const newCategory = await prisma.category.create({
        data: parsedData,
      });
      return json(newCategory);
    } catch {
      return json({ error: "Failed to add category" }, { status: 500 });
    }
  }

  if (method === "PUT") {
    const { id, name, status } = await request.json();
    
    try {
      const parsed = categorySchema.update.safeParse({ id, name, status });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const updatedCategory = await prisma.category.update({
        where: { id: parsedData.id },
        data: { name: parsedData.name, status: parsedData.status },
      });

      return json(updatedCategory);
    } catch {
      return json({ error: "Failed to update category" }, { status: 500 });
    }
  }

  if (method === "DELETE") {
    const { id } = await request.json();

    try {
      const parsed = categorySchema.delete.safeParse({ id });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      await prisma.category.delete({
        where: { id: parsedData.id },
      });

      return json({ message: "Category deleted" });
    } catch {
      return json({ error: "Failed to delete category" }, { status: 500 });
    }
  }
  // Method not allowed
  return json({ error: "Method not allowed" }, { status: 405 });
}
