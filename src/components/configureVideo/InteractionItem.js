import React from "react";
import { convertToMinutesAndSeconds } from "../../utilities/videoHelpers";
import PropTypes from "prop-types";

const InteractionItem = ({ deleteItem, ques, quesNumber, interactionTime }) => {
  const interactionTimeInMinutesAndSeconds = convertToMinutesAndSeconds(
    interactionTime
  );
  return (
    <>
      {quesNumber}. {ques} -{" "}
      <span className="text-primary">{interactionTimeInMinutesAndSeconds}</span>
      <span className="float-right">
        <button
          type="button"
          className="close text-danger"
          aria-label="Close"
          onClick={deleteItem}
          data-testid="deleteInteraction"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </span>
    </>
  );
};

InteractionItem.propTypes = {
  quesNumber: PropTypes.number.isRequired,
  ques: PropTypes.string.isRequired,
  interactionTime: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default InteractionItem;
