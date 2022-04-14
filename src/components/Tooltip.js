const Tooltip = ({ title }) => {
  return (
    <div className="flex flex-col justify-center mt-2 text-center">
      <div className="mx-auto w-0 h-0 border border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-yellow-400"></div>
      <div className="bg-yellow-400 p-3 rounded">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Tooltip;
