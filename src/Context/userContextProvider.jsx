import React, { useState } from "react";
import userContext from "./userContext";

export default function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ lat: null, lon: null });

  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
}
