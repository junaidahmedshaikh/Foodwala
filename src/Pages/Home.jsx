import { useState, useContext } from "react";
import Banner from "../assets/Banner.svg";
import { useGetCoordinate } from "../utils/useGetCoordinate";
import userContext from "../Context/userContext";

export default function Home() {
  const [userData, setUserData] = useState(""); // Address input
  const [coordinates, setCoordinates] = useState(null); // Local state for coordinates
  const { handleGetCoordinates } = useGetCoordinate();
  const { userInfo, setUserInfo } = useContext(userContext);

  // Function to handle the search button click
  const handleSearch = async (e) => {
    e.preventDefault();

    // Fetch coordinates for the given userData
    const result = await handleGetCoordinates(userData.trim());
    if (result) {
      setCoordinates(result);
      console.log(userInfo); // Update local state with fetched coordinates
    }
  };

  return (
    <div className="text-white">
      {/* Home banner */}
      <div className="bg-red h-screen flex flex-col justify-center items-center">
        {/* Title & Search container */}
        <div className="text-center z-10 space-y-8">
          {/* Main Title */}
          <h1 className="text-white text-4xl font-headingFont">
            Discover restaurants and more near you.
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
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-red hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2"
                >
                  Search
                </button>
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
