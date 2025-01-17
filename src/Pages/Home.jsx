import { useState } from "react";
import Banner from "../assets/Banner.svg";
import { useGetCoordinate } from "../utils/useGetCoordinate";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Category from "../Components/Home/Category";
import HIW from "../Components/Home/HIW";
import FoodOption from "../Components/Home/FoodOption";
import { useDispatch } from "react-redux";
import { addUserCod } from "../Store/Slices/userSlice";
export default function Home() {
  const [userData, setUserData] = useState(""); // Address input
  // const [setCoordinates] = useState({}); // Local state for coordinates
  const { handleGetCoordinates } = useGetCoordinate();
  const { navigate } = useNavigate();
  const dispatch = useDispatch();

  // const userAddress =

  // Function to handle the search button click
  const handleSearch = async (userData) => {
    // Fetch coordinates for the given userData
    const result = await handleGetCoordinates(userData);
    console.log("result: ", result);

    if (result) {
      dispatch(addUserCod(result));
    }
    navigate("/FoodCatalog");
  };
  function handleEnter(e) {
    if (e) {
      console.log("Pressed Enter ");
    } else {
      console.log("Else");
    }
  }
  // console.log();
  return (
    <div className="text-white  ">
      {/* Home banner */}
      <div className=" h-screen flex flex-col justify-center items-center">
        {/* Title & Search container */}
        <div className="text-center z-10 space-y-8">
          {/* Main Title */}
          <h1 className="text-white text-4xl font-headingFont">
            Discover restaurants and more near you.
            <span>{}</span>
          </h1>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSearch}>
              <form className="relative">
                <input
                  type="search"
                  className="block text-black w-full p-4 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 outline-none"
                  placeholder="Enter Delivery Address"
                  value={userData}
                  onChange={(e) => {
                    setUserData(e.target.value);
                  }} // Update userData state on input change
                />
                <Link to={"/FoodCatalog"}>
                  {" "}
                  <button
                    onClick={() => {
                      handleSearch(userData); // Execute your search logic
                      // Navigate to the desired route
                    }}
                    type="button"
                    className="text-white absolute end-2.5 bottom-2.5 bg-red hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </Link>
              </form>
            </form>
          </div>
        </div>

        {/* Banner Container */}
        <div className="bg-red absolute top-10 -z-40 h-2/3  w-full">
          <img
            src={Banner}
            alt="Banner"
            className="object-cover overflow-hidden h-screen w-full"
          />
        </div>
      </div>
      <FoodOption />
      <HIW />
    </div>
  );
}
