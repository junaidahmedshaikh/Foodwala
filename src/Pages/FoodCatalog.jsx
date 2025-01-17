import { useEffect, useState } from "react";
import useGetRest from "../utils/useGetRest";
import RestCard from "../Components/Cards/RestCard";
import RestaurantListSkeleton from "../Shimmer/RestaurantListSkeleton";
import FilterBar from "../Components/Layout/FilterBar";
import { Link, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
export default function FoodCatalog() {
  const [RestList, setRestList] = useState([]);
  const RestaurantList = useGetRest();
  const { userSearchData } = useOutletContext();
  const [filterbarValue, setFilterbarValue] = useState("All");

  useEffect(() => {
    setRestList(RestaurantList);
  }, [RestaurantList]);

  // Filter restaurants based on the search term
  const filteredRestaurants = (RestList || []).filter((restaurant) => {
    if (!userSearchData || typeof userSearchData !== "string") {
      // If userSearchData is null, undefined, or not a string, return all restaurants
      return true;
    }
    // Perform filtering if userSearchData is valid
    return restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(userSearchData.toLowerCase());
  });

  // Render Compo on click
  const renderComponent = (param) => {
    //
    param;
    switch (param) {
      case "Dishes":
        return <h1>Dishes</h1>;

      default:
        return RestList || RestList?.length > 0 ? (
          displayList.map((data) => {
            //
            data.info;
            return (
              <Link to={"/restaurants/" + data?.info?.id} key={data?.info?.id}>
                <RestCard {...data?.info} />
              </Link>
            );
          })
        ) : (
          <RestaurantListSkeleton />
        );
    }
  };

  const displayList =
    userSearchData && userSearchData.trim() !== ""
      ? filteredRestaurants
      : RestList;
  return RestList?.length === 0 ? (
    <RestaurantListSkeleton />
  ) : (
    <div>
      <div>
        <FilterBar
          onFilterRest={(data) => {
            setFilterbarValue(data);
          }}
        />
      </div>
      {/* Card Container  */}
      <div
        id="Card Container"
        className="grid grid-cols-2 md:grid-cols-3  w-full gap-2 p-4"
      >
        {renderComponent(filterbarValue)}
      </div>
    </div>
  );
}
