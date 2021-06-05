const body = document.querySelector("body");

const IMG_NUMBER = 19;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/static/images/${imgNumber + 1}.jpg`
    // image.src = `{{ url_for('static', filename='images/${imgNumber + 1}.jpg') }}`;
    image.classList.add("bgImage"); // js 내부에서 클래스 주기!?
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();