export default function Navbar() {
  return (
    <nav className="bg-red text-white border-gray-200  w-full ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className=" self-center text-2xl font-semibold font-logoFont whitespace-nowrap ">
            Foodwala
          </span>
        </a>
        {/* Login Button */}
        <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white border-2 border-white  hover:scale-105 transition-transform rounded-full font-bold text-sm px-4 py-2 text-center "
          >
            Sign in
          </button>
          <button
            type="button"
            className="bg-white text-red  hover:scale-105 transition-transform rounded-full font-bold text-sm px-4 py-2 text-center "
          >
            Sign up
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          {/* Menu List */}
          {/* <ul className="flex text-red flex-col font-medium bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   :border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 
                 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:  dark:hover:bg-gray-700 dark:hover:  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:  dark:hover:bg-gray-700 dark:hover:  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:  dark:hover:bg-gray-700 dark:hover:  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
