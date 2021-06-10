/* Choose canvas */
const canvasTrigger = document.querySelector('#canvas-trigger');
const figureCanvas = document.querySelector('.figure-canvas');
const textCanvas = document.querySelector('.text-canvas');

function toggleCanvas () {
    figureCanvas.classList.toggle('disabled');
    textCanvas.classList.toggle('disabled');
};

canvasTrigger.addEventListener('change', toggleCanvas);

/* Accordeon */
const accordeonItemsTitles = document.querySelectorAll('.accordeon__item__title');
const accordeonItemsContent = document.querySelectorAll('.accordeon__item__content');

for (let item of accordeonItemsTitles) {
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('disabled');       
    });
};

/* Square customization */

/* Square color */

const squareColor = document.getElementById('square-color');
const square = document.querySelector('.main-content__canvas__square');

function changeSquareColor () {
    square.style.backgroundColor = squareColor.value;
}

squareColor.addEventListener('change', changeSquareColor);

/* Square opacity */

const opacityRange = document.querySelector('#square-opacity');
const opacityRangeSpan = document.querySelector('#square-opacity+span');

function changeOpacity () {
    square.style.opacity = opacityRange.value;
    opacityRangeSpan.innerHTML = opacityRange.value;
};

opacityRange.addEventListener('input', changeOpacity);