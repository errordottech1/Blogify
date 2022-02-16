import React from "react";

const Create = () => {
  const currentUser = localStorage.getItem("user");
  if (!currentUser || currentUser === undefined) {
    return "ACCESS DENIED!";
  }
  return <div></div>;
};

export default Create;
