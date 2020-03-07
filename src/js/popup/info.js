const info = (infoElement, { currentTabData, currentSegment }) => {
  const currentUrlElement = infoElement.querySelector('.info__url');
  const currentSegmentElement = infoElement.querySelector('.info__segment');
  const tab = currentTabData;

  currentUrlElement.innerHTML = tab.url;
  currentSegmentElement.innerHTML = currentSegment;
}

export default info;