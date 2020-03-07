const developmentBaseUrl = 'https://dev.beslist.nl/app_dev.php';
const stagingBaseUrl = 'https://staging.beslist.nl';
const productionBaseUrl = 'https://www.beslist.nl';

const setNewPath = (url) => {
    const urlObject = new URL(url);
    const oldPath = urlObject.pathname.replace(/\/app_dev.php/g, '') + urlObject.search || '';
    let newPath = oldPath || '';
    if (newPath && !newPath.startsWith('/')) {
        newPath = `/${newPath}`;
    }

    return newPath;
};

const openPathInCurrentTab = (environmentBaseUrl, path) => {
    chrome.tabs.update({ url: `${environmentBaseUrl}${path}` }, () => { window.close() });
}

const openPathInNewTab = (environmentBaseUrl, path) => {
    chrome.tabs.create({ url: `${environmentBaseUrl}${path}` }, () => { window.close() });
}

const environment = (element, { currentTabData }) => {
    const developmentElement = element.querySelector('[data-environment="dev"]');
    const productionElement = element.querySelector('[data-environment="prod"]');
    const stagingElement = element.querySelector('[data-environment="staging"]');
    const newPath = setNewPath(currentTabData.url);

    developmentElement.onclick = () => { openPathInCurrentTab(developmentBaseUrl, newPath) };
    developmentElement.querySelector('.environment__action').onclick = () => { openPathInNewTab(developmentBaseUrl, newPath) };
    productionElement.onclick = () => { openPathInCurrentTab(productionBaseUrl, newPath) };
    productionElement.querySelector('.environment__action').onclick = () => { openPathInNewTab(productionBaseUrl, newPath) };
    stagingElement.onclick = () => { openPathInCurrentTab(stagingBaseUrl, newPath) };
    stagingElement.querySelector('.environment__action').onclick = () => { openPathInNewTab(stagingBaseUrl, newPath) };
}

export default environment;