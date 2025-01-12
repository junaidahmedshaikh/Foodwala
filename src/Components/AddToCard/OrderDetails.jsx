import React from "react";
import { useSelector } from "react-redux";
import store from "../../Store/store";
import { IndianRupee } from "lucide-react";
export default function OrderDetails(allItems) {
  const { allItem } = allItems;
  console.log(allItem);
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4 text-fontDarkGray">
        {Array.isArray(allItem) ? (
          allItem.map((item) => (
            <div
              key={item.item.id}
              className="flex justify-between items-center"
            >
              {/* {console.log(item.item)} */}
              <div>
                <p className="font-semibold">{item.item.name}</p>
                <p className="text-sm text-grayDark">
                  <span>Quantity: {item.item.quantity | 1}</span>
                </p>
              </div>
              <p className="text-fontDarkGray font-semibold flex items-center align-middle">
                <IndianRupee size={14} />
                <span>{((item.item.price * 1) / 100).toFixed(2)}</span>
              </p>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
      <div className="mt-6 pt-6 border-t">
        <div className="flex text-fontDarkGray justify-between items-center">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-semibold">${"total"}</p>
        </div>
      </div>
    </div>
  );
}
