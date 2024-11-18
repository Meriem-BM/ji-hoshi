import { json } from "@remix-run/node";
import { prisma } from "../../prisma/prismaClient";
import { variantSchema } from "~/schemas/variant.schema";
import {
  TCreateVariantInput,
  TUpdateVariantInput,
  TDeleteVariantInput,
} from "~/schemas/variant.schema";

export async function loader() {
  const variants = await prisma.productVariant.findMany();
  return json(variants);
}

export async function action({ request }: { request: Request }) {
  const method = request.method;

  if (method === "POST") {
    const { productId, name, size, color, material, price } =
      (await request.json()) as TCreateVariantInput;

    try {
      const parsed = variantSchema.create.safeParse({
        productId,
        name,
        size,
        color,
        material,
        price,
      });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const newVariant = await prisma.productVariant.create({
        data: parsedData,
      });
      return json(newVariant);
    } catch {
      return json({ error: "Failed to add variant" }, { status: 500 });
    }
  }

  if (method === "PUT") {
    const { id, name, size, color, material, price } =
      (await request.json()) as TUpdateVariantInput;

    try {
      const parsed = variantSchema.update.safeParse({
        id,
        name,
        size,
        color,
        material,
        price,
      });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const updatedVariant = await prisma.productVariant.update({
        where: { id: parsedData.id },
        data: {
          name: parsedData.name,
          price: parsedData.price,
        },
      });
      return json(updatedVariant);
    } catch {
      return json({ error: "Failed to update variant" }, { status: 500 });
    }
  }

  if (method === "DELETE") {
    const { id } = (await request.json()) as TDeleteVariantInput;

    try {
      const parsed = variantSchema.delete.safeParse({ id });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      await prisma.productVariant.delete({
        where: { id: parsedData.id },
      });
      return json({ message: "Variant deleted" });
    } catch {
      return json({ error: "Failed to delete variant" }, { status: 500 });
    }
  }

  return json({ error: "Invalid method" }, { status: 400 });
}
