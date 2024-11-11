import { Link } from "@remix-run/react";
import { Table, SearchBar, Dropdown } from "~/components/ui-components";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category A",
    sku: "SKU001",
    variant: "Variant A",
    price: "$10.00",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category B",
    sku: "SKU002",
    variant: "Variant B",
    price: "$15.00",
    status: "Out of Stock",
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category A",
    sku: "SKU003",
    variant: "Variant C",
    price: "$20.00",
    status: "In Stock",
  },
];

const ProductsAdminView = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <Link to="/admin/products/new" className="text-blue-500">
        Create Product
      </Link>
      {/* tabel of products */}
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>
              <div className="flex items-center h-5">
                <input
                  id="hs-table-checkbox-all"
                  type="checkbox"
                  className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="hs-table-checkbox-all" className="sr-only">
                  Checkbox
                </label>
              </div>
            </Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>SKU</Table.HeadCell>
            <Table.HeadCell>Variant</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.DataCell>
                <div className="flex items-center h-5">
                  <input
                    id={`hs-table-checkbox-${product.id}`}
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`hs-table-checkbox-${product.id}`}
                    className="sr-only"
                  >
                    Checkbox
                  </label>
                </div>
              </Table.DataCell>
              <Table.DataCell className="font-medium">
                {product.name}
              </Table.DataCell>
              <Table.DataCell>{product.category}</Table.DataCell>
              <Table.DataCell>{product.sku}</Table.DataCell>
              <Table.DataCell>{product.variant}</Table.DataCell>
              <Table.DataCell>{product.price}</Table.DataCell>
              <Table.DataCell>{product.status}</Table.DataCell>
              <Table.DataCell className="text-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Delete
                </button>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProductsAdminView;
