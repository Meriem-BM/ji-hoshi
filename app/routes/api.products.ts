import { json } from "@remix-run/node";
import { prisma } from "../../prisma/prismaClient";
import { productSchema } from "~/schemas/product.schema";
import {
  TCreateProductInput,
  TUpdateProductInput,
  TDeleteProductInput,
} from "~/schemas/product.schema";

export async function loader() {
  const products = await prisma.product.findMany();
  return json(products);
}

export async function action({ request }: { request: Request }) {
  const method = request.method;

  if (method === "POST") {
    const { name, description, price } = await request.json() as TCreateProductInput;

    try {
      const parsed = productSchema.create.safeParse({ name, description, price });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const newProduct = await prisma.product.create({
        data: parsedData,
      });
      return json(newProduct);
    } catch {
      return json({ error: "Failed to add product" }, { status: 500 });
    }
  }

  if (method === "PUT") {
    const { id, name, description, price } = await request.json() as TUpdateProductInput;

    try {
      const parsed = productSchema.update.safeParse({
        id,
        name,
        description,
        price,
      });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const updatedProduct = await prisma.product.update({
        where: { id: parsedData.id },
        data: {
          name: parsedData.name,
          description: parsedData.description,
          price: parsedData.price,
        },
      });

      return json(updatedProduct);
    } catch {
      return json({ error: "Failed to update product" }, { status: 500 });
    }
  }

  if (method === "DELETE") {
    const { id } = await request.json() as TDeleteProductInput;

    try {
      const parsed = productSchema.delete.safeParse({ id });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      await prisma.product.delete({
        where: { id: parsedData.id },
      });

      return json({ success: true });
    } catch {
      return json({ error: "Failed to delete product" }, { status: 500 });
    }
  }

  return json({ error: "Invalid method" }, { status: 405 });
}
