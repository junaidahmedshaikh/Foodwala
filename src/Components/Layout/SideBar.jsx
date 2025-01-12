import React, { useState } from "react";
import {
  Home,
  Clock,
  Heart,
  Store,
  ShoppingBag,
  HelpCircle,
} from "lucide-react";

const navigation = [
  { name: "Home", icon: Home, active: true },
  { name: "Orders", icon: Clock },
  { name: "Favorites", icon: Heart },
  { name: "Restaurants", icon: Store },
  { name: "Grocery", icon: ShoppingBag },
  { name: "Help", icon: HelpCircle },
];

export function SideBar() {
  const [isOpen, setIsOpen] = useState(Boolean);
  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 z-40 w-56 bg-white border-r border-gray pt-16 transition-transform duration-200 ease-in-out`}
    >
      <nav className="px-4 py-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 ${
              item.active
                ? "bg-red-50 text-red-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
