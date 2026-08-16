import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="relative">
      <img src={assets.main_banner_bg} alt="Fresh groceries" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Fresh Groceries, Simple Shopping
        </h1>

        <p className="mt-4 text-lg text-white">
          Everything you need, delivered fresh to your door.
        </p>

        <button className="mt-6 bg-primary px-6 py-3 rounded-full text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
