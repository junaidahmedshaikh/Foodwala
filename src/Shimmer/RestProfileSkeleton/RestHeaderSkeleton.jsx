import React from "react";
import { Star, Clock, MapPin } from "lucide-react";
function RestHeaderSkeleton() {
  return (
    <div className="relative">
      <div className="h-[300px] bg-gray w-full overflow-hidden">
        <div alt="Restaurant interior" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl text-gray bg-gray">Name</h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray bg-gray">Rating</span>
                </div>
                <span className="text-black">•</span>
                <span className="text-gray bg-gray">No cuisines available</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-1" />
                <span>
                  <span className="text-gray bg-gray"> Close now</span>
                </span>
              </div>

              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-1" />
                <span className="text-gray bg-gray">Local Area Name </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestHeaderSkeleton;
