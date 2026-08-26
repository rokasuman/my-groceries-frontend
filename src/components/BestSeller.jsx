import { assets } from "../assets/assets";
import { UseAppContext } from "../context/AppContext";

const BestSeller = () => {
  const {
    product,
    addToCart,
    removeFromCart,
    navigate,
    cartItems,
  } = UseAppContext();

  return (
    <div className="mt-8 px-2 md:px-4">
      <h2 className="mb-1 text-2xl font-bold text-gray-800">
        Best Selling
      </h2>

      <p className="mb-8 text-gray-500">
        Our most-loved picks, all in one place.
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {product.slice(0, 5).map((item) => {
          const quantity = cartItems[item._id] || 0;

          return (
            <div
              key={item._id}
              onClick={() => navigate(`/product/${item.category}/${item._id}`)}
              className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="h-40 w-full object-contain"
              />

              <h3 className="mt-3 font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="mt-1 font-semibold text-green-800">
                ${item.offerPrice}
              </p>

              {quantity === 0 ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item._id);
                  }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-800 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                >
                  Add To Cart

                  <img
                    src={assets.cart_icon}
                    alt="Cart"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 flex w-full items-center justify-between rounded-2xl bg-green-100 px-3 py-2"
                >
                  <button
                    type="button"
                    onClick={() => removeFromCart(item._id)}
                    className="text-xl font-bold text-green-800"
                  >
                    −
                  </button>

                  <span className="font-semibold text-green-800">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => addToCart(item._id)}
                    className="text-xl font-bold text-green-800"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* See More Button */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          className="cursor-pointer rounded-4xl bg-green-900 px-6 py-3 text-white transition hover:bg-green-800"
          onClick={() => {
            navigate("/all-products");

            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default BestSeller;