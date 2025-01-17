// Example usage of the custom colors in your component
import { foodItems } from "../../constant";
import { Link } from "react-router-dom";
import useGetOption from "../../utils/useGetOption";
function FoodItem({ name, icon: Icon, color, bgColor }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div
        className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-2 
        transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
      >
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <span
        className="text-sm font-medium text-fontDarkGray group-hover:text-gray-900 
        transition-colors duration-300 text-center"
      >
        {name}
      </span>
    </div>
  );
}

function FoodOption() {
  const getSelectedFood = useGetOption();

  return (
    <div className="min-h- bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fontDarkGray sm:text-4xl mb-4">
            Order Our Best Food Options
          </h2>
          <p className="text-lg text-fontGray max-w-2xl mx-auto">
            Discover our most popular dishes, crafted with love and served with
            excellence
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {foodItems.map((item) => (
            <Link
              key={item.name}
              to={`/explore/${item?.collection}/${item.searchVal}`}
            >
              <FoodItem
                key={item.name}
                name={item.name}
                icon={item.icon}
                color={item.color}
                bgColor={item.bgColor}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodOption;
