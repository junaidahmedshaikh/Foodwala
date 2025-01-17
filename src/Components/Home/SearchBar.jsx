import { useState } from "react";
export default function SearchBar({ sendDataToParent }) {
  const [userInput, setUserInput] = useState();

  const sendData = () => {
    const userdata = userInput;
    sendDataToParent(userdata);
  };
  return (
    <form className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute text-red inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            opacity={0.4}
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block text-black w-full p-4 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 outline-none"
          placeholder="Enter Delivery Address"
          required
          onChange={(e) => {
            //
            e.target.value;
            setUserInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-red hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2"
          onClick={sendData()}
        >
          Search
        </button>
      </div>
    </form>
  );
}
