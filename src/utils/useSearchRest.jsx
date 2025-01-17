import React, { useState } from "react";

import { SEARCH_API } from "../constant";

export default function useSearchRest() {
  const [searchList, setSearchList] = useState();
  async function searchRestFunction(userSearchData) {
    try {
      const fetchSearchList = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.0748&lng=72.8856&str=${userSearchData}&trackingId=17a2c435-997a-67cb-23fa-2d98fb42d55f&submitAction=ENTER&queryUniqueId=93253894-93dd-bb48-8202-4e6ca05111dd`
      );
      const response = await fetchSearchList.json();
      setSearchList(response);
    } catch (error) {
      error, " in UseSearchList Hook";
    }
    //
    "Worik", userSearchData;
  }

  return { searchRestFunction, searchList };
}
