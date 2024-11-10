import { useForm, SubmitHandler } from "react-hook-form";
import { NewCategoryFormProps } from "~/types";

interface NewCategoryFormInputs {
  name: string;
  status: "Active" | "Inactive";
}

const NewCategoryForm: React.FC<NewCategoryFormProps> = ({ onSubmit, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewCategoryFormInputs>();

  const submitHandler: SubmitHandler<NewCategoryFormInputs> = (data) => {
    onSubmit(data);
    reset(); // Reset the form fields after submission
    onClose(); // Close the modal after submitting
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4">
            <label className="block text-gray-700">Category Name</label>
            <input
              type="text"
              placeholder="Enter category name"
              className="border p-2 rounded w-full"
              {...register("name", { required: "Category name is required" })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              className="border p-2 rounded w-full"
              {...register("status", { required: "Status is required" })}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && <span className="text-red-500">{errors.status.message}</span>}
          </div>

          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategoryForm;
