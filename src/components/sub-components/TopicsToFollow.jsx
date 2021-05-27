import React from "react";
import Topic from "./Topic";
export default function TopicsToFollow() {
  return (
    <div className="topics-to-follow">
      <div className="top">
        <h2>Topics to Follow</h2>
      </div>
      <div className="topics">
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <div className="show-more">
          <a href="#show">Show More</a>
        </div>
      </div>
    </div>
  );
}
