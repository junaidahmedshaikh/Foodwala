// import React from "react";
import { Star, Clock } from "lucide-react";
export default function RestaurantCardSkeleton() {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-sm">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="bg-gray w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
        (
        <div className="absolute top-3 left-3 bg-red text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1" />
        )
      </div>

      {/* Content Container */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="bg-gray text-gray font-semibold text-gray-900 truncate">
            {" "}
            title
          </h3>
          <div className="flex items-center gap-1">
            <Star fill="gray" size={16} strokeWidth={0} />
            <span className="text-sm font-medium text-gray bg-gray">TITLE</span>
          </div>
        </div>

        <p className="text-gray bg-gray text-sm mb-3">cuisines</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={14} stroke="gray" />
            <span className="bg-gray text-gray ">Rating</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-gray text-gray ">PRICE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
