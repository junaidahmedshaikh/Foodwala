import { useState } from "react";
import { Dock } from "lucide-react";
import PersonalInfo from "../Components/AddToCard/PersonalInfo";
import { useSelector } from "react-redux";
import OrderDetails from "../Components/AddToCard/OrderDetails";
import store from "../Store/store";
export function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const allItem = useSelector((store) => store.cart.items);
  console.log("allItem: ", allItem);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  //   const total = orderItems.reduce(
  //     (acc, item) => acc + item.quantity * item.price,
  //     0
  //   );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 ">Checkout</h1>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3">
          <div className="w-full ">
            <OrderDetails allItem={allItem} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <PersonalInfo />
            <h2 className="text-2xl font-semibold mb-6 mt-8">
              Payment Information
            </h2>
            <div className="mb-4">
              <label className="block text-fontDarkGray text-sm font-bold mb-2">
                Payment Method
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`flex items-center justify-center p-2 rounded ${
                    paymentMethod === "credit" ? "bg-red text-white" : "bg-gray"
                  }`}
                  onClick={() => setPaymentMethod("credit")}
                >
                  <Dock className="mr-2" /> Credit Card
                </button>
                <button
                  type="button"
                  className={`flex items-center justify-center p-2 rounded ${
                    paymentMethod === "paypal" ? "bg-red text-white" : "bg-gray"
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <Dock className="mr-2" /> PayPal
                </button>

                <button
                  type="button"
                  className={`flex items-center justify-center p-2 rounded ${
                    paymentMethod === "googlepay"
                      ? "bg-red text-white"
                      : "bg-gray"
                  }`}
                  onClick={() => setPaymentMethod("googlepay")}
                >
                  <Dock className="mr-2" /> Google Pay
                </button>
              </div>
            </div>
            {paymentMethod === "credit" && (
              <>
                <div className="mb-4">
                  <label
                    className="block text-fontDarkGray text-sm font-bold mb-2"
                    htmlFor="cardNumber"
                  >
                    Card Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label
                      className="block text-fontDarkGray text-sm font-bold mb-2"
                      htmlFor="expiryDate"
                    >
                      Expiry Date
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                      id="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label
                      className="block text-fontDarkGray text-sm font-bold mb-2"
                      htmlFor="cvv"
                    >
                      CVV
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                      id="cvv"
                      type="text"
                      placeholder="123"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </>
            )}
            <div className="flex items-center justify-between mt-8">
              <button
                className="bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Complete Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
