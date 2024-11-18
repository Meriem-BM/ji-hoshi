import { z } from "zod";

const createVariantSchema = z.object({
  productId: z.string(),
  name: z.string().min(3),
  size: z.enum(["S", "M", "L", "XL"]),
  color: z.string().regex(/^#[0-9A-F]{6}$/i),
  material: z.string().min(3),
  price: z.number().int().min(1),
});

export type TCreateVariantInput = z.infer<typeof createVariantSchema>;

const updateVariantSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  size: z.enum(["S", "M", "L", "XL"]),
  color: z.string().regex(/^#[0-9A-F]{6}$/i),
  material: z.string().min(3),
  price: z.number().int().min(1),
});

export type TUpdateVariantInput = z.infer<typeof updateVariantSchema>;

const deleteVariantSchema = z.object({
  id: z.string(),
});

export type TDeleteVariantInput = z.infer<typeof deleteVariantSchema>;

export const variantSchema = {
  create: createVariantSchema,
  update: updateVariantSchema,
  delete: deleteVariantSchema,
};
