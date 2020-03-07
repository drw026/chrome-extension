const setCookieAndReload = function (value) {
    chrome.cookies.set({
        "domain": ".beslist.nl",
        "name": "opt_seg",
        "url": "https://www.beslist.nl/",
        "path": '/',
        "value": `${value}`
        }, () => {
            chrome.tabs.reload();
            window.close();
        }
    )
}

const setCookie = (element) => {
    const cookieInputElement = element.querySelector('[data-cookie="input"]');
    const cookieButtonElement = element.querySelector('[data-cookie="button"]');
    cookieButtonElement.onclick = () => { setCookieAndReload(cookieInputElement.value) };
}

export default setCookie;