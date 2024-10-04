import { IIconComponentProps } from "app/types";

export const StarIcon = ({
  size = 24,
  color = "currentColor",
}: IIconComponentProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M12 2l2.4 5.2 5.6.8-4 4.2.9 5.6-5-2.6-5 2.6.9-5.6-4-4.2 5.6-.8L12 2z"
      />
    </svg>
  );
};
