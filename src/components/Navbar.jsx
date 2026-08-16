import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { UseAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin, navigate } = UseAppContext();

  //logout funcation
  const logout = async () => {
    setUser(false);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" onClick={()=>setOpen(false)}>
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-products">All Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="" className="w-4 h-4" />
        </div>

        <div onClick={()=>navigate("cart")}  className="relative hover:cursor-pointer">
          <img src={assets.cart_icon} alt="" className="w-4 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            0
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-3 mt-2 bg-primary hover:bg-primary-dark transition text-white rounded-full "
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
              <li onClick={()=>navigate("my-profile")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                My Profile
              </li>

              <li onClick={()=>navigate("my-order")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                My Order
              </li>

              <li onClick={logout} className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        <img src={assets.menu_icon} alt="" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/all-products" onClick={() => setOpen(false)}>
          All Product
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
       
        {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dark transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <button
            onClick={logout}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dark transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
