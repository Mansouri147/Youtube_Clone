import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https:encrypted-tbn0.gstatic.com/images?"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
