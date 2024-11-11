import { useState } from "react";
import NewCategoryForm from "~/components/admin-dashboard/categories/NewCategoryModal";
import {
  Table,
  SearchBar,
  Dropdown,
} from "~/components/ui-components";
import { Category } from "~/types";

const CategoriesView: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Electronics", status: "active" },
    { id: 2, name: "Books", status: "inactive" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || category.status === statusFilter;
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
      <div className="flex justify-between gap-4 mb-4">
        <SearchBar
          placeholder="Search Categories"
          value={searchTerm}
          onChange={setSearchTerm}
          className="w-[50%]"
        />
        <div className="flex gap-4">
          <Dropdown
            options={[
              { label: "All", value: "all" },
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter as unknown as (value: string) => void}
          />
          <button
            className="w-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Categories Table */}
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <tr key={category.id}>
                <Table.DataCell>{category.name}</Table.DataCell>
                <Table.DataCell>{category.status}</Table.DataCell>
                <Table.DataCell>
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button className="ml-4 text-red-500 hover:underline">
                    Delete
                  </button>
                </Table.DataCell>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">
                No categories found
              </td>
            </tr>
          )}
        </Table.Body>
      </Table>

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
