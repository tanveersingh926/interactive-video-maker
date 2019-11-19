import {
  convertToMinutes,
  convertToMinutesAndSeconds,
  convertToSeconds,
  importYoutubeApi
} from "./videoHelpers";

document.getElementsByTagName = () => [
  {
    parentNode: {
      insertBefore: jest.fn()
    }
  }
];
describe("validations test", () => {
  it("convertToMinutesAndSeconds", () => {
    const convertedValue = convertToMinutesAndSeconds(124);
    expect(convertedValue).toEqual("02:04");
  });

  it("convertToMinutes", () => {
    const convertedValue = convertToMinutes(124);
    expect(convertedValue).toEqual("02");
  });

  it("convertToSeconds", () => {
    const convertedValue = convertToSeconds(124);
    expect(convertedValue).toEqual("04");
  });

  it("importYoutubeApi", () => {
    const mockFn = jest.fn();
    importYoutubeApi(mockFn);
    window.onYouTubeIframeAPIReady();
    expect(mockFn).toHaveBeenCalled();
  });
});
