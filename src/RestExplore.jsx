import React from "react";
import { useParams } from "react-router-dom";
import useGetOption from "./utils/useGetOption";
import RestCard from "./Components/Cards/RestCard";
import RestaurantListSkeleton from "./Shimmer/RestaurantListSkeleton";
import { Link } from "react-router-dom";
export default function RestExplore() {
  const { id, collection } = useParams();
  const [searchRestList, searchRestListLength, headingInfo] = useGetOption(id);
  return (
    <div className="mx-auto px-4 sm:container">
      <header className="pt-10">
        {" "}
        <h2 className="mb-2 text-3xl font-bold text-fontDarkGray">
          {headingInfo.title}
        </h2>
        <p className="text-base   text-fontGray ">{headingInfo.description}</p>
      </header>
      <main>
        <div className="mb-2 text-2xl font-semibold text-black">
          {searchRestListLength} Restaurants to explore
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchRestList.length === 0 ? (
            <RestaurantListSkeleton />
          ) : (
            searchRestList.map((item) => {
              if (item.info !== undefined) {
                return (
                  <Link
                    to={"/restaurants/" + item?.info?.id}
                    key={item?.info?.id}
                  >
                    <RestCard {...item?.info} />
                  </Link>
                );
              }
            })
          )}
        </div>
      </main>
    </div>
  );
}
