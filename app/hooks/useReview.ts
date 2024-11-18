import { useState, useEffect } from "react";
import type { TReview } from "~/types/reviews";
import type {
  TCreateReviewInput,
  TUpdateReviewInput,
} from "~/schemas/review.schema";

export default function useReview() {
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch reviews on load
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data: TReview[] = await response.json();
        setReviews(data);
      } catch (err) {
        setError("Error loading reviews");
      }
    }
    fetchReviews();
  }, []);

  // Add a new review
  const addReview = async (data: TCreateReviewInput) => {
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to add review");

      // Refresh reviews after adding a new one
      const newReview: TReview = await response.json();
      setReviews((prev) => [...prev, newReview]);
    } catch (err) {
      setError("Error adding review");
    }
  };

  const updateReview = async (data: TUpdateReviewInput) => {
    try {
      const { id, rating, comment } = data;
      const response = await fetch("/api/reviews", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, rating, comment }),
      });
      if (!response.ok) throw new Error("Failed to update review");

      // Refresh reviews after updating
      const updatedReview: TReview = await response.json();
      setReviews((prev) =>
        prev.map((review) =>
          review.id === updatedReview.id ? updatedReview : review
        )
      );
    } catch (err) {
      setError("Error updating review");
    }
  };

  const deleteReview = async (id: string) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete review");

      // Refresh reviews after deleting
      setReviews((prev) => prev.filter((review) => review.id !== id));
    } catch (err) {
      setError("Error deleting review");
    }
  };

  return { reviews, error, addReview, updateReview, deleteReview };
}
