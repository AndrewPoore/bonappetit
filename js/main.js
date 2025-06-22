import { lastModified, checkLocalStorage, closeMessage } from "./utils.mjs";

lastModified();
checkLocalStorage();
document.querySelector('#clear').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});
document.querySelector('.message-btn').addEventListener('click', closeMessage);
