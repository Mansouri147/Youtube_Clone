import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {/* Take Informations in here */}
      <ChannelRow
        image="url"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can do find awesome programming lessons here ! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="660K"
        description=""
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a Youtube Clone with REACT JS for Beginners"
        image="url"
      />
    </div>
  );
}

export default SearchPage;
