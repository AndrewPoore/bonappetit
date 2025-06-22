export function checkLocalStorage() {
    function generateWelcomeMessage() {
        let div = document.createElement('div');
        let heading = document.createElement('h3');
        let btn = document.createElement('button');
        let icon = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        let image = document.createElement('img');
        let main = document.querySelector('main');

        div.classList.add('message-ctn');
        btn.classList.add('message-btn');
        icon.classList.add('icon');

        heading.textContent = `Welcome to Bon Appétit!`;
        p1.textContent = `I am delighted to welcome you to my WDD 330 final project website! This website culminates my hard work, creativity, and dedication.`;
        p2.textContent = `This website uses localStorage methods (displaying this window for first-time users), data submission and retrieval from an external API (Spoonacular API), DOM manipulation, JavaScript modules, CSS animations, and responsive design.`;
        p3.textContent = `This app showcases not just my accomplishments, but the learning and growth that have come along the way. With all that being said, bon appétit!`;
        image.src = 'https://cdn.glitch.global/20ce3369-a4b1-4cb8-9d64-c0ff6b200c1b/cake.JPG?v=1712699257585';
        image.alt = `Me making pineapple upside down cake.`;
        icon.src = 'imgs/x-icon.png';

        div.append(btn);
        btn.append(icon);
        main.append(div);
        div.append(heading);
        div.append(p1);
        div.append(p2);
        div.append(p3);
        // div.append(p4);
        // div.append(p5);

        div.append(image);
    }
    if (localStorage.getItem("visited") != "true") {
        localStorage.setItem("visited", "true");
        document.querySelector('.main-content').classList.add('hidden');
        generateWelcomeMessage();
    }
    else {
        document.querySelector('.main-content').classList.remove('hidden');
    }
}

export function closeMessage() {
    document.querySelector('.message-ctn').remove();
    document.querySelector('.main-content').classList.remove('hidden');
}

export function lastModified() {
    let lastMod = document.querySelector('#modified');
    lastMod.textContent = `Modified: ${document.lastModified}`;
}

export function startBtnAnimation() {
    document.querySelector('button').classList.add('recipe-btn-active');
}

export function endBtnAnimation() {
    document.querySelector('button').classList.remove('recipe-btn-active');
}