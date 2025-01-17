import React, { useState } from "react";
import { Trash2, Minus, Plus, IndianRupee } from "lucide-react";
import { IMG_CDN_URL } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, removeItem } from "../../Store/Slices/cartSlice";
export default function ItemCard(item) {
  const [itemQuantity, setitemQuantity] = useState(1);
  const [itemPrice, setitemPrice] = useState(item?.price || item.defaultPrice);
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };
  const handleAddItem = () => {
    setitemQuantity(itemQuantity + 1);
    dispatch(
      updateItem({ id: item.id, quantity: itemQuantity, price: itemPrice })
    );
  };
  const handleUpdateItem = () => {
    setitemQuantity(itemQuantity - 1);

    dispatch(updateItem(item));
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray">
      <img
        src={IMG_CDN_URL + item.imageId}
        alt={item.name}
        // alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-medium text-black">{item.name}</h3>

        <p className="text-fontDarkGray font-semibold flex items-center align-middle">
          <IndianRupee size={13} />

          {(item.price || item.defaultPrice / 100) * itemQuantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-1 hover:bg-gray-100 rounded">
          {itemQuantity === 1 ? (
            <button
              onClick={handleRemoveItem}
              className="p-1 hover:scale-110 rounded ml-2"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          ) : (
            <button
              onClick={handleUpdateItem}
              className="p-1 hover:scale-110 rounded ml-2"
            >
              <Minus className="w-4 h-4" strokeWidth={3} />
            </button>
          )}
        </div>
        <span className="w-8 text-center">{itemQuantity}</span>
        <button onClick={handleAddItem} className="p-1 hover:scale-110 rounded">
          <Plus className="w-4 h-4" color="green" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}

// <div
//   key={item.id}
//   className="flex justify-between items-center border-b py-4"
// >
//   <div className="flex items-center">
//     <img
//       src={item.image}
//       alt={item.name}
//       className="w-20 h-20 rounded-md mr-4"
//     />
//     <div>
//       <h4 className="font-semibold text-black text-lg mb-1">{item.name}</h4>
//       <p className="text-sm text-gray-600">Size: {item.size}</p>
//       {/* <p className="text-sm text-gray-600">Price: ${item.price}</p>
//       <p className="text-sm text-gray-600">Quantity: {item.quantity}</p> */}
//     </div>
//   </div>
//   <div className="text-right">
//     <p className="text-lg font-semibold">${item.price * item.quantity}</p>
//   </div>
// </div>
