import { useState, useEffect } from "react";
import type { IProduct } from "~/types/products";
import type {
  TCreateProductInput,
  TUpdateProductInput,
} from "~/schemas/product.schema";

export default function useProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch products on load
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Error loading products");
      }
    }
    fetchProducts();
  }, []);

  // Add a new product
  const addProduct = async (data: TCreateProductInput) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to add product");

      // Refresh products after adding a new one
      const newProduct: IProduct = await response.json();
      setProducts((prev) => [...prev, newProduct]);
    } catch (err) {
      setError("Error adding product");
    }
  };

  const updateProduct = async (data: TUpdateProductInput) => {
    try {
      const { id, name, description, price, images } = data;
      const response = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, description, price, images }),
      });
      if (!response.ok) throw new Error("Failed to update product");

      // Refresh products after updating
      const updatedProduct: IProduct = await response.json();
      setProducts((prev) =>
        prev.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    } catch (err) {
      setError("Error updating product");
    }
  };

  return { products, error, addProduct, updateProduct };
}
