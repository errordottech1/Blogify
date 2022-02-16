import React from "react";
import mac from "../assets/mac.jpeg";
import { categories } from "../constants/constants";

const Post = ({ post, newest }) => {
  const { name, color, textColor } = categories.filter(
    (cat) => cat.name === post.category
  )[0];

  if (newest) {
    return (
      <div className="w-4/4 mx-40">
        <div className="w-full h-full rounded-3xl flex flex-row mb-16 px-10 py-4  justify-center items-center cursor-pointer hover:shadow-2xl">
          <img
            src={mac}
            alt={"postPhoto"}
            className="rounded-3xl xl:h-[26rem] xl:w-2/4 w-[30rem] h-[28rem]"
          />
          <div className="flex flex-col items-left ml-16 justify-center">
            <div
              className={`h-[3rem] w-[8rem] ${color} ${textColor} rounded-lg flex items-center justify-center`}
            >
              {name}
            </div>
            <h1 className="max-w-[54rem] text-3xl font-bold mt-4">
              {post.title}
            </h1>
            <p className="max-w-[54rem] text-md text-gray-500 font-light mt-4 sm:hidden xl:block">
              {post.description} ...
            </p>
            <div className="flex flex-row items-center mt-5">
              <img
                src={mac}
                alt="profile"
                className="h-[3rem] w-[3rem] rounded-full"
              />
              <div className="flex flex-col ml-4 justify-center">
                <h1 className="text-md font-semibold">{post.creator}</h1>
                <h1 className="text-md text-gray-500">{post.timestamp}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[30rem] mr-8">
      <div className="w-full h-full rounded-3xl flex flex-col cursor-pointer hover:shadow-xl hover:border-2 border-blue-500 p-8">
        <img
          src={mac}
          alt={"postPhoto"}
          className="rounded-3xl h-full w-full"
        />
        <div className="flex flex-col items-left mt-2 justify-center">
          <div
            className={`h-[3rem] w-[8rem] ${color} ${textColor} rounded-lg flex items-center justify-center`}
          >
            {name}
          </div>
          <h1 className="min-w-[20rem] text-3xl font-bold mt-2">
            {post.title}
          </h1>
          <p className="min-w-[20rem] text-md text-gray-500 font-light mt-4">
            {post.description} ...{" "}
          </p>
          <div className="flex flex-row items-center  mt-5">
            <img
              src={mac}
              alt="profile"
              className="h-[3rem] w-[3rem] rounded-full"
            />
            <div className="flex flex-col ml-4 justify-center">
              <h1 className="text-md font-semibold">{post.creator}</h1>
              <h1 className="text-md text-gray-500">{post.timestamp}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
