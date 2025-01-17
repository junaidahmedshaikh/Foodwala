// useGetOption.js
import React, { useEffect, useState } from "react";
import {
  SEARCH_FOOD_OPTION_TYPE_KEY,
  SEARCH_FOOD_OPTION_HEADING_INFO_TYPE_KEY,
} from "../constant";
import { useParams } from "react-router-dom";
import { Contact } from "lucide-react";
export default function useGetOption() {
  // Provide default value of null for 'id'
  const [searchRestList, setSearchRestList] = useState([]);
  const [headingInfo, setHeadingInfo] = useState({});
  const [searchRestListLength, setSearchRestListLength] = useState(0);
  const searchVal = useParams();
  const id = searchVal.id;
  const collection = searchVal.collection;
  useEffect(() => {
    async function getSelectedFood() {
      try {
        const GET_REST_LIST = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=${collection}&tags=layout_CCS_${id}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

        const fetchFoodOption = await fetch(GET_REST_LIST);
        const response = await fetchFoodOption.json();

        // console.log(response);
        const cards = response?.data?.cards || [];
        const restList = [];
        setSearchRestListLength(response?.data?.cards?.length);
        cards.forEach((item) => {
          if (item.card.card["@type"] === SEARCH_FOOD_OPTION_TYPE_KEY) {
            restList.push(item?.card?.card);
          } else if (
            item.card.card["@type"] === SEARCH_FOOD_OPTION_HEADING_INFO_TYPE_KEY
          ) {
            setHeadingInfo(item?.card?.card);
          } else {
            restList.push("Not Found Any Restaurant");
          }
        });

        setSearchRestList(restList);
      } catch (error) {
        console.log(error);
      }
    }

    if (id) {
      getSelectedFood();
    }
  }, [id]);
  return [searchRestList, searchRestListLength, headingInfo];
}
