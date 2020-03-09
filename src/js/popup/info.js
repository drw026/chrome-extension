const info = (infoElement, { currentTabData, currentSegment }) => {
  const currentUrlElement = infoElement.querySelector('[data-info="url"]');
  const currentSegmentElement = infoElement.querySelector('[data-info="segment"]');

  currentUrlElement.innerHTML = currentTabData.url;
  currentSegmentElement.innerHTML = currentSegment;
};

export default info;
