import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ConfigureVideo from "../ConfigureVideo";
import { Provider } from "react-redux";
import store from "../../../store/configureStore";

const mockPushFn = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(() => ({ push: mockPushFn })),
  useParams: jest
    .fn(() => ({ id: "youtubeId" }))
    .mockImplementationOnce(() => ({ id: "" }))
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
describe("component should render with all basic sections", () => {
  afterEach(cleanup);
  const deleteInteraction = jest.fn();
  const saveVideo = jest.fn();

  const origin = "http://localhost/video/";
  const defaultProps = {
    videoTitle: "Title of Video",
    videoId: "youtubeId",
    shortDescription: "Short description of video",
    interactions: [],
    videoDetails: { details: "here" },
    deleteInteraction,
    saveVideo
  };

  const renderSubject = props => {
    const newProps = {
      ...defaultProps,
      ...props
    };

    return render(
      <Provider store={store}>
        <ConfigureVideo {...newProps} />
      </Provider>
    );
  };

  it("should redirect to homepage if no videoId", async () => {
    renderSubject({ videoId: "", videoTitle: "" });

    expect(mockPushFn).toHaveBeenCalled();
  });

  it("should render title, short description", () => {
    const { getByLabelText } = renderSubject();
    expect(getByLabelText("Title").value).toEqual(defaultProps.videoTitle);
    expect(getByLabelText("Short Description").value).toEqual(
      defaultProps.shortDescription
    );
    expect(getByLabelText("Share URL").value).toEqual(
      origin + defaultProps.videoId + "/share"
    );
    expect(getByLabelText("Embed").value).toEqual(
      '<iframe src="http://localhost/video/youtubeId/embed" allowtransparency="true" frameborder="0" scrolling="no" width="640" height="390"></iframe>'
    );
  });

  it("should render interactions", () => {
    const { getByText } = renderSubject({
      interactions: defaultInteraction
    });
    getByText("Interactions");
    getByText("00:04");
  });

  it("should remove interaction when clicked on delete", () => {
    const { getByTestId } = renderSubject({
      interactions: defaultInteraction
    });
    const deleteBtn = getByTestId("deleteInteraction");
    fireEvent.click(deleteBtn);
    expect(deleteInteraction).toHaveBeenLastCalledWith(
      defaultInteraction[0].questionId
    );
  });

  it("should save video ", () => {
    const { getByText } = renderSubject({
      interactions: defaultInteraction
    });
    const saveBtn = getByText("Save Video");
    fireEvent.click(saveBtn);
    expect(saveVideo).toHaveBeenLastCalledWith({ details: "here" });
  });

  it("should render add interactions modal", () => {
    const { getByText, getByLabelText } = renderSubject({
      interactions: defaultInteraction
    });

    const addInteractionBtn = getByText("Add Interaction");
    fireEvent.click(addInteractionBtn);
    getByText("Time of video to display question");
    getByLabelText("Response 1");
    getByLabelText("Response 2");
    getByText("Save and Add Another");
    getByText("Save");
    getByText("Cancel");
    getByText("Add Another Response");
  });
});
