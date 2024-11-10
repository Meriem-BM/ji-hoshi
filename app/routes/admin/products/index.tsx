import { Link } from "@remix-run/react";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category A",
    sku: "SKU001",
    variant: "Variant A",
    price: "$10.00",
    status: "In Stock"
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category B",
    sku: "SKU002",
    variant: "Variant B",
    price: "$15.00",
    status: "Out of Stock"
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category A",
    sku: "SKU003",
    variant: "Variant C",
    price: "$20.00",
    status: "In Stock"
  }
];

const ProductsAdminView = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <Link to="/admin/products/new" className="text-blue-500">
        Create Product
      </Link>
      {/* tabel of products */}
      <div className="w-full flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 ps-4">
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
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">SKU</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Variant</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-3 ps-4">
                      <div className="flex items-center h-5">
                        <input
                          id={`hs-table-checkbox-${product.id}`}
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`hs-table-checkbox-${product.id}`} className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{product.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{product.sku}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{product.variant}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{product.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductsAdminView;
