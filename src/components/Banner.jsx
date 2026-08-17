import { assets } from "../assets/assets";
import { UseAppContext } from "../context/AppContext";

const Banner = () => {
  const { navigate } = UseAppContext();

  return (
    <div className="relative mt-4">
      <img
        src={assets.main_banner_bg}
        alt="Fresh groceries"
        className="w-full h-[300px] sm:h-[350px] md:h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green-950 leading-tight">
          Fresh Groceries, Simple Shopping
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-accent max-w-md">
          Everything you need, delivered fresh to your door.
        </p>
        <div className="flex items-center justify-items-center text-center gap-5 ">
          <button
            onClick={() => navigate("all-products")}
            className="group mt-4 bg-primary px-6 py-3 rounded-full text-white flex items-center gap-2 hover:cursor-pointer"
          >
            Shop Now 
            <span className="px-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            onClick={() => navigate("deals")}
            className="group mt-4 bg-yellow-500 px-6 py-3 rounded-full text-white flex items-center gap-2 hover:cursor-pointer"
          >
            Explore Deals
            <span className="px-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
