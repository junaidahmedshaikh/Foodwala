import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItem } from "../../Store/Slices/cartSlice";
import { IndianRupee } from "lucide-react";
import { Plus, Minus } from "lucide-react";
export default function OrderDetails({ allItem }) {
  const state = useSelector((store) => store?.cart);
  const dispatch = useDispatch();

  // Local state for merged items
  const [mergedItems, setMergedItems] = useState([]);

  // Function to merge duplicate items
  const mergeItems = (items) => {
    const itemMap = {};

    items.forEach((item) => {
      const id = item.item.id;
      if (itemMap[id]) {
        itemMap[id].item.quantity += item.item.quantity || 1; // Increment quantity
      } else {
        itemMap[id] = {
          ...item,
          item: { ...item.item, quantity: item.item.quantity || 1 },
        };
      }
    });

    return Object.values(itemMap);
  };

  // Sync with Redux or Props
  useEffect(() => {
    if (Array.isArray(allItem)) {
      const merged = mergeItems(allItem);
      setMergedItems(merged); // Update local state
    }
  }, [allItem]);

  const handleQuantityChange = (itemId, increment) => {
    const updatedItems = mergedItems.map((item) => {
      if (item.item.id === itemId) {
        const newQuantity = item.item.quantity + (increment ? 1 : -1);
        // Prevent negative quantity
        if (newQuantity < 1) return item;

        // Dispatch to Redux
        dispatch(
          updateItem({
            id: itemId,
            quantity: newQuantity,
            price: item.item.price || item.item.defaultPrice,
          })
        );

        // Update item quantity
        return {
          ...item,
          item: { ...item.item, quantity: newQuantity },
        };
      }
      return item;
    });

    setMergedItems(updatedItems); // Update UI state
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4 text-fontDarkGray">
        {Array.isArray(mergedItems) && mergedItems.length > 0 ? (
          mergedItems.map((item) => (
            <div
              key={item.item.id}
              className="flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.item.name}</p>
                <p className="text-sm text-fontGray flex items-center">
                  <div>
                    <span className="pr-4">Quantity:</span>
                    <span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.item.id, false)
                        }
                        className="text-red"
                      >
                        <Minus className="w-3 h-3" strokeWidth={3} />
                      </button>
                    </span>
                    <span className="text-green text-base font-semibold">
                      {" "}
                      {item.item.quantity}
                    </span>
                    <span className="">
                      {" "}
                      <button
                        onClick={() => handleQuantityChange(item.item.id, true)}
                        className="text-green mr-2 "
                      >
                        <Plus className="w-3 h-3 " strokeWidth={3} />
                      </button>
                    </span>
                  </div>
                </p>
              </div>
              <p className="text-fontDarkGray font-semibold flex items-center align-middle">
                <IndianRupee size={14} />
                <span>
                  {(
                    (item.item.price ||
                      item.item.defaultPrice * item.item.quantity) / 100
                  ).toFixed(2)}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
      <div className="mt-6 pt-6 border-t">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-fontDarkGray font-semibold">Total</span>
            <span className="text-fontDarkGray font-semibold flex justify-center items-center align-middle">
              <IndianRupee size={13} />
              <span>{state.totalPrice / 100}</span>
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-fontDarkGray font-semibold">
              Plathform Fee
            </span>
            <span className="text-fontDarkGray font-semibold flex justify-center items-center align-middle">
              <IndianRupee size={13} />
              <span>10</span>
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-fontDarkGray font-semibold">
              Delivery Charges
            </span>
            <span className="text-fontDarkGray font-semibold flex justify-center items-center align-middle">
              <IndianRupee size={13} />
              <span>30</span>
            </span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
            <span>To Pay</span>
            <span className="text-black font-semibold flex justify-center items-center align-middle">
              <IndianRupee size={13} />
              <span className="text-black font-bold">
                {state.totalPrice / 100 + 40}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
