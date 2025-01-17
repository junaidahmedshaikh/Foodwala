import {
  Pizza,
  Torus,
  Coffee,
  IceCream,
  Soup,
  Salad,
  Cake,
} from "lucide-react";
export const SEARCH_REST_API =
  "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.0759837&lng=72.8776559&str=pizza&trackingId=undefined&includeIMItem=true";

export const GET_RESTAURANT_LIST_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690&lng=72.8205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`;

// Swiggy API to get Restaurant data using foodfire server
export const GET_RESTUARANT_INFO_API =
  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

// Swiggy API to get Restaurant Menu data using foodfire server
export const RESTUARANT_MENU =
  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
// menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
export const RESTAURANT_MENU_INFO =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=98251";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

export const SEARCH_FOOD_OPTION_HEADING_INFO_TYPE_KEY =
  "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead";
export const SEARCH_FOOD_OPTION_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

export const SEARCH_API = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.0748&lng=72.8856&str=Chinese&trackingId=17a2c435-997a-67cb-23fa-2d98fb42d55f&submitAction=ENTER&queryUniqueId=93253894-93dd-bb48-8202-4e6ca05111dd`;

export const CHINESE_SEARCH_API =
  "https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.07480&lng=72.88560&str=Chinese&trackingId=undefined&submitAction=ENTER&queryUniqueId=aa317630-c442-5040-8eb7-df5cbbfeb09e&selectedPLTab=DISH";

// https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.07480&lng=72.88560&str=Salad&trackingId=undefined&submitAction=ENTER&queryUniqueId=635be269-e70d-6b2f-4576-45e8aaa65c39

export const SORT_RESTAURANT_LIST = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&collection=83636&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

export const foodItems = [
  {
    name: "Pizza",
    collection: 83631,
    searchVal: "Pizza",
    icon: Pizza,
    color: "text-red", // Custom color
    bgColor: "bg-redBackground", // Custom background color
  },
  {
    name: "South Indian",
    searchVal: "SouthIndian",
    collection: 83634,
    icon: Torus,
    color: "text-amber", // Custom color
    bgColor: "bg-amberBackground", // Custom background color
  },
  {
    name: "Coffee",
    searchVal: "Coffee",
    icon: Coffee,
    color: "text-brown", // Custom color
    bgColor: "bg-amberLightBackground", // Custom background color
  },
  {
    name: "Ice Cream",
    collection: 83640,
    searchVal: "Ice_Cream",
    icon: IceCream,
    color: "text-pink", // Custom color
    bgColor: "bg-pinkBackground", // Custom background color
  },
  {
    name: "Chinese",
    searchVal: "Chinese",
    collection: 83636,
    icon: Soup,
    color: "text-orange", // Custom color
    bgColor: "bg-orangeBackground", // Custom background color
  },
  {
    name: "Salad",
    searchVal: "Salad",
    collection: 83636,
    icon: Salad,
    color: "text-green", // Custom color
    bgColor: "bg-greenBackground", // Custom background color
  },
];
