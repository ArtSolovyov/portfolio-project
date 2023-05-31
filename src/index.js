import { startFireworks } from "./modules/fireworks";

function setButtonBehavior(selector, event, callback) {
    const elem = document.querySelector(selector);
    elem.addEventListener(event, () => callback(selector));
}

function setRedirect(selector) {
    console.log(selector);
    document.location = selector === '.mainPage' ?
     '/dist/index.html' : `/pages/${selector.replace(/\.|#/g, '')}.html`;
}

try {
    startFireworks();
} catch {}

setButtonBehavior('.mainPage', 'click', setRedirect);
setButtonBehavior('.projects', 'click', setRedirect);
setButtonBehavior('.contacts', 'click', setRedirect);