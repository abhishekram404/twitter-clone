import React from "react";
import { Top } from "./sub-components/Middle-top";
import NewTweet from "./sub-components/New-tweet";
import Post from './sub-components/Post';

export default function Middle() {
  return (
    <div className="middle">
      <Top />
      <NewTweet />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
