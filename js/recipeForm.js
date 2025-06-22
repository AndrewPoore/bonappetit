import { lastModified, checkLocalStorage, closeMessage } from "./utils.mjs";

async function postAPI() {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch(`https://spoon-proxy.onrender.com/recipes/analyze/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (response.ok) {
        document.querySelector('.main-content').classList.add('hidden');
        thankYou();
        console.log(response);
    } else {
        document.querySelector('.main-content').classList.add('hidden');
        error();
        console.log(response);
    }

}

function thankYou() {
    let thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = `Your recipe has been successfully submitted to Spoonacular's API! Thank you for using Bon Appétit!`;
    document.querySelector('main').append(thankYouMessage);
}

function error() {
    let error = document.createElement('p');
    error.textContent = `Unfortunately, there has been an issue submitting your recipe to Spoonacular's API. Please try again later!`;
    document.querySelector('main').append(error);
}

const form = document.querySelector('#form');

form.addEventListener('submit', event => {
    event.preventDefault();
    try {
        postAPI();
    } catch (err) {
        alert(err);
    }
});

lastModified();
checkLocalStorage();
document.querySelector('.message-btn').addEventListener('click', closeMessage);
