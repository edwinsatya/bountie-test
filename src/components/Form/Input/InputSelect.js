const InputSelect = ({
  className,
  options,
  placeHolder,
  onChange,
  required,
  value,
}) => {
  return (
    <select
      onChange={onChange}
      className={`${className} border border-gray-400 w-full focus:border-gray-500 outline-none`}
      placeholder={placeHolder || "-"}
      required={required}
      value={value}
    >
      <option value="-">-</option>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
