import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "~/components/Modal";
import { ICategoryFormProps, INewCategoryFormInputs } from "~/types/categories";

const CategoryModal: FC<ICategoryFormProps> = ({
  type,
  data,
  onSubmit,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<INewCategoryFormInputs>({
    defaultValues: data || {},
  });

  const submitHandler: SubmitHandler<INewCategoryFormInputs> = (data) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <Modal.Header
        title={type === "add" ? "Add New Category" : "Edit Category"}
      />
      <Modal.Body>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4">
            <label className="block text-gray-700">Category Name</label>
            <input
              type="text"
              placeholder="Enter category name"
              className="border p-2 rounded w-full"
              {...register("name", { required: "Category name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              className="border p-2 rounded w-full"
              {...register("status", { required: "Status is required" })}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && (
              <span className="text-red-500">{errors.status.message}</span>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit(submitHandler)}
        >
          {type === "add" ? "Add Category" : "Save Changes"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CategoryModal;
