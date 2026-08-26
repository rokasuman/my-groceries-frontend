import { assets, features } from "../assets/assets";

const SmallBanner = () => {
  return (
    <div className="mt-8 px-2 md:px-4">
      <div className="relative overflow-hidden rounded-xl">
        {/* Desktop Banner */}
        <img
          src={assets.bottom_banner_image}
          alt=""
          className="hidden w-full h-auto md:block sm:h-[350px]"
        />

        {/* Mobile Banner */}
        <img
          src={assets.bottom_banner_image_sm}
          alt=""
          className="mx-auto block w-full h-[660px] md:hidden"
        />

        {/* Features */}
        <div className="absolute inset-0 flex items-start justify-center px-4 pt-5 md:items-center md:justify-end md:px-10 md:pt-0">
          <div className="w-full md:w-1/2 md:max-w-md">
            <h1 className="mb-3 text-center text-sm font-bold text-gray-800 sm:text-lg md:mb-6 md:text-3xl">
              Why we are the best
            </h1>

            <div className="grid grid-cols-1 place-items-center gap-3 md:grid-cols-2 md:gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-center text-center"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="mb-1 h-6 w-6 object-contain sm:h-7 sm:w-7 md:h-10 md:w-10"
                  />

                  <h2 className="mb-1 text-xs font-semibold text-gray-800 sm:text-sm md:text-base">
                    {feature.title}
                  </h2>

                  <p className="max-w-[220px] text-[9px] leading-tight text-gray-600 sm:text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-3 sm:gap-6 mt-10">
          <img
            src={assets.play_store}
            alt="Play Store"
            className="w-28 sm:w-32 h-auto object-contain"
          />

          <img
            src={assets.app_store}
            alt="App Store"
            className="w-28 sm:w-32 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
