import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

/* ✅ Floating Input Component (Reused for all Inputs) */
export const FloatingInput = ({
  label,
  value,
  labelBgColor,
  placeholder,
  isFocused,
  handleFocus,
  handleBlur,
  handleChange,
  type = "text",
  defaultValue,
}) => {
  return (
    <div className="mt-5 relative w-full">
      <label
        className={`absolute left-3 px-2 text-[#96a2b4] transition-all 
        ${
          isFocused || value ? "top-[-10px] text-[12px]" : "top-4 text-[16px]"
        }`}
        style={{ backgroundColor: labelBgColor }}>
        {label}
      </label>
      <input
        type={type}
        className="w-full border border-[#96a2b4]/50 rounded px-4 py-4 bg-transparent text-white placeholder-gray-400 outline-none focus:border-white"
        value={value ?? ""}
        placeholder={isFocused ? placeholder : ""}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={value ? undefined : defaultValue} // Ensures defaultValue is used only if value is not set
      />
    </div>
  );
};

/* ✅ Floating Input Component (Reused for all Inputs) */
export const FloatingInputLong = ({
  label,

  value,
  isFocused,
  handleFocus,
  handleBlur,
  handleChange,
  type = "text",
}) => {
  return (
    <div className="mt-5 relative w-full">
      <label
        className={`absolute left-3 px-2 text-[#96a2b4] bg-[#1a202e] transition-all 
        ${
          isFocused || value ? "top-[-10px] text-[12px]" : "top-4 text-[16px]"
        }`}>
        {label}
      </label>
      <input
        type={type}
        className="w-full border border-[#96a2b4]/50 rounded px-4 py-7 bg-transparent text-white placeholder-gray-400 outline-none focus:border-white"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export function ImageUpload({ onUpload }) {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div
      className={`border-2 border-dotted ${
        dragging ? "border-white" : "border-[#96a2b4]/50"
      } rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 bg-transparent text-white outline-none focus:border-white`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
      <label className="cursor-pointer flex flex-col items-center">
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-full mb-3"
          />
        ) : (
          <>
            <FiUpload className="text-2xl text-[#96a2b4] mb-2" />
            <p className="text-sm">Drag & Drop an image here</p>
            <p className="text-sm text-[#96a2b4]">or click to select</p>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
}
