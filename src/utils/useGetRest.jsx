import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useGetRest() {
  const [RestList, setRestList] = useState();
  const { lat, lon } = useSelector((store) => store.user.userCod);
  useEffect(() => {
    async function fetchRestList() {
      try {
        const rawRestListData = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${
            lat || 18.969
          }&lng=${
            lon || 72.8205
          }&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const restData = await rawRestListData.json();

        function checkDataFunction() {
          let checkData =
            restData.data.cards[1].card.card?.gridElements?.infoWithStyle
              ?.restaurants;

          "checkDsta: ", checkData;
          if (checkData !== undefined) {
            return checkData;
          }
          // }
        }
        const restList = checkDataFunction();

        restList;
        setRestList(restList);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }
    fetchRestList();
  }, [lat, lon]);
  return RestList;
}
