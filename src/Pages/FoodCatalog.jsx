import userContext from "../Context/userContext";
import { useContext } from "react";
export default function FoodCatalog() {
  const { userInfo } = useContext(userContext);
  // console.log("Latitude:", userInfo.latitude);
  // console.log("Longitude:", userInfo.longitude);
  console.log(userInfo);
  return (
    <div>
      <h1>Catalog</h1>
      <div className="text-red text-3xl"> </div>
    </div>
  );
}
