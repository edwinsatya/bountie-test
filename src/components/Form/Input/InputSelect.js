const InputSelect = ({ className, options, onChange }) => {
  return (
    <select
      onChange={onChange}
      className={`${className} border border-gray-400 w-full focus:border-gray-500 outline-none`}
    >
      {options.map((option, idx) => (
        <option key={idx} value={option.codeNumber}>
          {option.flag}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
