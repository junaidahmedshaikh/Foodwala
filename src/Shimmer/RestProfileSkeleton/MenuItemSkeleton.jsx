import React from "react";
import { IndianRupee, Plus } from "lucide-react";
export default function MenuItemSkeleton() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 hover:bg-Dark-50 rounded-lg transition-colors">
        <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
          <div className="bg-gray w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h3 className="text-gray bg-gray text-lg font-semibold ">
            Name of product
          </h3>
          <p className="text-gray bg-gray mt-1 text-DarkDark text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            nisi.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-gray bg-gray font-medium flex justify-center items-center align-middle">
              <IndianRupee size={13} />
              999
            </span>
            <button className="text-red bg-red px-4 py-2 rounded-full flex items-center hover:bg-primary-700 transition-colors">
              <Plus className="w-4 h-4 mr-1" />
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
