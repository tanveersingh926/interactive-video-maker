import React from "react";
import { convertToMinutesAndSeconds } from "../../utilities/videoHelpers";

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
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </span>
    </>
  );
};

export default InteractionItem;
