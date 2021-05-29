import React from "react";

export default function Topic() {
  return (
    <div className="topic">
      <div className="topic-details">
        <h3>B Positive</h3>
        <small>WHO</small>
      </div>
      <div className="follow-btn">Follow</div>
      <div className="close-btn">
        <svg viewBox="0 0 15 15" aria-hidden="true">
          <g>
            <path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
