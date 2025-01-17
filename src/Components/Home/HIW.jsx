import React from "react";
import { MapPin, Search, Clock } from "lucide-react";

export default function HIW() {
  return (
    <section className="py-16">
      <div className="container text-fontDarkGray mx-auto px-4">
        <h2 className="text-xl font-bold text-center   mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-red mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Set Your Location</h3>
            <p className="text-fontGray">Choose your delivery address</p>
          </div>
          <div className="text-center">
            <Search className="h-12 w-12 text-red mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Choose Restaurant</h3>
            <p className="text-fontGray">Browse menus and select items</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-red mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-fontGray">Get your food delivered fast</p>
          </div>
        </div>
      </div>
    </section>
  );
}
