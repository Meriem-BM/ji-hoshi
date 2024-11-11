import { FC } from "react";

export const Input: FC = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-200 rounded p-2"
    />
  );
};
