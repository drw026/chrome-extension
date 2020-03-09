import { getSegment } from '../services/browserData';

const updateBadge = async () => {
    const currentSegment = await getSegment();
    chrome.browserAction.setBadgeText({text: currentSegment});
    chrome.browserAction.setBadgeBackgroundColor({color: '#f37632'})
};

chrome.webNavigation.onCommitted.addListener(updateBadge);
chrome.webNavigation.onHistoryStateUpdated.addListener(updateBadge);
chrome.webNavigation.onBeforeNavigate.addListener(updateBadge);

chrome.webNavigation.onCommitted.addListener(updateBadge);
chrome.webNavigation.onHistoryStateUpdated.addListener(updateBadge);
chrome.webNavigation.onBeforeNavigate.addListener(updateBadge);

export default updateBadge;
