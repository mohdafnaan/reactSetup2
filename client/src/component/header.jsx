const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-3 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 shadow-lg sticky top-0 z-50">
        <div className="logo-container flex items-center gap-2">
          <img
            className="w-16 h-16 p-1 rounded-full bg-white shadow-md object-cover ring-2 ring-yellow-300"
            src="food-logo.jpg"
            alt="logo"   
          />
        </div>

        <div className="flex">
          <ul className="flex gap-8 items-center text-lg font-semibold text-white">
            <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-all duration-200">
              Home
            </li>
            <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-all duration-200">
              About
            </li>
            <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-all duration-200">
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-all duration-200">
              Cart
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
 