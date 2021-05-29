import React from "react";
import Suggestion from "./Suggestion";

export default function WhoToFollow() {
  return (
    <div className="who-to-follow">
      <div className="top">
        <h2>Who to Follow</h2>
      </div>
      <div className="suggestions">
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <div className="show-more">
          <a href="#home">Show More</a>
        </div>
      </div>
    </div>
  );
}
