import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { topNavTabs } from "../constants/constants";
const Topbar = () => {
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  if (currentUser === undefined) {
    logOut();
  }

  return (
    <>
      <div className="w-full h-24 justify-around items-center xl:flex sm:hidden">
        <div className="w-1/2 flex justify-around items-center">
          <h1 className="text-2xl font-bold text-yellow-600 underline tracking-widest mr-2">
            Blogify.
          </h1>
          <div className="w-3/4 flex justify-around items-center mx-2">
            {topNavTabs.map((tab, index) => (
              <h1
                key={index}
                className="text-lg font-semibold cursor-pointer mx-4"
              >
                {tab}
              </h1>
            ))}
          </div>
          {currentUser ? (
            <div className="flex flex-row items-center justify-center ml-4">
              <button
                onClick={logOut}
                className="h-12 w-32 btn btn-primary font-semibold text-white bg-red-500 rounded-xl hover:shadow-xl"
              >
                Logout
              </button>
              <button
                onClick={() => {
                  navigate("/create");
                }}
                className="h-12 w-40 btn btn-primary font-semibold text-white bg-blue-700 rounded-xl hover:shadow-xl ml-4"
              >
                Create a blog
              </button>
              <img
                className="flex flex-row w-18 h-12 bg-white text-black rounded-full items-center justify-center ml-4"
                alt="profile"
                src={`${currentUser.imageUrl}`}
              />
            </div>
          ) : (
            <button
              onClick={() => {
                if (currentUser) {
                  navigate("/create");
                } else {
                  navigate("/login");
                }
              }}
              className="h-12 w-32 btn btn-primary font-semibold text-white bg-blue-700 rounded-xl hover:shadow-xl"
            >
              Create
            </button>
          )}
        </div>
      </div>
      {menuIsOpen ? (
        <>
          <AiOutlineClose
            className="font-bold text-2xl mt-6 xl:hidden"
            onClick={() => setMenuIsOpen(false)}
          />
          <div className="flex flex-col mt-14 px-8 py-4 rounded-xl justify-center items-center absolute bg-gray-300  xl:hidden">
            <h1 className="mb-4 text-2xl font-bold text-yellow-600 underline tracking-widest">
              Blogify.
            </h1>
            <ul className="space-y-3">
              {topNavTabs.map((tab, index) => (
                <li
                  key={index}
                  className="text-lg font-semibold cursor-pointer text-blue-500 text-center mb-2"
                >
                  {tab}
                </li>
              ))}
            </ul>
            {currentUser ? (
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={logOut}
                  className="h-12 w-32 btn btn-primary font-semibold text-white bg-red-500 rounded-xl hover:shadow-xl mt-2"
                >
                  Logout
                </button>
                <button
                  onClick={() => {
                    navigate("/create");
                  }}
                  className="h-12 w-30 btn btn-primary font-semibold text-white bg-blue-700 rounded-xl hover:shadow-xl mt-2 p-2"
                >
                  Create a blog
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (currentUser) {
                    navigate("/create");
                  } else {
                    navigate("/login");
                  }
                }}
                className="h-12 w-32 btn btn-primary font-semibold text-white bg-blue-700 rounded-xl hover:shadow-xl mt-2"
              >
                Create
              </button>
            )}
          </div>
        </>
      ) : (
        <GiHamburgerMenu
          className="font-bold text-2xl mt-6 xl:hidden"
          onClick={() => setMenuIsOpen(true)}
        />
      )}
    </>
  );
};
export default Topbar;
