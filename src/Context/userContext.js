import { createContext } from "react";

const UserContext = createContext({
  Coordinate: {
    lat: 21.1702401,
    long: 72.83106070000001,
  },
});
// lat=&lng=
export default UserContext;

export const UserAddress = createContext({
  address: "Tardeo, Mumbai",
});
