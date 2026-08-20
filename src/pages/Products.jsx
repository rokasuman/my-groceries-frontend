import { UseAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Products = () => {
  const {
    product,
    addToCart,
    removeFromCart,
    cartItems,
    searchQurey
  } = UseAppContext();

 const filteredProducts = product.filter((item) =>
  item.name?.toLowerCase().includes(searchQurey.toLowerCase())
);


  return (
    <div className="mt-10 px-4 md:px-8 lg:px-12">
      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        All Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredProducts.map((item) => {
          const quantity = cartItems[item._id] || 0;

          return (
            <div
              key={item._id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="flex h-40 items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="mt-3">
                <h2 className="truncate text-sm font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Fresh & Quality Product
                </p>

                {/* Price */}
                <p className="mt-2 text-lg font-bold text-green-600">
                  ${item.price}
                </p>

                {/* Cart Button */}
                {quantity === 0 ? (
                  <button
                    type="button"
                    onClick={() => addToCart(item._id)}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
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
                  <div className="mt-3 flex w-full items-center justify-between rounded-xl bg-green-100 px-3 py-2">
                    {/* Minus */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item._id)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white transition hover:bg-green-700"
                    >
                      −
                    </button>

                    {/* Quantity */}
                    <span className="font-semibold text-green-800">
                      {quantity}
                    </span>

                    {/* Plus */}
                    <button
                      type="button"
                      onClick={() => addToCart(item._id)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white transition hover:bg-green-700"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;