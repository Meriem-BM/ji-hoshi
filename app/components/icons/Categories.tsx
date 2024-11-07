import { IIconComponentProps } from "app/types";

export const CategoriesIcon = ({
  size = 24,
  color = "currentColor",
}: IIconComponentProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none" />
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <path d="M24,2a2.1,2.1,0,0,0-1.7,1L13.2,17a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H33a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-9-14A1.9,1.9,0,0,0,24,2Z" />
          <path d="M43,43H29a2,2,0,0,1-2-2V27a2,2,0,0,1,2-2H43a2,2,0,0,1,2,2V41A2,2,0,0,1,43,43Z" />
          <path d="M13,24A10,10,0,1,0,23,34,10,10,0,0,0,13,24Z" />
        </g>
      </g>
    </svg>
  );
};