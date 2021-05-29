import React, { useRef, useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const searchBar = useRef();
  const searchIcon = useRef();
  const handleFocus = (whatHappened) => {
    switch (whatHappened) {
      case "focused":
        searchBar.current.classList.add("search-active");
        searchIcon.current.style.fill = "#1DA1F2";
        return;
      case "blurred":
        searchBar.current.classList.remove("search-active");
        searchIcon.current.style.fill = "#6d8090";
        return;
      default:
        return;
    }
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (

    <div className="search-bar">
      <label htmlFor="search">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </label>
      <input type="text" id="search" />

    <div className="search-cont">
      <div className="search-bar" htmlFor="search" ref={searchBar}>
        <label htmlFor="search">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="search-icon"
            ref={searchIcon}
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search Twitter"
          onFocus={() => {
            handleFocus("focused");
          }}
          onBlur={() => {
            handleFocus("blurred");
          }}
          onChange={handleChange}
          value={searchValue}
        />
        {searchValue === "" ? null : (
          <label
            className="clear-label"
            onClick={() => {
              setSearchValue("");
            }}
          >
            <svg viewBox="0 0 15 15" aria-hidden="true" className="clear">
              <g>
                <path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"></path>
              </g>
            </svg>
          </label>
        )}
      </div>

    </div>
  );
}
