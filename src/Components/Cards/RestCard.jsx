import React from "react";
import { Star, Clock, DollarSign, Percent } from "lucide-react";
import { IMG_CDN_URL } from "../../constant";

export default function RestCard({
  aggregatedDiscountInfoV3,
  cloudinaryImageId,
  avgRatingString,
  areaName,
  cuisines,
  name,
  sla,
}) {
  let deliveryFee = 0;
  let rating = 4;
  let promotion = aggregatedDiscountInfoV3?.header;

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-sm">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        (
        <div className="absolute top-3 left-3 bg-red text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          {promotion === "ITEMS" ? "30% OFF" : promotion}
        </div>
        )
      </div>

      {/* Content Container */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star fill="yellow" size={16} strokeWidth={0} />
            <span className="text-sm font-medium text-gray-700">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">{cuisines.join(", ")}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{sla?.slaString}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{sla?.lastMileTravelString}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
