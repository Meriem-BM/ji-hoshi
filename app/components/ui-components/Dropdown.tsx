import { FC } from "react";
import { ArrowDownIcon } from "~/components/icons";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export const Dropdown: FC<DropdownProps> = ({
  options,
  value,
  onChange,
  className = "",
  placeholder,
}) => {
  return (
    <div className={`relative flex items-center w-fit ${className}`}>
      <select
        className="appearance-none w-full p-2 pr-10 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none transition ease-in-out duration-150 cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value} className="p-2">
            {option.label}
          </option>
        ))}
      </select>
      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
        <ArrowDownIcon />
      </span>
    </div>
  );
};
