import React, { useEffect, useState } from "react";

export default async function useGetRest() {
  const [RestList, setRestList] = useState();
  const GET_RESTUARANT_INFO_API =
    "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
  const handleRestaurantList = async (lat, lon) => {
    // const fetchRestList = await fetch();
    console.log(lat, lon, " useGetHok");
  };

  return handleRestaurantList;
}
