const Header = () => {
  return (
    <>
      <header className="h-30 w-full relative">
        <div className="w-full h-1 bg-yellow-400"></div>
        <div className="h-full my-6 w-full relative">
          <div className="w-1/2 mx-auto flex justify-center">
            <img
              className="w-10/12 lg:w-4/12"
              src="./assets/logo/logo.png"
              alt="logo-header"
            />
          </div>
        </div>
        <div className="absolute flex justify-center items-center text-xs pb-1 w-1/2 mx-auto bottom-0 lg:top-0 lg:right-5 lg:text-base lg:pb-0 lg:justify-end">
          <label>Language :</label>
          <select name="language" className="outline-none">
            <option value="volvo">English</option>
            <option value="saab">Indonesian</option>
          </select>
        </div>
        <hr style={{ height: "0.2rem" }} className="w-full bg-yellow-400" />
      </header>
    </>
  );
};

export default Header;
