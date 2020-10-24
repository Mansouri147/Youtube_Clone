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
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="815K"
        noOfVideos={500}
        description="You can do find awesome programming lessons here ! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="200K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 15 hours ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="1.4M"
        subs="660K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 1 day ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days"
        image="https://i.ytimg.com/vi/XtMThy8QKqU/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCNxWuiMGMbwpPZBBNp4kNTmK3f7g"
      />
      <VideoRow
        views="1.4M"
        subs="200K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 15 hours ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="1.4M"
        subs="660K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 1 day ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days"
        image="https://i.ytimg.com/vi/XtMThy8QKqU/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCNxWuiMGMbwpPZBBNp4kNTmK3f7g"
      />
      <VideoRow
        views="1.4M"
        subs="200K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 15 hours ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="1.4M"
        subs="660K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 1 day ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days"
        image="https://i.ytimg.com/vi/XtMThy8QKqU/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCNxWuiMGMbwpPZBBNp4kNTmK3f7g"
      />
      <VideoRow
        views="1.4M"
        subs="200K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 15 hours ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="1.4M"
        subs="660K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 1 day ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days"
        image="https://i.ytimg.com/vi/XtMThy8QKqU/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCNxWuiMGMbwpPZBBNp4kNTmK3f7g"
      />
      <VideoRow
        views="1.4M"
        subs="200K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 15 hours ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="1.4M"
        subs="660K"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet ..."
        timestamp="Streamed 1 day ago"
        channel="Clever Programmer"
        title="🔴 How to Earn $1,000 as a Freelance Developer in 30 days"
        image="https://i.ytimg.com/vi/XtMThy8QKqU/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCNxWuiMGMbwpPZBBNp4kNTmK3f7g"
      />
    </div>
  );
}

export default SearchPage;
