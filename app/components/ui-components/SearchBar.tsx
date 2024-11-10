import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-200 rounded p-2"
      />
      <button className="bg-blue-500 text-white rounded p-2">Search</button>
    </div>
  );
};

export default SearchBar;
