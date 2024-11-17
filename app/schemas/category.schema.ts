import { z } from "zod";
import { ECategoriesStatus } from "../types/categories";

const createCategorySchema = z.object({
  name: z.string().min(3),
  status: z.enum([ECategoriesStatus.Active, ECategoriesStatus.Inactive]),
});

export type TCreateCategoryInput = z.infer<typeof createCategorySchema>;

const updateCategorySchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  status: z.enum([ECategoriesStatus.Active, ECategoriesStatus.Inactive]),
});

export type TUpdateCategoryInput = z.infer<typeof updateCategorySchema>;

const deleteCategorySchema = z.object({
  id: z.string(),
});

export type TDeleteCategoryInput = z.infer<typeof deleteCategorySchema>;

export const categorySchema = {
  create: createCategorySchema,
  update: updateCategorySchema,
  delete: deleteCategorySchema,
};
