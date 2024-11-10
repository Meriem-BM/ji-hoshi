import { useForm } from "react-hook-form";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <input
        type="text"
        placeholder="Price"
        {...register("price", { required: true })}
      />
      {errors.price && <span>This field is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
