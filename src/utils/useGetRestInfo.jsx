import React, { useEffect, useState } from "react";
import {
  GET_RESTUARANT_INFO_API,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
} from "../constant";

export default function useGetRestInfo(resId) {
  const [restInfo, setRestInfo] = useState(null);
  const [restMenuList, setRestMenuList] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRestaurantInfo() {
      try {
        const response = await fetch(`${GET_RESTUARANT_INFO_API}${resId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //   Restaurant Information
        const restJsonData = await response.json();
        const restaurantInformation =
          restJsonData?.data?.cards[2]?.card?.card?.info;

        restaurantInformation;

        // Restaurant Menu List
        const restaurantMenuList =
          restJsonData?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((x) => x.card?.card)
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];
        // const restaurantMenuList = restJsonData?.data?.cards.find(
        //   (x) => x.groupedCard
        // );
        setRestInfo(restaurantInformation);
        setRestMenuList(restaurantMenuList);
      } catch (err) {
        setError(err.message);

        "Error fetching restaurant info:", err;
      }
    }
    fetchRestaurantInfo();
  }, []);

  return [restInfo, restMenuList];
}
