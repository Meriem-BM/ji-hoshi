// src/hooks/useProduct.ts
import { useState, useEffect } from "react";
import { prisma } from "../../prisma/prismaClient";
import { Product } from "@prisma/client";

type UseProductResult = {
  products: Product[] | null;
  product: Product | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
  updateProduct: (id: string, data: Partial<Product>) => Promise<void>;
};

export const useProduct = (): UseProductResult => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const products = await prisma.product.findMany();
      setProducts(products);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a product by ID
  const fetchProductById = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const product = await prisma.product.findUnique({
        where: { id },
      });
      setProduct(product);
    } catch (err) {
      setError("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  // Update a product
  const updateProduct = async (id: string, data: Partial<Product>) => {
    setLoading(true);
    setError(null);
    try {
      await prisma.product.update({
        where: { id },
        data,
      });
      // Refetch products or update state as needed
      await fetchProducts();
    } catch (err) {
      setError("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    product,
    loading,
    error,
    fetchProducts,
    fetchProductById,
    updateProduct,
  };
};
