import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import AddInteractionModalConnected from "../AddInteractionModalConnected";
import { RESPONSE_ACTION } from "../../../constants";
import { Form } from "react-final-form";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

const mockFnRemove = jest.fn();
const mockFnSetModalIsOpen = jest.fn();
const mockFnAddInteraction = jest.fn();

const triggerInputField = (inputNode, data) => {
  fireEvent.change(inputNode, data);
  fireEvent.touchStart(inputNode, data);
};

describe("AddInteractionModal", () => {
  afterEach(cleanup);

  let store;
  beforeEach(() => {
    store = mockStore({
      videoConfiguration: {
        id: "e70724fc-89ff-43f4-adcb-7397c165baed",
        isEmailRequired: true,
        shortDescription: "Singer is Diljit Dosanjh feat Badshah",
        videoId: "GVhmynWOPoM",
        videoSource: "YOUTUBE",
        videoTitle: "Proper Patola",
        videoUrl: "https://www.youtube.com/watch?v=GVhmynWOPoM",
        videoDuration: 164,
        interactions: [
          {
            questionLabel: "Who is featured in this song",
            questionId: "afc8fae4-ed49-4ce5-a3ea-21b7cd9e6849",
            responses: [
              {
                responseId: "04c3298c-7919-4418-b61d-822b6fcc017a",
                responseText: "Badshah",
                isCorrect: true,
                noOfTimesResponseSelected: 0,
                shouldOpenUrl: false,
                resumeVideo: true
              },
              {
                responseId: "e02be35a-fceb-42fb-9494-524c20a99bc0",
                responseText: "Raftar",
                noOfTimesResponseSelected: 0,
                shouldOpenUrl: false,
                resumeVideo: true
              },
              {
                responseId: "5531e131-7078-416e-b404-4436aecfe694",
                responseText: "Honey Singh",
                urlToOpen:
                  "https://www.google.com/search?q=yo+yo+honey+singh&oq=yo+yo+hn",
                noOfTimesResponseSelected: 0,
                shouldOpenUrl: true,
                resumeVideo: false
              }
            ],
            displayQuestionAtSecond: "02"
          },
          {
            questionLabel: "Who is singer in this song",
            questionId: "402af50f-cf19-4ff4-808b-16bf18c8d23a",
            responses: [
              {
                responseId: "dfc37579-1846-44ae-abff-990f8b2b3bc0",
                responseText: "Karan Aujhla",
                noOfTimesResponseSelected: 0,
                shouldOpenUrl: false,
                resumeVideo: true
              },
              {
                responseId: "05850845-ec10-4640-a0d4-16ae93abfcce",
                responseText: "Diljit Dosanjh",
                noOfTimesResponseSelected: 0,
                shouldOpenUrl: false,
                resumeVideo: true
              }
            ],
            displayQuestionAtSecond: "4"
          }
        ]
      }
    });
    store.dispatch = jest.fn();
  });

  const renderSubject = props => {
    const newProps = {
      addInteraction: mockFnAddInteraction,
      isOpen: true,
      setModalIsOpen: mockFnSetModalIsOpen,
      values: {
        responses: [
          {
            responseAction: RESPONSE_ACTION.OPEN_LINK
          }
        ]
      },
      fields: { remove: mockFnRemove },
      ...props
    };

    return render(
      <Provider store={store}>
        <Form
          onSubmit={values => console.log(values)}
          render={({ handleSubmit }) => (
            <AddInteractionModalConnected {...newProps} />
          )}
        />
      </Provider>
    );
  };

  it("Add another response", () => {
    const { getByText } = renderSubject();
    fireEvent.click(getByText("Add Another Response"));
    getByText("Response 3");
  });

  it("should fail form submission with error without entering data in fields ", () => {
    const { getByText } = renderSubject();
    fireEvent.click(getByText("Save"));
    fireEvent.click(getByText("Save and Add Another"));

    expect(mockFnAddInteraction).not.toHaveBeenCalled();
  });

  it("should submit form with all values filled", () => {
    const {
      getByLabelText,
      getByText,
      getByPlaceholderText,
      getAllByLabelText
    } = renderSubject();

    const timeInput = getByLabelText("Time of video to display question");
    const quesInput = getByPlaceholderText("Enter your question");
    const resInput1 = getByLabelText("Response 1");
    const resInput2 = getByLabelText("Response 2");
    const isCorrectRes = getAllByLabelText("is this correct response?");

    triggerInputField(timeInput, { target: { value: "02" } });
    triggerInputField(quesInput, { target: { value: "Question" } });
    triggerInputField(resInput1, { target: { value: "Response 1" } });
    triggerInputField(resInput2, { target: { value: "Response 2" } });
    triggerInputField(resInput2, { target: { value: "true" } });
    fireEvent.click(isCorrectRes[0]);

    fireEvent.click(getByText("Save"));
  });

  it("should print time properly", () => {
    const { getByText } = renderSubject();
    getByText("02:44");
  });

  it("should close popup on cancel time properly", () => {
    const { getByText } = renderSubject();
    fireEvent.click(getByText("Cancel"));
    expect(mockFnSetModalIsOpen).toHaveBeenCalledWith(false);
  });
});
