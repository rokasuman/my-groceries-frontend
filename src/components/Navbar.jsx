import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { UseAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
const [open, setOpen] = useState(false);

const {
user,
setUser,
setShowUserLogin,
navigate,
setSearchQurey,
searchQurey,
getTotalItem,
} = UseAppContext();

// Logout function
const logout = () => {
setUser(false);
setOpen(false);
navigate("/");
};

// Navigate to all products when searching
useEffect(() => {
if (searchQurey?.length > 0) {
navigate("/all-products");
}
}, [searchQurey, navigate]);

return ( <nav className="relative flex items-center justify-between px-5 py-4 border-b border-gray-300 bg-white md:px-16 lg:px-24 xl:px-32">


  {/* Logo */}
  <NavLink to="/" onClick={() => setOpen(false)}>
    <img className="h-8 sm:h-9" src={assets.logo} alt="logo" />
  </NavLink>

  {/* Desktop Menu */}
  <div className="hidden sm:flex items-center gap-6 lg:gap-8">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/all-products">All Product</NavLink>
    <NavLink to="/contact">Contact</NavLink>

    {/* Desktop Search */}
    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
      <input
        value={searchQurey}
        onChange={(e) => setSearchQurey(e.target.value)}
        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
        type="text"
        placeholder="Search products"
      />

      <img
        src={assets.search_icon}
        alt="Search"
        className="w-4 h-4"
      />
    </div>

    {/* Cart */}
    <div
      onClick={() => navigate("/cart")}
      className="relative cursor-pointer"
    >
      <img
        src={assets.cart_icon}
        alt="Cart"
        className="w-5 opacity-80"
      />

      <span className="absolute -top-2 -right-3 flex items-center justify-center text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
        {getTotalItem()}
      </span>
    </div>

    {/* Login / Profile */}
    {!user ? (
      <button
        onClick={() => setShowUserLogin(true)}
        className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dark transition text-white rounded-full"
      >
        Login
      </button>
    ) : (
      <div className="relative group">
        <img
          src={assets.profile_icon}
          alt="Profile"
          className="w-9 h-9 cursor-pointer"
        />

        <ul className="absolute right-0 top-full pt-2 hidden group-hover:block w-40 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
          <li
            onClick={() => navigate("/my-profile")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            My Profile
          </li>

          <li
            onClick={() => navigate("/my-order")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            My Order
          </li>

          <li
            onClick={logout}
            className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </li>
        </ul>
      </div>
    )}
  </div>

  {/* Mobile Right Section */}
  <div className="flex sm:hidden items-center gap-5">
    
    {/* Mobile Cart - Separate from menu */}
    <div
      onClick={() => navigate("/cart")}
      className="relative cursor-pointer"
    >
      <img
        src={assets.cart_icon}
        alt="Cart"
        className="w-5 opacity-80"
      />

      <span className="absolute -top-2 -right-3 flex items-center justify-center text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
        {getTotalItem()}
      </span>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen(!open)}
      aria-label="Menu"
      className="cursor-pointer"
    >
      <img
        src={assets.menu_icon}
        alt="Menu"
        className="w-6"
      />
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`${
      open ? "flex" : "hidden"
    } absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-5 px-5 flex-col gap-4 text-sm z-50 sm:hidden`}
  >
    
    {/* Mobile Search */}
    <div className="flex items-center gap-2 border border-gray-300 px-3 rounded-full">
      <input
        value={searchQurey}
        onChange={(e) => setSearchQurey(e.target.value)}
        className="py-2 w-full bg-transparent outline-none placeholder-gray-500"
        type="text"
        placeholder="Search products"
      />

      <img
        src={assets.search_icon}
        alt="Search"
        className="w-4 h-4"
      />
    </div>

    <NavLink
      to="/"
      onClick={() => setOpen(false)}
      className="py-2 border-b border-gray-100"
    >
      Home
    </NavLink>

    <NavLink
      to="/all-products"
      onClick={() => setOpen(false)}
      className="py-2 border-b border-gray-100"
    >
      All Product
    </NavLink>

    <NavLink
      to="/contact"
      onClick={() => setOpen(false)}
      className="py-2 border-b border-gray-100"
    >
      Contact
    </NavLink>

    {!user ? (
      <button
        onClick={() => {
          setOpen(false);
          setShowUserLogin(true);
        }}
        className="w-full cursor-pointer px-6 py-3 bg-primary hover:bg-primary-dark transition text-white rounded-full text-sm"
      >
        Login
      </button>
    ) : (
      <>
        <button
          onClick={() => {
            setOpen(false);
            navigate("/my-profile");
          }}
          className="text-left py-2 border-b border-gray-100"
        >
          My Profile
        </button>

        <button
          onClick={() => {
            setOpen(false);
            navigate("/my-order");
          }}
          className="text-left py-2 border-b border-gray-100"
        >
          My Order
        </button>

        <button
          onClick={logout}
          className="w-full cursor-pointer px-6 py-3 bg-primary hover:bg-primary-dark transition text-white rounded-full text-sm"
        >
          Logout
        </button>
      </>
    )}
  </div>
</nav>


);
};

export default Navbar;
