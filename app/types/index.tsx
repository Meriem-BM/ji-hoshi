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
