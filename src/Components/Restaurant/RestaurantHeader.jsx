import { Clock, IndianRupee, MapPin, Star } from "lucide-react";
import { useState } from "react";
import RestHeaderSkeleton from "../../Shimmer/RestProfileSkeleton/RestHeaderSkeleton";
import { IMG_CDN_URL } from "../../constant";
export default function RestaurantHeader(restInfoProp) {
  //
  restInfoProp;
  const [restInfo, setRestInfo] = useState(restInfoProp);

  return Object.keys(restInfoProp).length === 0 ? (
    <RestHeaderSkeleton />
  ) : (
    <div className="relative">
      <div className="h-[300px] w-full overflow-hidden">
        <img
          src={IMG_CDN_URL + restInfoProp.cloudinaryImageId}
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {restInfoProp.name}
              </h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-700">
                    {restInfoProp.avgRatingString} (
                    {restInfoProp.totalRatingsString})
                  </span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">
                  {Array.isArray(restInfoProp.cuisines)
                    ? restInfoProp.cuisines.join(", ")
                    : "No cuisines available"}
                </span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-1" />
                <span>
                  {restInfoProp.isOpen ? (
                    <span className="text-green font-semibold">Open now</span>
                  ) : (
                    <span> Close now</span>
                  )}
                </span>
              </div>
              {/* <div className="flex items-center text-gray-700">
                <IndianRupee className="w-5 h-5 mr-1" />
                <span>$$</span>
              </div> */}
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-1" />
                <span>{restInfoProp.areaName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
