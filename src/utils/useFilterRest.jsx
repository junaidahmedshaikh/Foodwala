import React, { useEffect, useState } from "react";

export function useFilterRest({ RestList, userSearchData }) {
  const [Restlist, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);

  //   useEffect(() => {
  //     handleFilterRest();
  //   }, [userSearchData]);

  const handleFilterRest = () => {
    ("Filter Function is working");

    "Filter Hook: ", userSearchData;

    "Filter Hook: ", RestList;
  };
  return handleFilterRest;
}
