export const getCurrentTabData = () => (new Promise((resolve) => {
    chrome.tabs.query(
      {
        currentWindow: true,
        active: true
      },
      function(tabs) {
        resolve(tabs[0]);
      }
    );
}));
  
export const getSegment = () => (new Promise((resolve, reject) => {
    chrome.cookies.get({ url:'https://www.beslist.nl/', name: 'opt_seg' }, function(data) {
        if (!data) {
            reject();
            return;
        };
        resolve(data.value);
    });
}));