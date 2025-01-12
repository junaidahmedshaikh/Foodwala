import { useContext, useState } from "react";
import UserContext from "../Context/userContext";

export const useGetCoordinate = () => {
  const [error, setError] = useState("");
  const { setUserCoordinate } = useContext(UserContext);

  // console.log("GETCOORDING: ");
  // Function to fetch coordinates
  const handleGetCoordinates = async (userData) => {
    if (!userData || userData.trim() === "") {
      setError("Please enter a valid address.");
      return null;
    }

    const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      userData.trim()
    )}&countrycodes=in&limit=1`;

    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setError("");
        // Update context
        setUserCoordinate({ lat, lon });
        // Return the coordinates
        return { lat, lon };
      } else {
        setError("Unable to retrieve coordinates for the given address.");
        return null;
      }
    } catch (error) {
      setError("An error occurred while fetching the coordinates.");
      console.error(error);
      return null;
    }
  };

  return {
    error,
    handleGetCoordinates,
  };
};
