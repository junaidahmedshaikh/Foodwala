import React from "react";

export default function Asap({ pageName }) {
  return (
    <div>
      <div className="min-h-screen bg-red flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-white text-lg mb-8">
          {` I'm working hard to bring ${
            pageName || "this feature"
          } to life! Stay tuned—great things are on the way!`}
        </p>
      </div>
      ;
    </div>
  );
}
