import { assets } from "../assets/assets";
import { UseAppContext } from "../context/AppContext";

const Banner = () => {
  const { navigate } = UseAppContext();

  return (
    <div className="mt-4 px-2 md:px-4">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={assets.main_banner_bg}
          alt="Fresh groceries"
          className="h-[300px] w-full object-cover sm:h-[350px] md:h-auto"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8">
          <h1 className="text-2xl font-bold leading-tight text-green-950 sm:text-4xl md:text-6xl">
            Fresh Groceries, Simple Shopping
          </h1>

          <p className="mt-3 max-w-md text-sm text-accent sm:mt-4 sm:text-lg">
            Everything you need, delivered fresh to your door.
          </p>

          <div className="flex items-center justify-center gap-5">
            <button
              onClick={() => navigate("all-products")}
              className="group mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-white"
            >
              Shop Now
              <span className="px-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              onClick={() => navigate("deals")}
              className="group mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-white"
            >
              Explore Deals
              <span className="px-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;