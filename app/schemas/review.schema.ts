import { z } from "zod";

const createReviewSchema = z.object({
  productId: z.string(),
  userId: z.string(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(3),
});

export type TCreateReviewInput = z.infer<typeof createReviewSchema>;

const updateReviewSchema = z.object({
  id: z.string(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(3),
});

export type TUpdateReviewInput = z.infer<typeof updateReviewSchema>;

const deleteReviewSchema = z.object({
  id: z.string(),
});

export type TDeleteReviewInput = z.infer<typeof deleteReviewSchema>;

export const reviewSchema = {
  create: createReviewSchema,
  update: updateReviewSchema,
  delete: deleteReviewSchema,
};
