import PropTypes from "prop-types";

export const responsePropTypes = PropTypes.shape({
  responseId: PropTypes.string.isRequired,
  responseText: PropTypes.string.isRequired,
  urlToOpen: PropTypes.string,
  noOfTimesResponseSelected: PropTypes.number,
  shouldOpenUrl: PropTypes.bool,
  resumeVideo: PropTypes.bool.isRequired
});

export const interactionPropTypes = PropTypes.shape({
  questionLabel: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  responses: PropTypes.arrayOf(responsePropTypes),
  displayQuestionAtSecond: PropTypes.string.isRequired
});

export const footerBtnPropTypes = PropTypes.shape({
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  isPrimary: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
});
