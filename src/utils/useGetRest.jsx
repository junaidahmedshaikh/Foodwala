import React, { useEffect, useState } from "react";
import { GET_RESTAURANT_LIST_API } from "../constant";

export default function useGetRest() {
  // console.log(data);
  const [RestList, setRestList] = useState();
  useEffect(() => {
    fetchRestList();
  }, []);

  async function fetchRestList() {
    const rawRestListData = await fetch(GET_RESTAURANT_LIST_API);
    const restData = await rawRestListData.json();

    function checkDataFunction() {
      for (let i = 0; i <= restData?.data?.cards.length; i++) {
        let checkData = restData?.data?.cards;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const restList = checkDataFunction();
    setRestList(
      restList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log();
  }
  return RestList;
}
