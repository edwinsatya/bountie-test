const InputText = ({ className, placeHolder, value, onChange, disabled }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`${className} ${
        disabled && "bg-gray-300"
      } border border-gray-400 w-full p-2 focus:border-gray-500 outline-none`}
      type="text"
      placeholder={placeHolder}
    />
  );
};

export default InputText;
