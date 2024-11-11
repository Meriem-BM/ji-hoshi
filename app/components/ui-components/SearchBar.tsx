import { FC } from "react";
import { SearchIcon } from "~/components/icons";

interface ISearchBarProps {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({
  placeholder = "Search",
  value = "",
  className = "",
  onChange,
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <span className="absolute left-3 text-gray-400">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="pl-10 p-2 border rounded w-full focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};
