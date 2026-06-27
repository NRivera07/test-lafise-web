import { InputHTMLAttributes } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FloatingInput({
  label,
  error,
  value,
  className = "",
  ...props
}: FloatingInputProps) {
  const hasValue =
    typeof value === "number"
      ? Number.isFinite(value)
      : typeof value === "string"
        ? value.trim() !== ""
        : false;

  return (
    <div className="relative">
      {hasValue && (
        <span className="absolute left-4 -top-2 bg-white px-1 text-[13px] font-medium text-[#3B8668]">
          {label}
        </span>
      )}

      <input
        value={value}
        {...props}
        placeholder={hasValue ? "" : props.placeholder}
        className={`h-[60px] w-full rounded border  bg-white px-5 text-[16px] text-text-primary outline-none transition-colors placeholder:text-[#8D918D]
          ${
            error ? "border-red-500" : "border-[#DFE1DF] focus:border-[#3B8668]"
          }
          ${className}
        `}
      />

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
