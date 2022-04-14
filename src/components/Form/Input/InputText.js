const InputText = ({ placeHolder, onChange }) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-400 w-full p-2 focus:border-gray-500 outline-none"
      type="text"
      placeholder={placeHolder}
    />
  );
};

export default InputText;
