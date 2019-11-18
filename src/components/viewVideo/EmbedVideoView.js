import React from "react";
// import { useParams } from "react-router-dom";
import Video from "../videoPlayer/VideoConnected";

const EmbedVideoView = ({ videos }) => {
  //   const { id: idFromParam } = useParams();
  //   const { videoId, interactions } = videos.find(
  //     ({ id }) => id === idFromParam
  //   );
  return <Video id={"GVhmynWOPoM"} isStandalone interactions={[]} />;
};

export default EmbedVideoView;
