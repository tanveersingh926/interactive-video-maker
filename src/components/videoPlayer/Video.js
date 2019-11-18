import React, { useEffect, useState, useRef } from "react";
import { importYoutubeApi } from "../../utilities/videoHelpers";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import ModalInline from "../modal/ModalInline";
let player;
const Video = ({
  id,
  updateVideoDuration,
  interactions,
  isStandalone = false
}) => {
  const [isPlayerloaded, setIsPlayerLoaded] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [shouldDisplayQuestion, setShouldDisplayQuestion] = useState(false);
  const [questionToDisplay, setQuestionToDisplay] = useState({});

  const interactionsMap = new Map();
  interactions.forEach(interaction => {
    interactionsMap.set(
      parseInt(interaction.displayQuestionAtSecond),
      interaction
    );
  });

  const pauseVideo = () => {
    player.pauseVideo();
  };

  const playVideo = () => {
    player.playVideo();
  };
  const onPlayerReady = event => {
    console.log("Player is ready");
    console.log(player);
    updateVideoDuration(player.getDuration());
  };

  const intervalId = useRef();
  useEffect(() => {
    if (shouldPlayVideo) {
      intervalId.current = setInterval(() => {
        const currentTime = player.getCurrentTime();
        const currentQues = interactionsMap.get(parseInt(currentTime));

        if (currentQues) {
          player.pauseVideo();
          setShouldDisplayQuestion(true);
          setQuestionToDisplay(currentQues);
        }
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [shouldPlayVideo, intervalId, interactionsMap, interactions]);

  const onPlayerStateChange = event => {
    console.log("onPlayerStateChange", event);
    if (event.data === window.YT.PlayerState.PLAYING) {
      setShouldPlayVideo(true);
    } else {
      setShouldPlayVideo(false);
    }
  };

  const loadVideo = () => {
    setIsPlayerLoaded(true);
    console.log("loadvideo");
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
  };

  useEffect(() => {
    if (!window.YT) {
      console.log("inside First", window.YT);
      importYoutubeApi(loadVideo);
    } else {
      console.log("inside second", window.YT);
      if (!isPlayerloaded) {
        console.log(isPlayerloaded);
        loadVideo();
      }
    }
  }, []);

  // const playerRef = useRef();
  // useEffect(() => {
  //   playerRef.current = window.player || {};
  //   return () => {
  //     console.log("playerRef.current", playerRef.current);
  //     playerRef.current.destroy && playerRef.current.destroy();
  //     playerRef.current = null;
  //     console.log("player destroyed", window.player);
  //   };
  // }, []);
  // useEffect(() => {
  //   // console.log("effect");
  //   // if (!isPlayerloaded) {

  //   // }
  //   return () => {
  //     window.player.destroy();
  //     window.player = null;
  //     console.log("player destroyed", window.player);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // });

  const onAnsClick = ({ resumeVideo, shouldOpenUrl, urlToOpen }, index) => {
    questionToDisplay.responses[index].noOfTimesResponseSelected += 1;

    if (shouldOpenUrl) {
      return window.open(urlToOpen, "_blank");
    }

    // if (resumeVideo) {
    setShouldDisplayQuestion(false);
    playVideo();
    // }
  };
  return (
    <div
      className={`modal-inline--container text-left clearfix ${!isStandalone &&
        `modal-inline__not-standalone`}`}
    >
      {isPlayerloaded ? (
        <>
          <div id={`youtube-player-${id}`}> </div>
          <ModalInline isOpen={shouldDisplayQuestion}>
            <h4>Ques: {questionToDisplay.questionLabel}</h4>
            <ListGroup className="mt-3 response-group">
              {questionToDisplay.responses &&
                questionToDisplay.responses.map((response, index) => (
                  <ListGroupItem
                    key={`response${index}`}
                    tag="div"
                    onClick={() => onAnsClick(response, index)}
                  >
                    Ans {index + 1}: {response.responseText}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ModalInline>
        </>
      ) : (
        <Spinner color="primary" className="spinner-center" />
      )}
    </div>
  );
};

export default Video;
