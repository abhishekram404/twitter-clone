import React from "react";
import Search from "./sub-components/Search";
import TopicsToFollow from "./sub-components/TopicsToFollow";
import TrendsForYou from "./sub-components/TrendsForYou";
import WhoToFollow from "./sub-components/WhoToFollow";
import RightFooter from "./sub-components/RightFooter";

export default function Right() {
  return (
    <div className="right">
      <Search />
      <TrendsForYou />
      <WhoToFollow />
      <TopicsToFollow />
      <RightFooter />
    </div>
  );
}
