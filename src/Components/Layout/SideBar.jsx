import React, { useState } from "react";
import {
  Home,
  Clock,
  Heart,
  Store,
  ShoppingBag,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", icon: Home, active: true, path: "/" },
  { name: "Orders", icon: Clock, path: "/checkout" },
  // { name: "Favorites", icon: Heart, path: "/" },
  { name: "Restaurants", icon: Store, path: "/FoodCatalog" },
  { name: "Grocery", icon: ShoppingBag, path: "/asap" },
  { name: "Help", icon: HelpCircle },
];

export function SideBar({ isOpen }) {
  //
  "Sidebar : ", isOpen;
  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0 " : "-translate-x-full "
      } lg:translate-x-0 z-40 w-56 bg-white border-r border-gray pt-16 transition-transform duration-200 ease-in-out`}
    >
      <nav className="px-4 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            // href="#"
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1  ${
              item.active
                ? "bg-red-50 text-red-600"
                : "hover:text hover:bg-gray transition-all"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
