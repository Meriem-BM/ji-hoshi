import React, { useState } from "react";
import { Table } from "~/components/ui-components";

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
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Product</Table.HeadCell>
            <Table.HeadCell>SKU</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Variant</Table.HeadCell>
            <Table.HeadCell>Material</Table.HeadCell>
            <Table.HeadCell>Size</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Stock</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) =>
            product.variants.map((variant) => (
              <Table.Row key={variant.id}>
                <Table.DataCell>{product.name}</Table.DataCell>
                <Table.DataCell>{product.sku}</Table.DataCell>
                <Table.DataCell>{product.category}</Table.DataCell>
                <Table.DataCell>{variant.name}</Table.DataCell>
                <Table.DataCell>{variant.material}</Table.DataCell>
                <Table.DataCell>{variant.size}</Table.DataCell>
                <Table.DataCell>{variant.color}</Table.DataCell>
                <Table.DataCell>
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
                    className="w-20 border border-gray-300 p-1"
                  />
                </Table.DataCell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => alert("Inventory updated!")}
      >
        Save Changes
      </button>
    </div>
  );
};

export default InventoryView;
