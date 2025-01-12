import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { X, IndianRupee } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../Store/store";

// import useBillDetails from "../../utils/useBillDetails";
export default function CartModel({ closeModel }) {
  const [totalItemPrice, setTotalItemPrice] = useState();
  // const totalItemPrice = useBillDetails();
  const items = useSelector((store) => store?.cart?.items);
  const totalItem = useSelector((store) => store?.cart?.totalPrice / 100);
  const navigator = useNavigate();
  useEffect(() => {
    setTotalItemPrice(totalItem);
  }, [totalItem]);
  console.log(totalItem);
  return (
    <div
      //   ref={modelRef}
      //   onClick={refFunction}
      key={Math.random * 123}
      className="container fixed top-16 right-1 z-50 mx-auto p-4 max-w-96 bg-white rounded-lg shadow-lg"
    >
      <div className="mb-8">
        <div className="">
          <span className="flex justify-start items-center">
            {" "}
            <button onClick={closeModel}>
              {" "}
              <X />
            </button>
          </span>
          <span>
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          </span>
        </div>
        {/* Product Cart here */}
        {/* {} */}
        {items.length === 0 ? (
          <div>
            <h1>Your cart is empty</h1>
            <span>You can go to home page to view more restaurants</span>
          </div>
        ) : (
          items.map((item) => {
            // console.log(item);
            return <ItemCard key={item?.item?.id * 100} {...item?.item} />;
          })
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Bill Details</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-fontDarkGray font-semibold">Item Total</span>
            <span className="text-fontDarkGray font-semibold flex justify-center items-center align-middle">
              <IndianRupee size={13} />
              <span>{totalItemPrice}</span>
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-fontDarkGray font-semibold">
              Handling Fee
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
                {totalItemPrice + 40}
              </span>
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          navigator("/checkout");
        }}
        className="w-full bg-red text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center"
      >
        Place Order
      </button>
    </div>
  );
}
