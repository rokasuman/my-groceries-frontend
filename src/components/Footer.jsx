
import { assets } from "../assets/assets";
import { UseAppContext } from "../context/AppContext";

const Footer = () => {
  const { navigate } = UseAppContext();

  return (
    <footer className="w-full bg-white pt-10 text-sm text-slate-500">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Logo & Description */}
          <div>
            <img
              src={assets.logo}
              alt="GreenCart"
              className="w-32"
            />

            <p className="text-sm leading-7 mt-5 max-w-lg">
              GreenCart is an online grocery shopping platform that makes
              buying fresh and everyday essentials simple and convenient.
              Customers can browse a wide range of products, add items to
              their cart, and place orders easily from the comfort of their
              home. With a user-friendly design and smooth shopping
              experience, GreenCart aims to make grocery shopping faster,
              easier, and more accessible.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col lg:items-center">
            <div className="flex flex-col text-sm space-y-3">
              <h2 className="font-semibold mb-3 text-gray-800">
                Company
              </h2>

              <button
                onClick={() => navigate("/")}
                className="text-left hover:text-slate-800 transition"
              >
                About us
              </button>

              <a
                href="#"
                className="hover:text-slate-800 transition"
              >
                Careers
                <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                  We're hiring!
                </span>
              </a>

              <button
                onClick={() => navigate("/contact")}
                className="text-left hover:text-slate-800 transition"
              >
                Contact us
              </button>

              <a
                href="#"
                className="hover:text-slate-800 transition"
              >
                Privacy policy
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Subscribe To Never Miss The Deals!
            </h2>

            <div className="max-w-md">
              <div className="flex flex-col sm:flex-row items-stretch gap-2 p-2 rounded-md bg-indigo-50">

                <input
                  className="bg-white outline-none w-full py-2 px-3 rounded focus:ring-2 focus:ring-indigo-600"
                  type="email"
                  placeholder="Enter your email"
                />

                <button className="bg-primary px-5 py-2 text-white rounded hover:opacity-90 transition">
                  Subscribe
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-8 px-4 py-4 text-center border border-red-200 bg-red-50 rounded-md">
          <p className="text-red-600 font-semibold leading-6">
            Disclaimer: This website was made for learning purposes only.
            All photos used on this website were taken from Amazon Australia.
            Please do not make any transactions or payments through this
            website.
          </p>

          <p className="text-red-600 mt-2 leading-6">
            If you have made any transaction or payment, please contact
            <span className="font-semibold"> Suman Roka </span>
            at{" "}
            <a
              href="mailto:roka7362@gmail.com"
              className="font-semibold underline hover:text-red-800"
            >
              roka7362@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Copyright */}
        <p className="py-4 text-center border-t mt-8 border-slate-200">
          Copyright 2026 © <span>GreenCart</span> All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

