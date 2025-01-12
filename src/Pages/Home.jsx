import { useState, useContext } from "react";
import Banner from "../assets/Banner.svg";
import { useGetCoordinate } from "../utils/useGetCoordinate";
import { Link } from "react-router-dom";
import UserContext from "../Context/userContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [userData, setUserData] = useState(""); // Address input
  const [coordinates, setCoordinates] = useState({}); // Local state for coordinates
  const { handleGetCoordinates } = useGetCoordinate();
  const { userCoordinate, userAddress, setUserAddress } =
    useContext(UserContext);
  const { navigate } = useNavigate();
  // console.log(userAddress);
  // Function to handle the search button click
  const handleSearch = async () => {
    // Fetch coordinates for the given userData
    const result = await handleGetCoordinates(userData.trim());
    if (result) {
      setCoordinates(result);
    }
  };

  // console.log();
  return (
    <div className="text-white">
      {/* Home banner */}
      <div className="bg-red h-screen flex flex-col justify-center items-center">
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
              <div className="relative">
                <input
                  type="search"
                  className="block text-black w-full p-4 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 outline-none"
                  placeholder="Enter Delivery Address"
                  value={userData}
                  onChange={(e) => setUserData(e.target.value)} // Update userData state on input change
                />
                <Link to={"/FoodCatalog"}>
                  {" "}
                  <button
                    onClick={() => {
                      handleSearch(); // Execute your search logic
                      setUserAddress(userData);
                      navigate("/FoodCatalog"); // Navigate to the desired route
                    }}
                    type="button"
                    className="text-white absolute end-2.5 bottom-2.5 bg-red hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Banner Container */}
        <div className="absolute bottom-0 w-full">
          <img src={Banner} alt="Banner" className="w-full" />
        </div>
      </div>
    </div>
  );
}
