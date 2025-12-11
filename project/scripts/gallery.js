const videos = [
  "https://www.youtube.com/shorts/56AUnrkInP4",
  "https://www.youtube.com/shorts/br4axih3mmc",
  "https://www.youtube.com/watch?v=8BM3Xh-j9mU"
];

const container = document.getElementById("video-container");

videos.forEach(url => {
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.width = "560";
  iframe.height = "315";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  container.appendChild(iframe);
});