const InputSelect = ({ className, options, onChange }) => {
  return (
    <select
      onChange={onChange}
      className={`${className} border border-gray-400 w-full focus:border-gray-500 outline-none`}
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
