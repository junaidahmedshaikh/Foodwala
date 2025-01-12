import React from "react";
import { Plus, IndianRupee } from "lucide-react";
import { IMG_CDN_URL } from "../../constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/Slices/cartSlice";

export default function MenuItem(item) {
  const dispatch = useDispatch();
  const handleAddItemAction = () => {
    // console.log("Med: ", item);
    dispatch(addItem(item));
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 hover:bg-Dark-50 rounded-lg transition-colors">
        <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={IMG_CDN_URL + item.item.imageId}
            alt={item.item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-black text-lg font-semibold ">
            {item.item.name}
          </h3>
          <p className="mt-1 text-fontGray text-sm">{item.item.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-fontDarkGray font-semibold flex justify-center items-center align-middle">
              <IndianRupee size={13} />
              {item.item.price !== undefined
                ? Number(item.item.price || 10) / 100
                : Number(item.item.finalPrice || 10000) / 100}
            </span>
            <button
              onClick={handleAddItemAction}
              className="bg-primary text-white bg-red px-4 py-2 rounded-full flex items-center hover:bg-primary-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
