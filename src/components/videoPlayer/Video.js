import React, { useEffect } from "react";
import {
  convertToMinutes,
  convertToSeconds,
  importYoutubeApi
} from "../../utilities/videoHelpers";
import { ListGroup, ListGroupItem } from "reactstrap";
import ModalInline from "../modal/ModalInline";

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

        console.log(currentTime);
        if (parseInt(currentTime) === 4) {
          // stopVideo();
          console.log("Here comes the ques");
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
  };
  const stopVideo = () => {
    player.stopVideo();
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

  const question = {
    questionLabel: "who won the world cup",
    questionId: 1,
    responses: [
      {
        responseId: 1,
        responseText: "New Zealand",
        isCorrect: false,
        urlToOpen: "http://google.com",
        noOfTimesResponseSelected: 0,
        shouldOpenUrl: true,
        resumeVideo: false
      },
      {
        responseId: 1,
        responseText: "England",
        isCorrect: true,
        noOfTimesResponseSelected: 0,
        shouldOpenUrl: false,
        resumeVideo: true
      }
    ],
    displayQuestionAtSecond: "45"
  };

  const onAnsClick = ({ resumeVideo, shouldOpenUrl, urlToOpen }, index) => {
    question.responses[index].noOfTimesResponseSelected += 1;
    console.log(question.responses[index].noOfTimesResponseSelected);
    console.log(question.responses);

    if (resumeVideo) {
      return stopVideo();
    }

    if (shouldOpenUrl) {
      window.open(urlToOpen, "_blank");
    }
  };
  return (
    <div className="modal-inline--container clearfix">
      <div id={`youtube-player-${id}`}> </div>
      <ModalInline isOpen={true}>
        <h4>Ques: {question.questionLabel}</h4>
        <ListGroup className="mt-3 response-group">
          {question.responses.map((response, index) => (
            <ListGroupItem
              key={`response${index}`}
              tag="div"
              onClick={() => onAnsClick(response, index)}
            >
              Ans{index + 1}: {response.responseText}
            </ListGroupItem>
          ))}
        </ListGroup>
      </ModalInline>
    </div>
  );
};

export default Video;
