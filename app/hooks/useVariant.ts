import { useState, useEffect } from "react";
import type { TVariant } from "~/types/variants";
import type { TCreateVariantInput, TUpdateVariantInput } from "~/schemas/variant.schema";

export default function useVariant() {
    const [variants, setVariants] = useState<TVariant[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch variants on load
    useEffect(() => {
        async function fetchVariants() {
            try {
                const response = await fetch("/api/variants");
                if (!response.ok) throw new Error("Failed to fetch variants");
                const data: TVariant[] = await response.json();
                setVariants(data);
            } catch (err) {
                setError("Error loading variants");
            }
        }
        fetchVariants();
    }, []);

    // Add a new variant
    const addVariant = async (data: TCreateVariantInput) => {
        try {
            const response = await fetch("/api/variants", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Failed to add variant");

            // Refresh variants after adding a new one
            const newVariant: TVariant = await response.json();
            setVariants((prev) => [...prev, newVariant]);
        } catch (err) {
            setError("Error adding variant");
        }
    };

    const updateVariant = async (data: TUpdateVariantInput) => {
        try {
            const { id, name, size, color, material, price } = data;
            const response = await fetch("/api/variants", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, name, size, color, material, price }),
            });
            if (!response.ok) throw new Error("Failed to update variant");

            // Refresh variants after updating
            const updatedVariant: TVariant = await response.json();
            setVariants((prev) =>
                prev.map((variant) =>
                    variant.id === updatedVariant.id ? updatedVariant : variant
                )
            );
        } catch (err) {
            setError("Error updating variant");
        }
    };

    const deleteVariant = async (id: string) => {
        try {
            const response = await fetch("/api/variants", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) throw new Error("Failed to delete variant");

            // Refresh variants after deleting
            setVariants((prev) => prev.filter((variant) => variant.id !== id));
        } catch (err) {
            setError("Error deleting variant");
        }
    }

    return { variants, error, addVariant, updateVariant, deleteVariant };
}

