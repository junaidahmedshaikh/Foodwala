import React from "react";
const filters = ["All", "Restaurants", "Dishes", "Over 4+ ★"];

export default function FilterBar({ onFilterRest }) {
  const handleFilterClick = (param) => {
    onFilterRest(param);
    console.log(param);
  };
  return (
    <div className="border-b border-gray bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {filters.map((filter) => (
            <button
              value={filter}
              onClick={(e) => {
                handleFilterClick(e.currentTarget.value);
              }}
              key={filter}
              className="px-4 py-2 rounded-full bg-whiteSmoke  text-black font-semibold hover:bg-gray whitespace-nowrap text-sm "
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
