export interface IIconComponentProps {
  size?: number;
  color?: string;
}

export interface IProduct {
  id: number;
  img: string;
  title: string;
  description: string;
}

export interface IFeedback {
  name: string;
  position: string;
  image: string;
  feedback: string;
}

// Define the props for NewCategoryForm


export enum OrderStatus {
  Pending = "Pending",
  Processing = "Processing",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

export interface Order {
  id: number;
  status: OrderStatus;
  total: number;
  customer: string;
  items: {
    productName: string;
    quantity: number;
    price: number;
  }[];
}

// types.ts
export interface Customer {
  id: string;
  name: string;
  email: string;
  verified: boolean;
}
