import { z } from "zod";

const createProductSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  price: z.number().positive(),
  images: z.array(z.string()),
});

export type TCreateProductInput = z.infer<typeof createProductSchema>;

const updateProductSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  description: z.string().min(10),
  price: z.number().positive(),
  images: z.array(z.string()),
});

export type TUpdateProductInput = z.infer<typeof updateProductSchema>;

const deleteProductSchema = z.object({
  id: z.string(),
});

export type TDeleteProductInput = z.infer<typeof deleteProductSchema>;

export const productSchema = {
  create: createProductSchema,
  update: updateProductSchema,
  delete: deleteProductSchema,
};
