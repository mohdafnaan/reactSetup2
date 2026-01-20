const Header = () => {
  return (
    <>
      <div className="flex justify-between border-2 bg-blue-500 text-2xl">
        <div className="logo-container">
          <img className="w-20 h-20 p-1" src="food-logo.jpg" alt="logo" />
        </div>

        <div className="p-[0px 20px] flex">
          <ul className="flex gap-5 p-5 items-center">
            <li className="cursor-pointer hover:scale-105 transition-transform ease-in-out duration-100 ">Home</li>
            <li className="cursor-pointer  hover:scale-105 transition-transform ease-in-out duration-100">About</li>
            <li className="cursor-pointer  hover:scale-105 transition-transform ease-in-out duration-100">Contact Us</li>
            <li className="cursor-pointer  hover:scale-105 transition-transform ease-in-out duration-100">Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;