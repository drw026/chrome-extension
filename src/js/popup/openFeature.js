const manualBranchBaseUrl = '2.testing.beslist.nl';
const openFeature = (element) => {
    const openFeatureInputElement = element.querySelector('[data-open-feature="input"]');
    const openFeatureButtonElement = element.querySelector('[data-open-feature="button"]');

    openFeatureButtonElement.onclick = () => { 
        let path = openFeatureInputElement.value;
        if (!path) return;
        chrome.tabs.create({ url: `https://${(path.replace(/\//g, '-')).toLocaleLowerCase()}.${manualBranchBaseUrl}` }, () => { window.close() });
    };
}

export default openFeature;