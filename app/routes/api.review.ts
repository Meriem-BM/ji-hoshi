import { json } from "@remix-run/node";
import { prisma } from "../../prisma/prismaClient";
import { reviewSchema } from "~/schemas/review.schema";
import {
  TCreateReviewInput,
  TUpdateReviewInput,
  TDeleteReviewInput,
} from "~/schemas/review.schema";

export async function loader() {
  const reviews = await prisma.productReview.findMany();
  return json(reviews);
}

export async function action({ request }: { request: Request }) {
  const method = request.method;

  if (method === "POST") {
    const { productId, userId, rating, comment } =
      (await request.json()) as TCreateReviewInput;

    try {
      const parsed = reviewSchema.create.safeParse({
        productId,
        userId,
        rating,
        comment,
      });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const newReview = await prisma.productReview.create({
        data: parsedData,
      });
      return json(newReview);
    } catch {
      return json({ error: "Failed to add review" }, { status: 500 });
    }
  }

  if (method === "PUT") {
    const { id, rating, comment } =
      (await request.json()) as TUpdateReviewInput;

    try {
      const parsed = reviewSchema.update.safeParse({ id, rating, comment });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      const updatedReview = await prisma.productReview.update({
        where: { id: parsedData.id },
        data: { rating: parsedData.rating, comment: parsedData.comment },
      });

      return json(updatedReview);
    } catch {
      return json({ error: "Failed to update review" }, { status: 500 });
    }
  }

  if (method === "DELETE") {
    const { id } = (await request.json()) as TDeleteReviewInput;

    try {
      const parsed = reviewSchema.delete.safeParse({ id });

      if (!parsed.success) {
        return json({ error: parsed.error.format() });
      }

      const parsedData = parsed.data;

      await prisma.productReview.delete({
        where: { id: parsedData.id },
      });

      return json({ message: "Review deleted" });
    } catch {
      return json({ error: "Failed to delete review" }, { status: 500 });
    }
  }

  return json({ error: "Invalid request" }, { status: 400 });
}
