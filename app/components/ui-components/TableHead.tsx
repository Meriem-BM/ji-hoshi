import { FC, ReactNode } from "react";

const TableHead: FC<{ children: ReactNode }> = ({ children }) => {
  return <thead className="bg-gray-50">{children}</thead>;
};

export default TableHead;
