import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const FloatingSelect = ({
  label,
  options,
  value,
  onChange,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 transition-all text-sm top-[-10px] text-[#96a2b4] bg-[#0c0f18] rounded px-2`}>
        {label} {required && "*"}
      </label>

      <select
        className="w-full bg-[#0c0f18] border border-[#96a2b4]/50 rounded px-4 py-4 text-[#96a2b4] outline-none 
          focus:border-white transition duration-300 appearance-none cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value ? true : false)}
        required={required}>
        <option
          value=""
          disabled>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="bg-[#0c0f18] text-[#96a2b4]">
            {option}
          </option>
        ))}
      </select>

      {/* Downward Arrow Icon */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <FaCaretDown />
      </div>
    </div>
  );
};

export default FloatingSelect;
