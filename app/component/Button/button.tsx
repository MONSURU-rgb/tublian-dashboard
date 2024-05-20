import React from "react";

export function button() {
  return (
    <div>
      This is for Tublian
      <h2>
        <div className="text-5xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
          <div className="gap-3 flex-col bg-gradient-to-r from-blue-500 to-green-500 min-h-screen flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">
              Welcome to My Website
            </h1>

            <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 rounded-lg shadow-lg">
              <h2 className="text-white text-3xl font-bold">Special Section</h2>
              <p className="text-white mt-4">
                This section has a beautiful gradient background.
              </p>
            </section>

            <button className="bg-gradient-to-r from-yellow-400 to-pink-500 w-[200px] h-[100px] rounded-lg text-transparent !relative">
              <button className="bg-black absolute top-[3px] left-[2px] rounded-lg right-[2px] text-white">
                Hover me
              </button>
            </button>
          </div>
        </div>
      </h2>
    </div>
  );
}
