import React from "react";
import { useParams } from "react-router-dom";
import Video from "../videoPlayer/VideoConnected";

const SharedVideoView = ({ videos }) => {
  const { id: idFromParam } = useParams();
  const { videoId, videoTitle, shortDescription, interactions } = videos.find(
    ({ id }) => id === idFromParam
  );
  return (
    <div className="text-center mt-5">
      <h2>{videoTitle}</h2>
      <p className="mb-4">{shortDescription}</p>
      <Video id={videoId} isStandalone interactions={interactions} />
    </div>
  );
};

export default SharedVideoView;
