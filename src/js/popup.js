import '../img/beslist16.png';
import '../img/beslist48.png';
import '../img/beslist128.png';
import '../img/logo-tweb.png';
import '../img/logo-beslist.png';
import { getCurrentTabData, getSegment } from './popup/browserDataService';
import info from './popup/info';
import environment from './popup/environment';
import setCookie from './popup/setCookie';
import openFeature from './popup/openFeature';

(async () => {
    const currentTabData = await getCurrentTabData();
    const currentSegment = await getSegment();

    info(document.querySelector('.info'), { currentTabData, currentSegment });
    environment(document.querySelector('.environment'), { currentTabData });
    setCookie(document.querySelector('.set-cookie'));
    openFeature(document.querySelector('.open-feature'));
})();
