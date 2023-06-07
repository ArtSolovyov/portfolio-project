import '../node_modules/animate.css/animate.min.css';

import { startFireworks } from "./modules/fireworks";

function setButtonBehavior(selector, event, callback) {
    const elem = document.querySelector(selector);
    elem.addEventListener(event, () => callback(selector));
}

function setRedirect(selector) {
    document.location = selector === '.mainPage' ?
     '/dist/index.html' : `/src/pages/${selector.replace(/\.|#/g, '')}.html`;
}

function setSocialRedirect(selector) {
    let link;

    switch (selector) {
        case '.telegramIcon':
            link = 'https://t.me/agvento1';
            break;
        case '.vkIcon':
            link = 'https://vk.com/arthur_solovyev';
            break;
        case '.githubIcon':
            link = 'https://github.com/ArtSolovyov/';
            break;
    }

    window.open(link, '_blank');
}

try {
    startFireworks();
} catch {}

setButtonBehavior('.mainPage', 'click', setRedirect);
setButtonBehavior('.projects', 'click', setRedirect);
setButtonBehavior('.contacts', 'click', setRedirect);
setButtonBehavior('.telegramIcon', 'click', setSocialRedirect)
setButtonBehavior('.vkIcon', 'click', setSocialRedirect)
setButtonBehavior('.githubIcon', 'click', setSocialRedirect)