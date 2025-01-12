import { useParams } from "react-router-dom";
import RestaurantHeader from "../Components/Restaurant/RestaurantHeader";
import useGetRestInfo from "../utils/useGetRestInfo";
import MenuItem from "../Components/Restaurant/MenuItem";
import MenuItemSkeleton from "../Shimmer/RestProfileSkeleton/MenuItemSkeleton";
import { handleLoadMenu } from "../utils/Helper";
import { useState } from "react";
// import RestProfileSkeleton from "../Shimmer/RestProfileSkeleton/RestProfileSkeleton";
// import MenuItemSkeleton from "../Shimmer/RestProfileSkeleton/MenuItemSkeleton";
export default function RestProfile() {
  const { resId } = useParams();
  const [restInfo, restMenuList] = useGetRestInfo(resId);
  const [loadMenu, setLoadMenu] = useState(10);

  return (Array.isArray(restMenuList) && restMenuList.length === 0) ||
    restMenuList === null ? (
    <h1></h1>
  ) : (
    <>
      <div className="min-h-screen bg-gray-50">
        <RestaurantHeader {...restInfo} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              Welcome to The Rustic Table, where traditional Italian cuisine
              meets modern dining. Our passionate chefs create authentic dishes
              using the finest ingredients, bringing the heart of Italy to your
              table.
            </p>
          </div> */}

          {Array.isArray(restMenuList) && restMenuList.length > 0
            ? restMenuList.map((item, index) => {
                // console.log(index);
                return index <= loadMenu ? (
                  <MenuItem key={item.id * Math.random()} item={item} />
                ) : null;
              })
            : Array(3)
                .fill("")
                .map((_, index) => {
                  return <MenuItemSkeleton key={index} />;
                })}
          <div className="flex justify-center">
            {" "}
            <button
              type="button"
              onClick={() => {
                const temp = handleLoadMenu(loadMenu);
                setLoadMenu(temp);
              }}
              className="text-white bg-red  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Load More
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
