export const convertToMinutes = videoDuration => {
  return Math.floor(videoDuration / 60) < 10
    ? "0" + Math.floor(videoDuration / 60.0)
    : Math.floor(videoDuration / 60.0);
};

export const convertToSeconds = videoDuration => {
  return Math.floor(videoDuration % 60) < 10
    ? "0" + Math.floor(videoDuration % 60.0)
    : Math.floor(videoDuration % 60.0);
};

export const convertToMinutesAndSeconds = videoDuration => {
  const currentMinutes = convertToMinutes(videoDuration);
  const currentSeconds = convertToSeconds(videoDuration);
  return `${currentMinutes}:${currentSeconds}`;
};

export const importYoutubeApi = loadVideo => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";

  window.onYouTubeIframeAPIReady = player => {
    loadVideo(player);
  };

  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};
