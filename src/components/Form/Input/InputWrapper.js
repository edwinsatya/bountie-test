const InputWrapper = ({ className, title, children, required }) => {
  return (
    <div className={`${className} mt-2`}>
      <h5 className="font-bold text-sm lg:text-base">
        {title}
        {required && <span className="text-red-600 ml-1 text-xl">*</span>}
      </h5>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default InputWrapper;
