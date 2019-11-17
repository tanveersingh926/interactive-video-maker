import React, { useEffect } from "react";
import {
  convertToMinutes,
  convertToSeconds,
  importYoutubeApi
} from "../../utilities/videoHelpers";

let player;

const Video = ({ id, updateVideoDuration }) => {
  let intervalId;
  const onPlayerReady = event => {
    console.log("Player is ready");
    // event.target.playVideo();
    updateVideoDuration(player.getDuration());
  };
  const onPlayerStateChange = event => {
    console.log("onPlayerStateChange", event);
    // updateVideoDuration
    if (event.data === window.YT.PlayerState.PLAYING) {
      intervalId = setInterval(() => {
        const currentTime = player.getCurrentTime();
        const currentMinutes = convertToMinutes(currentTime);
        const currentSeconds = convertToSeconds(currentTime);

        const totalTime = player.getDuration();
        const totalMinutes = convertToMinutes(totalTime);
        const totalSeconds = convertToSeconds(totalTime);

        console.log(currentMinutes + " min : " + currentSeconds + " sec");
        console.log(totalMinutes + " min : " + totalSeconds + " sec");
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
  };

  const loadVideo = () => {
    player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      playerVars: {
        origin: "http://localhost:3000",
        controls: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        hd: 1,
        html5: 1,
        enablejsapi: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
    console.log("player", player);
  };

  useEffect(() => {
    if (!window.YT) {
      importYoutubeApi(loadVideo);
    } else {
      loadVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div id={`youtube-player-${id}`}> </div>
    </div>
  );
};

export default Video;
