import { useState } from "react";
import NewCategoryForm from "~/components/admin-dashboard/categories/NewCategoryModal";
import { Category } from "~/types";

const CategoriesView: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Electronics", status: "Active" },
    { id: 2, name: "Books", status: "Inactive" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<
    "All" | "Active" | "Inactive"
  >("All");

  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || category.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Function to handle adding a new category
  const handleAddCategory = (newCategory: Omit<Category, "id">) => {
    setCategories((prevCategories) => [
      ...prevCategories,
      { id: categories.length + 1, ...newCategory },
    ]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Categories</h1>

      {/* Search, Filter, and Add Category Controls */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by category name"
          className="p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as "All" | "Active" | "Inactive")
          }
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Category
        </button>
      </div>

      {/* Categories Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 border-b">Name</th>
              <th className="text-left p-4 border-b">Status</th>
              <th className="text-left p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <tr key={category.id}>
                  <td className="p-4 border-b">{category.name}</td>
                  <td className="p-4 border-b">{category.status}</td>
                  <td className="p-4 border-b">
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button className="ml-4 text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for New Category Form */}
      {isModalOpen && (
        <NewCategoryForm
          onSubmit={handleAddCategory}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CategoriesView;
