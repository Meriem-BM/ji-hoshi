export type ICategory = {
  id: string;
  name: string;
  status: ECategoriesStatus;
};

export enum ECategoriesStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface INewCategoryFormInputs {
  name: string;
  status: ECategoriesStatus;
}

export interface ICategoryFormProps {
  type: "add" | "edit";
  data?: ICategory;
  onSubmit: (data: INewCategoryFormInputs) => void;
  onClose: () => void;
}
