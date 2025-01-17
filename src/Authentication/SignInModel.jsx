import React from "react";
import { useRef } from "react";
import { handleCloseModelRef } from "../utils/Helper";
import { X } from "lucide-react";
export default function SignInModel({ closeModel }) {
  const modelRef = useRef(null);
  return (
    <div
      ref={modelRef}
      onClick={(e) => {
        handleCloseModelRef(modelRef, e.target, closeModel);
      }}
      className="fixed flex justify-center items-center z-50 w-screen h-screen backdrop-blur-sm	"
    >
      <div className="fixed z-50 bg-white flex flex-col rounded-xl py-10 px-14 ">
        <div>
          <X onClick={closeModel} className="cursor-pointer mb-5" />
        </div>
        <h4 className="block text-xl font-medium text-slate-800">Sign In</h4>
        <p className="text-slate-500 font-light">Welcome back!</p>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">Email</label>
              <input
                type="email"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Password"
              />
            </div>
          </div>

          <button
            className="mt-4 w-full rounded-md bg-red py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Sign In
          </button>
          <p className="flex justify-center mt-6 text-sm text-slate-600">
            Don&apos;t have an account?
            <a
              href="#signup"
              className="ml-1 text-sm font-semibold text-slate-700 underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
