import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ConfigureVideoConnected from "../ConfigureVideoConnected";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

const mockPushFn = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(() => ({ push: mockPushFn })),
  useParams: jest.fn(() => ({ id: "youtubeId" }))
}));

document.getElementsByTagName = () => [
  {
    parentNode: {
      insertBefore: jest.fn()
    }
  }
];

const defaultInteraction = [
  {
    questionLabel: "Who is fastest man on eath?",
    questionId: "3845ff51-a2f5-40a4-a243-31aeb4025a62",
    responses: [
      {
        responseId: "bad0fea5-4ac8-426b-a42d-ff0a70721413",
        responseText: "req1",
        isCorrect: true,
        noOfTimesResponseSelected: 0,
        shouldOpenUrl: false,
        resumeVideo: true
      },
      {
        responseId: "61a5eaa5-587f-4a6a-a8ec-9102ba8b5d37",
        responseText: "res 2",
        noOfTimesResponseSelected: 0,
        shouldOpenUrl: false,
        resumeVideo: true
      }
    ],
    displayQuestionAtSecond: "04"
  }
];

const deleteInteraction = jest.fn();
const saveVideo = jest.fn();

const defaultProps = {
  videoTitle: "Title of Video",
  videoId: "youtubeId",
  shortDescription: "Short description of video",
  interactions: defaultInteraction,
  videoDetails: { details: "here" }
};
describe("component should render with all basic sections", () => {
  afterEach(cleanup);
  let store;
  beforeEach(() => {
    store = mockStore({
      videoConfiguration: { ...defaultProps }
    });
    store.dispatch = jest.fn();
  });
  const renderSubject = props => {
    const newProps = {
      deleteInteraction,
      saveVideo,
      ...props
    };

    return render(
      <Provider store={store}>
        <ConfigureVideoConnected {...newProps} />
      </Provider>
    );
  };

  it("should save snapshot of the page", async () => {
    const { asFragment } = renderSubject();

    expect(asFragment()).toMatchSnapshot();
  });

  it("should click save video ", () => {
    const { getByText } = renderSubject();
    const saveBtn = getByText("Save Video");
    fireEvent.click(saveBtn);
    expect(store.dispatch).toHaveBeenCalledWith({
      payload: {
        interactions: [
          {
            displayQuestionAtSecond: "04",
            questionId: "3845ff51-a2f5-40a4-a243-31aeb4025a62",
            questionLabel: "Who is fastest man on eath?",
            responses: [
              {
                isCorrect: true,
                noOfTimesResponseSelected: 0,
                responseId: "bad0fea5-4ac8-426b-a42d-ff0a70721413",
                responseText: "req1",
                resumeVideo: true,
                shouldOpenUrl: false
              },
              {
                noOfTimesResponseSelected: 0,
                responseId: "61a5eaa5-587f-4a6a-a8ec-9102ba8b5d37",
                responseText: "res 2",
                resumeVideo: true,
                shouldOpenUrl: false
              }
            ]
          }
        ],
        shortDescription: "Short description of video",
        videoDetails: { details: "here" },
        videoId: "youtubeId",
        videoTitle: "Title of Video",
        isEmailRequired: false
      },
      type: "Save video to myVideos"
    });
  });

  it("should clicked on delete interaction", () => {
    const { getByTestId } = renderSubject();
    const deleteBtn = getByTestId("deleteInteraction");
    fireEvent.click(deleteBtn);
    expect(store.dispatch).toHaveBeenCalledWith({
      payload: "3845ff51-a2f5-40a4-a243-31aeb4025a62",
      type: "Delete interaction from the video via ID"
    });
  });
});
