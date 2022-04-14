const InputRadio = ({ listTitle, onChange, checked }) => {
  return (
    <div className="flex">
      {listTitle.map((title, idx) => (
        <div
          key={idx}
          className={`${idx === 0 ? "ml-0" : "ml-2"} flex items-center`}
        >
          <input
            type="radio"
            className="form-radio mr-2 appearance-none border border-yellow-400 w-5 h-5"
            onChange={(e) => onChange(e.target.value)}
            value={title.value}
            checked={checked === title.value}
          />
          <label>{title.value}</label>
        </div>
      ))}
    </div>
  );
};

export default InputRadio;
