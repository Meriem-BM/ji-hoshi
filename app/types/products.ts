export type IProduct = {
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
  data?: IProduct;
  onSubmit: (data: INewProductFormInputs) => void;
  onClose: () => void;
}
