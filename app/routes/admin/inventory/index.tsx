import React, { useState } from "react";

type Variant = {
  id: number;
  name: string;
  material: string;
  size: string;
  color: string;
  stock: number;
};

type Product = {
  id: number;
  name: string;
  sku: string;
  category: string;
  variants: Variant[];
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "T-Shirt",
    sku: "TS-001",
    category: "Apparel",
    variants: [
      {
        id: 1,
        name: "Red XL",
        material: "Cotton",
        size: "XL",
        color: "Red",
        stock: 20,
      },
      {
        id: 2,
        name: "Blue M",
        material: "Cotton",
        size: "M",
        color: "Blue",
        stock: 15,
      },
    ],
  },
  {
    id: 2,
    name: "Mug",
    sku: "MG-002",
    category: "Accessories",
    variants: [
      {
        id: 3,
        name: "White Small",
        material: "Ceramic",
        size: "Small",
        color: "White",
        stock: 30,
      },
      {
        id: 4,
        name: "Black Large",
        material: "Ceramic",
        size: "Large",
        color: "Black",
        stock: 25,
      },
    ],
  },
];

const InventoryView: React.FC = () => {
  const [products, setProducts] = useState(mockProducts);

  const handleStockChange = (
    productId: number,
    variantId: number,
    stock: number
  ) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              variants: product.variants.map((variant) =>
                variant.id === variantId ? { ...variant, stock } : variant
              ),
            }
          : product
      )
    );
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Variant</th>
            <th>Material</th>
            <th>Size</th>
            <th>Color</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            product.variants.map((variant) => (
              <tr key={variant.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.category}</td>
                <td>{variant.name}</td>
                <td>{variant.material}</td>
                <td>{variant.size}</td>
                <td>{variant.color}</td>
                <td>
                  <input
                    type="number"
                    value={variant.stock}
                    onChange={(e) =>
                      handleStockChange(
                        product.id,
                        variant.id,
                        parseInt(e.target.value) || 0
                      )
                    }
                    className="w-20"
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button className="mt-4" onClick={() => alert("Inventory updated!")}>
        Save Changes
      </button>
    </div>
  );
};

export default InventoryView;
