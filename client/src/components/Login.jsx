import React from "react";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { client } from "../api/sanity";

const Login = () => {
  const navigate = useNavigate();
  const login = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const authorDocument = {
      _id: googleId,
      _type: "author",
      name: name,
      image: imageUrl,
    };
    client.createIfNotExists(authorDocument).then(() => {
      navigate("/create", { replace: true });
    });
    navigate("/create", { replace: true });
  };
  const currentUser = localStorage.getItem("user");
  if (currentUser) {
    navigate("/create", { replace: true });
  }
  return (
    <div className="flex xl:flex-row flex-col items-center justify-center gradient-bg-login w-screen h-screen overflow-hidden">
      <div className="flex flex-col xl:justify-center sm:justify-end items-center w-3/6 h-full">
        <h1 className="font-bold xl:text-9xl sm:text-5xl xl:max-w-[32rem] lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-center xl:block sm:hidden">
          Welcome to
          <span className="text-5xl font-bold text-yellow-600 underline tracking-widest sm:ml-3">
            Blogify.
          </span>
        </h1>
        <p className="max-w-[32rem] mt-8 xl:text-lg sm:text-2xl sm:text-center xl:text-left">
          Blogify is a blogging platform that allows you to create posts and
          share your knowledge with the whole coding gang! Our slogan is " TEACH
          & LEARN " ❤️
        </p>
      </div>
      <div className="flex flex-col xl:justify-center sm:justify-start items-center w-3/6 h-full mt-8">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}
          render={(renderProps) => (
            <button
              type="button"
              className="w-[24rem] h-[6rem] flex flex-row justify-center items-center text-3xl text-black bg-gray-300 p-2 rounded-full"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle className="text-3xl mr-3" />
              Login via Google
            </button>
          )}
          onSuccess={login}
          onFailure={login}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Login;
