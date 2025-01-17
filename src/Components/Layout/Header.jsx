import { useRef, useState } from "react";
import {
  Menu,
  Search,
  ShoppingCart,
  MapPin,
  User,
  Turtle,
  Utensils,
} from "lucide-react";
import CartModel from "../AddToCard/CartModel";
import { useSelector } from "react-redux";
import SignUpModel from "../../Authentication/SignUpModel";
import SignInModel from "../../Authentication/SignInModel";
import useSearchRest from "../../utils/useSearchRest";
import { useNavigate } from "react-router-dom";
export function Header({ onSearch, toggleSidebar }) {
  const [modelShow, setModelShow] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);
  const [showSignInModel, setShowSignInModel] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isValideUser, setIsValideUser] = useState(true);
  const [localSearchData, setLocalSearchData] = useState();
  // const { searchRestFunction, searchList } = useSearchRest();
  const modelRef = useRef();
  const cartItem = useSelector((store) => store.cart.items);
  // console.log("searchList: ", searchList?.data?.cards[1]?.groupedCard);
  const handleSearch = (userSearchData) => {
    onSearch(localSearchData);
    // searchRestFunction(userSearchData);
  };
  return (
    <>
      <header
        ref={modelRef}
        // onClick={closeModelFunction}
        className="sticky top-0 z-50 bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="text-2xl font-bold flex text-red items-center">
              {" "}
              <Utensils size={20} />
              <span className="text-2xl  font-bold">Foodwala</span>
            </span>
          </div>

          {/* Center section */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-fontGray" />
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, or dishes"
                className="w-full pl-10 pr-4 py-2 border border-gray rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setLocalSearchData(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(e.target.value); // Trigger search on Enter key press
                  }
                }}
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-full">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Deliver to...</span>
            </button>

            <button
              onClick={() => {
                setModelShow(true);
              }}
              className="relative p-2 hover:scale-105 transition-transform hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItem.length}
              </span>
            </button>

            <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {isValideUser ? (
                <>
                  {" "}
                  <button
                    type="button"
                    className="text-black hover:bg-gray  hover:scale-105 transition-transform rounded-full font-bold text-sm px-4 py-2 text-center "
                    onClick={() => setShowSignInModel(true)}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="bg-gray text-black  hover:scale-105 transition-transform rounded-full font-bold text-sm px-4 py-2 text-center "
                    onClick={() => setShowSignUpModel(true)}
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <User className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Cart Model Component */}
      {modelShow && (
        <CartModel
          modelShow={modelShow}
          closeModel={() => setModelShow(false)}
        />
      )}
      <div className="flex justify-center align-middle">
        {/* Sign Up Model Compo */}

        {showSignUpModel && (
          <SignUpModel
            isOpen={showSignUpModel}
            closeModel={() => {
              setShowSignUpModel(false);
            }}
          />
        )}
        {/* Sign In Model Compo */}
        {showSignInModel && (
          <SignInModel
            isOpen={showSignInModel}
            closeModel={() => {
              setShowSignInModel(false);
            }}
          />
        )}
      </div>
    </>
  );
}
