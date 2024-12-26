// import { useState } from "react";

// export const useAddressToCoordinates = () => {
//   const [address, setAddress] = useState("");
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [error, setError] = useState("");

//   const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//     address
//   )}&countrycodes=in&limit=1`;

//   const handleGetCoordinates = async () => {
//     if (!address) {
//       setError("Please enter an address.");
//       return;
//     }

//     try {
//       // Make the request using fetch
//       const response = await fetch(geocodeUrl);
//       const data = await response.json(); // Ensure you parse the JSON response

//       console.log(data); // Check the response structure

//       if (data.length > 0) {
//         const { lat, lon } = data[0]; // Access lat and lon directly
//         setLatitude(lat);
//         setLongitude(lon);
//         setError(""); // Clear error if successful
//       } else {
//         setError("Unable to retrieve coordinates for the given address.");
//       }
//     } catch (error) {
//       setError("An error occurred while fetching the coordinates.");
//       +error;
//     }
//     return latitude, longitude;
//   };

//   return handleGetCoordinates;
// };
