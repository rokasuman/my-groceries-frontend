import { useState } from "react";
import { UseAppContext } from "../context/AppContext";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const { setShowUserLogin, setUser } = UseAppContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser({
      email: "roka7362@gmail.com",
      password: "12345",
      name: "suman",
    });
    if (isSignup && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setShowUserLogin(false);
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
            <span className="text-2xl">🛒</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>

        <p className="mt-2 text-center text-gray-500">
          {isSignup
            ? "Create your GreenCart account."
            : "Login to continue shopping with GreenCart."}
        </p>

        {/* Name */}
        {isSignup && (
          <div className="mt-8">
            <label className="font-medium text-gray-700">Full Name</label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-2 rounded-md border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none px-3 py-3 w-full"
              required
            />
          </div>
        )}

        {/* Email */}
        <div className={isSignup ? "mt-5" : "mt-8"}>
          <label className="font-medium text-gray-700">Email</label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-2 rounded-md border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none px-3 py-3 w-full"
            required
          />
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="font-medium text-gray-700">Password</label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-2 rounded-md border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none px-3 py-3 w-full"
            required
          />
        </div>

        {/* Confirm Password */}
        {isSignup && (
          <div className="mt-5">
            <label className="font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="mt-2 rounded-md border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none px-3 py-3 w-full"
              required
            />
          </div>
        )}

        {/* Forgot Password */}
        {!isSignup && (
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          className="mt-7 py-3 w-full cursor-pointer rounded-md bg-green-600 text-white font-medium transition hover:bg-green-700"
        >
          {isSignup ? "Create Account" : "Login"}
        </button>

        {/* Switch */}
        <p className="text-center mt-6 text-gray-600">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-green-600 font-medium hover:underline cursor-pointer"
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
