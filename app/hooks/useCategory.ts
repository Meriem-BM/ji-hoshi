import { useState, useEffect } from "react";
import type { TCategory } from "~/types/categories";
import type { TCreateCategoryInput, TUpdateCategoryInput } from "~/schemas/category.schema";

export default function useCategory() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories on load
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data: TCategory[] = await response.json();
        setCategories(data);
      } catch (err) {
        setError("Error loading categories");
      }
    }
    fetchCategories();
  }, []);

  // Add a new category
  const addCategory = async (data: TCreateCategoryInput) => {
    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to add category");

      // Refresh categories after adding a new one
      const newCategory: TCategory = await response.json();
      setCategories((prev) => [...prev, newCategory]);
    } catch (err) {
      setError("Error adding category");
    }
  };

  const updateCategory = async (data: TUpdateCategoryInput) => {
    try {
      const { id, name, status } = data;
      const response = await fetch("/api/categories", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, status }),
      });
      if (!response.ok) throw new Error("Failed to update category");

      // Refresh categories after updating
      const updatedCategory: TCategory = await response.json();
      setCategories((prev) =>
        prev.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category
        )
      );
    } catch (err) {
      setError("Error updating category");
    }
  }

  const deleteCategory = async (id: string) => {
    try {
      const response = await fetch("/api/categories", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error("Failed to delete category");

      // Refresh categories after deleting
      setCategories((prev) => prev.filter((category) => category.id !== id));
    } catch (err) {
      setError("Error deleting category");
    }
  }

  return { categories, addCategory, updateCategory, deleteCategory, error };
}
