const InputText = ({
  className,
  placeHolder,
  value,
  onChange,
  disabled,
  required,
  type,
}) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      required={required}
      type={type || "text"}
      min={0}
      className={`${className} ${
        disabled && "bg-gray-200"
      } border border-gray-400 w-full p-2 focus:border-gray-500 outline-none`}
      placeholder={placeHolder}
    />
  );
};

export default InputText;
