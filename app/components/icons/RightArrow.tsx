import { IIconComponentProps } from "app/types";

export const RightArrowIcon = ({
  size = 24,
  color = "currentColor",
}: IIconComponentProps) => {
  return (
    <svg
      width={size || "800px"}
      height={size || "800px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18M18 12L13 7M18 12L13 17"
        stroke={color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
