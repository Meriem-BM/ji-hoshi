export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
};

export interface INewProductFormInputs {
  name: string;
  description: string;
  price: number;
  images: string[];
}

export interface IProductFormProps {
  type: "add" | "edit";
  data?: TProduct;
  onSubmit: (data: INewProductFormInputs) => void;
  onClose: () => void;
}
