import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Video from "../videoPlayer/VideoConnected";
import { isEmpty } from "../../utilities/validation";

const SharedVideoView = ({ videos }) => {
  const history = useHistory();
  const { id: idFromParam, embedVideo } = useParams();
  if (isEmpty(videos)) {
    history.push("/");
    return null;
  }
  const isVideoEmbeded = embedVideo !== "embed";
  const { videoId, videoTitle, shortDescription, interactions } = videos.find(
    ({ id }) => id === idFromParam
  );
  return (
    <div className={isVideoEmbeded ? "text-center mt-5" : ""}>
      {isVideoEmbeded && (
        <>
          <h2>{videoTitle}</h2>
          <p className="mb-4">{shortDescription}</p>
        </>
      )}
      <Video id={videoId} isStandalone interactions={interactions} />
    </div>
  );
};

export default SharedVideoView;
