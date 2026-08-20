import { categories } from "../assets/assets";
import { UseAppContext } from "../context/AppContext.jsx";

const Categories = () => {
    const {navigate} = UseAppContext()
  return (
    <section className="mt-8 px-2 md:px-4">
      <h2 className="mb-6 text-2xl  text-gray-800 font-bold">
        Categories
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {categories.map((category) => (
          <div
            onClick={()=>navigate(`/product/${category.path.toLowerCase()}`,scrollTo(0,0))} 
            key={category.path}
            style={{ backgroundColor: category.bgColor }}
            className="flex cursor-pointer flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={category.image}
              alt={category.text}
              className="mb-3 h-20 w-20 object-contain md:h-24 md:w-24"
            />

            <p className="text-center text-sm font-medium text-gray-700 md:text-base">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;