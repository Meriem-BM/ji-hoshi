import { useState, useMemo } from "react";
import useCategory from "~/hooks/useCategory";
import CategoryForm from "~/components/admin-dashboard/categories/CategoryModal";
import { Table, SearchBar, Dropdown } from "~/components/ui-components";
import { INewCategoryFormInputs } from "~/types/categories";
import { ECategoriesStatus } from "~/types/categories";
import { ConfirmDeleteModal } from "~/components/admin-dashboard/categories/ConfirmDeleteModal";

type ModalState =
  | { type: "add"; selectedCategory: null }
  | { type: "edit"; selectedCategory: { id: string; name: string } }
  | { type: "delete"; selectedCategory: { id: string; name: string } };

const CategoriesView: React.FC = () => {
  const { categories, addCategory, updateCategory, deleteCategory, error } =
    useCategory();

  const [modalState, setModalState] = useState<ModalState | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<ECategoriesStatus | "all">(
    "all"
  );

  // Filter categories based on search term and status
  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesSearch = category.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || category.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [categories, searchTerm, statusFilter]);

  // Handle add and edit category submissions
  const handleCategorySubmit = (data: INewCategoryFormInputs) => {
    if (modalState?.type === "add") {
      addCategory(data);
    } else if (modalState?.type === "edit" && modalState.selectedCategory) {
      updateCategory({ id: modalState.selectedCategory.id, ...data });
    }
    setModalState(null);
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
            onChange={(value) =>
              setStatusFilter(value as ECategoriesStatus | "all")
            }
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() =>
              setModalState({ type: "add", selectedCategory: null })
            }
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
                <Table.DataCell className="capitalize">
                  {category.status}
                </Table.DataCell>
                <Table.DataCell>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() =>
                      setModalState({
                        type: "edit",
                        selectedCategory: {
                          id: category.id,
                          name: category.name,
                        },
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="ml-4 text-red-500 hover:underline"
                    onClick={() =>
                      setModalState({
                        type: "delete",
                        selectedCategory: {
                          id: category.id,
                          name: category.name,
                        },
                      })
                    }
                  >
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

      {/* Modal for Add/Edit Category */}
      {modalState && modalState.type !== "delete" && (
        <CategoryForm
          type={modalState.type}
          data={
            modalState.selectedCategory
              ? categories.find((c) => c.id === modalState.selectedCategory.id)
              : undefined
          }
          onSubmit={handleCategorySubmit}
          onClose={() => setModalState(null)}
        />
      )}

      {/* Confirm Delete Modal */}
      {modalState?.type === "delete" && (
        <ConfirmDeleteModal
          show={!!modalState}
          handleClose={() => setModalState(null)}
          handleDelete={() => {
            if (modalState.selectedCategory) {
              deleteCategory(modalState.selectedCategory.id);
              setModalState(null);
            }
          }}
        />
      )}
    </div>
  );
};

export default CategoriesView;
