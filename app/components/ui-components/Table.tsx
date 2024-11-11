import { FC, ReactNode } from "react";

interface ITableProps {
  children?: ReactNode;
}

interface ITableCellProps {
  children: ReactNode;
  colSpan?: number;
  className?: string;
}

export const Table: FC<ITableProps> & {
  Header: FC<ITableProps>;
  Body: FC<ITableProps>;
  Row: FC<ITableProps>;
  HeadCell: FC<ITableProps>;
  DataCell: FC<ITableCellProps>;
} = ({ children }) => (
  <div className="w-full flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            {children}
          </table>
        </div>
      </div>
    </div>
  </div>
);

Table.Header = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);

Table.Body = ({ children }) => (
  <tbody className="divide-y divide-gray-200">{children}</tbody>
);

Table.Row = ({ children }) => <tr>{children}</tr>;

Table.HeadCell = ({ children }) => (
  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
    {children}
  </th>
);

Table.DataCell = ({ children, colSpan, className }) => (
  <td
    colSpan={colSpan}
    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-800 ${
      className || ""
    }`}
  >
    {children}
  </td>
);
