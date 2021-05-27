import React from "react";
import Search from "./sub-components/Search";
import TrendsForYou from "./sub-components/TrendsForYou";
export default function Right() {
  return (
    <div className="right">
      <Search />
      <TrendsForYou />
    </div>
  );
}
