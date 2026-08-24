import { UseAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";

const CategoriesPage = () => {
  const { product, navigate } = UseAppContext();
  const { category } = useParams();

  const selectedCategory = categories.find(
    (item) => item.path.toLowerCase() === category?.toLowerCase(),
  );

  const filteredProducts = product.filter(
    (item) => item.category?.toLowerCase() === category?.toLowerCase(),
  );

  return (
    <div className="py-10">
      {/* Category heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          {selectedCategory?.text}
        </h1>

        <p className="mt-2 text-gray-500">
          Explore our {selectedCategory?.text?.toLowerCase()}
        </p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/product/${category}/${item._id}`)}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-48 items-center justify-center bg-gray-50 p-4">
              <img
                src={item.image[0]}
                alt={item.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <h2 className="truncate text-base font-medium text-gray-800">
                {item.name}
              </h2>

              <p className="mt-2 text-lg font-semibold text-green-500">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No products */}
      {filteredProducts.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
