import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Video from "../videoPlayer/VideoConnected";

const SharedVideoView = ({ video, fetchVideoById }) => {
  const { id: idFromParam, embedVideo } = useParams();
  const isVideoEmbeded = embedVideo !== "embed";
  const {
    videoId = "",
    videoTitle = "",
    shortDescription = "",
    interactions = []
  } = video;
  useEffect(() => {
    fetchVideoById(idFromParam);
  }, [idFromParam, fetchVideoById]);

  return (
    <div className={isVideoEmbeded ? "text-center mt-5" : ""}>
      {isVideoEmbeded && (
        <>
          <h2>{videoTitle}</h2>
          <p className="mb-4">{shortDescription}</p>
        </>
      )}
      {videoId && (
        <Video id={videoId} isStandalone interactions={interactions} />
      )}
    </div>
  );
};

export default SharedVideoView;
