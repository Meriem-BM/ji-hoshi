interface childrenProps {
  children: React.ReactNode;
}

interface TableCellProps extends childrenProps {
  colSpan?: number;
}

const Table = ({ children }: childrenProps) => {
  return (
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
};

const TableHeader = ({ children }: childrenProps) => {
  return <thead className="bg-gray-50">{children}</thead>;
};

const TableBody = ({ children }: childrenProps) => {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
};

const TableRow = ({ children }: childrenProps) => {
  return <tr>{children}</tr>;
};

const TableDataCell = ({ children, colSpan }: TableCellProps) => {
  return (
    <td colSpan={colSpan} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
      {children}
    </td>
  );
};

const TableHeadCell = ({ children }: childrenProps) => {
  return <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">{children}</th>;
};

export { Table, TableHeader, TableBody, TableRow, TableDataCell, TableHeadCell };
