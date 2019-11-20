import PropTypes from "prop-types";
import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form as BootstrapForm
} from "reactstrap";
import ModalInline from "../modal/ModalInline";
import { VIDEO_SOURCE_API } from "../../constants";
import { interactionPropTypes } from "../../utilities/commonPropTypes";
import InputField from "../formFields/InputField";
import { Form } from "react-final-form";
import { required } from "../../utilities/validation";

class YouTubeVideo extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    removeVideoToView: PropTypes.func,
    updateVideoDuration: PropTypes.func,
    isStandalone: PropTypes.bool,
    interactions: PropTypes.arrayOf(interactionPropTypes),
    isEmailRequired: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      shouldPlayVideo: false,
      shouldDisplayQuestion: false,
      questionToDisplay: {},
      isEmailModalDisplayed: false
    };
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.interactionsMap = new Map();
    this.intervalId = 1;
    this.userDetails = {
      email: "",
      name: ""
    };
  }

  componentDidMount = () => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = VIDEO_SOURCE_API.YOUTUBE;

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
    }
  };

  componentWillUnmount() {
    this.props.removeVideoToView();
  }

  loadVideo = () => {
    const { id } = this.props;

    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      playerVars: {
        origin: window.location.origin,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        hd: 1,
        html5: 1,
        enablejsapi: 1,
        fs: 0
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange
      }
    });
  };

  onSubmitForm = values => {
    this.userDetails = values;
    this.player.playVideo();
    this.setState({ isEmailModalDisplayed: false });
  };

  onPlayerStateChange(event) {
    if (event.data === window.YT.PlayerState.PLAYING) {
      this.intervalId = setInterval(() => {
        const currentTime = this.player.getCurrentTime();
        const currentQues = this.interactionsMap.get(parseInt(currentTime));

        if (currentQues) {
          this.player.pauseVideo();
          this.setState({
            shouldDisplayQuestion: true,
            questionToDisplay: currentQues
          });
        }

        if (this.props.isEmailRequired) {
          if (!this.userDetails.email) {
            this.player.pauseVideo();
            this.setState({ isEmailModalDisplayed: true });
          } else {
            this.setState({ isEmailModalDisplayed: false });
          }
        }
      }, 1000);
    } else {
      clearInterval(this.intervalId);
    }
  }
  onPlayerReady = event => {
    console.log("Player is ready");
    this.props.updateVideoDuration(this.player.getDuration());
  };
  onAnsClick({ resumeVideo, shouldOpenUrl, urlToOpen }, index) {
    // this.state.questionToDisplay.responses[
    //   index
    // ].noOfTimesResponseSelected += 1;

    if (shouldOpenUrl) {
      return window.open(urlToOpen, "_blank");
    }

    this.setState({
      shouldDisplayQuestion: false
    });
    this.player.playVideo();
  }

  render = () => {
    const { id, isStandalone, interactions } = this.props;
    const {
      shouldDisplayQuestion,
      questionToDisplay,
      isEmailModalDisplayed
    } = this.state;
    const interactionsMap = new Map();
    interactions.forEach(interaction => {
      interactionsMap.set(
        parseInt(interaction.displayQuestionAtSecond),
        interaction
      );
    });

    this.interactionsMap = interactionsMap;
    return (
      <div
        className={`modal-inline--container text-left clearfix ${!isStandalone &&
          `modal-inline__not-standalone`}`}
      >
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
                    onClick={() => this.onAnsClick(response, index)}
                  >
                    Ans {index + 1}: {response.responseText}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ModalInline>
          <ModalInline isOpen={isEmailModalDisplayed}>
            <h4>Email required</h4>
            <Form
              onSubmit={this.onSubmitForm}
              render={({ handleSubmit }) => (
                <BootstrapForm onSubmit={handleSubmit}>
                  <InputField
                    name="name"
                    labelText="Name"
                    fieldId="videoName"
                    placeholder="Enter Name"
                    validate={required}
                  />
                  <InputField
                    name="email"
                    labelText="Email"
                    fieldId="videoEmail"
                    placeholder="Enter Email"
                    validate={required}
                  />
                  <Button type="submit">Submit</Button>
                </BootstrapForm>
              )}
            />
          </ModalInline>
        </>
      </div>
    );
  };
}

export default YouTubeVideo;
