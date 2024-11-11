import { IIconComponentProps } from "app/types";

export const ArrowDownIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14.25L7.5 9.75L8.91 8.34L12 11.43L15.09 8.34L16.5 9.75L12 14.25Z"
        fill={color}
      />
    </svg>
  );
};
