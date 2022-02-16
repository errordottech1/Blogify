import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 mb-14">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
        😍 Amazing blog Website by
      </h1>
      <h1 className="text-5xl font-bold text-blue-900 mb-5">Codechunk</h1>
      <p className="max-w-sm text-lg font-light text-gray-700 text-wrap text-center mb-6 ">
        This blog website is powered by Sanity & Tailwindcss. Sanity.io is the
        unified content platform that powers better digital experiences.
      </p>
      <div className="flex flex-row justify-between items-center w-full h-15 bg-gray-200 px-4 rounded-xl">
        <div className="flex flex-row w-5/6 items-center">
          <input
            type="email"
            placeholder="👋  Enter email & Keep in touch"
            className="bg-gray-200 focus:bg-gray-200 placeholder:text-slate-400 focus:outline-none w-full"
          />
        </div>
        <button className="text-white bg-blue-400 px-2 py-3 w-1/6 my-2 mx-1 rounded-2xl">
          Go
        </button>
      </div>
    </div>
  );
};

export default Header;
