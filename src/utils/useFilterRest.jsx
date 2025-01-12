import React, { useEffect, useState } from "react";

export function useFilterRest({ RestList, userSearchData }) {
  const [Restlist, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);

  //   useEffect(() => {
  //     handleFilterRest();
  //   }, [userSearchData]);

  const handleFilterRest = () => {
    console.log("Filter Function is working");
    console.log("Filter Hook: ", userSearchData);
    console.log("Filter Hook: ", RestList);
  };
  return handleFilterRest;
}
