import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function InputField({
  label,
  placeholder,
  type,
  value,
  onChange,
  className,
  error,
  name,
}) {
  return (
    <div className={className}>
      <Label className="text-[14px] font-light text-gray-400">{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border  rounded-[6px]  p-2 ${className} ${
          error ? "border-red-500" : "border"
        }`}
      />
      {error && (
        <span className="text-red-500 text-[12px] pt-1 m-0">{error}</span>
      )}
    </div>
  );
}

export default InputField;
