import React from "react";
import Post from "../components/Post";
import Topbar from "../components/Topbar";
import Header from "../containers/Header";
import { posts } from "../constants/constants";

const Home = () => {
  // TODO Post Page (show just last 7th posts, ability to find the last and last 7th of'em)
  // TODO Communicate with the database and fetch real data
  // TODO all posts page (show all the posts)
  // TODO create the post page
  // TODO Post detail page
  // TODO User profile page and ability to delete his posts
  return (
    <div className="h-full flex-col gradient-bg">
      <div className="flex flex-col items-center mb-12">
        <Topbar />
        <Header />
      </div>
      <Post newest={true} post={posts[0]} key={0} />
      <div className="flex flex-col justify-center items-center mb-12 ">
        <div className="grid xl:gap-y-16 xl:grid-cols-3 lg:grid-cols-2 xl:grid-row-2 justify-evenly justify-items-center px-16">
          {posts.slice(1).map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="my-4">© Codechunk, 2022</h1>
      </div>
    </div>
  );
};

export default Home;
