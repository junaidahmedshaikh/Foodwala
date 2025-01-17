import {
  Utensils,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-fontDarkGray py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex text-red items-center space-x-2 mb-4">
              <Utensils className="h-8 w-8 text-orange-500" />
              <span className="text-2xl  font-bold">Foodwala</span>
            </div>
            <p className="text-fontDarkGray">
              Delivering happiness to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-fontDarkGray hover:scale-110 hover:text-grayDark"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontDarkGray hover:scale-105 hover:text-grayDark"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontDarkGray hover:scale-105 hover:text-grayDark"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontDarkGray hover:scale-105 hover:text-grayDark"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-fontDarkGray">
              <li>New Approach Road</li>
              <li>Mumbai, India</li>
              <li>contact@foodwala.com</li>
              <li>(+91) 9876543210</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <div className=" flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray text-fontDarkGray"
              />
              <button className="bg-red text-white px-4 rounded-r-lg hover:scale-105">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-fontDarkGray hover:scale-105 hover:text-grayDark"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-fontDarkGray hover:scale-105 hover:text-grayDark"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-fontDarkGray hover:scale-105 hover:text-grayDark"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8  text-fontDarkGray">
          <p>&copy; 2025 Foodwala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
