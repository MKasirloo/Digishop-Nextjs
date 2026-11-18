import { InputHTMLAttributes } from "react";

export default function Switch(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        {...props}
        type="checkbox"
        className="sr-only peer"
      />
      <span
        className={`
          relative w-10 h-5 rounded-full
          bg-gray-300 dark:bg-gray-700
          transition-colors duration-200
          peer-checked:bg-(--primary-color)
          after:content-['']
          after:absolute after:top-0.75 after:left-0.75
          after:w-3.5 after:h-3.5
          after:translate-y-[-0.25px]
          after:rounded-full after:bg-white
          after:transition-transform after:duration-200
          peer-checked:after:translate-x-5
          peer-disabled:opacity-50
          peer-disabled:cursor-not-allowed
          ${props.className || ""}
        `}
      />
    </label>
  );
}