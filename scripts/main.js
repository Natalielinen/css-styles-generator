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

/*** Square customization ***/

/** Top toolbar**/

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
const squareAnswerOpacitySpan = document.getElementById('answer-square-opasity');

function changeOpacity () {
    square.style.opacity = opacityRange.value;
    opacityRangeSpan.innerHTML = opacityRange.value;
    squareAnswerOpacitySpan.innerHTML = opacityRange.value;
};

opacityRange.addEventListener('input', changeOpacity);

/* Square size */

const squareWidthInput = document.getElementById('square-width');
const squareHeightInput = document.getElementById('square-height');
const squareAnswerWidthSpan = document.getElementById('answer-square-width');
const squareAnswerHeightSpan = document.getElementById('answer-square-height');

function changeWidth () {
    square.style.width = squareWidthInput.value + 'px';
    squareAnswerWidthSpan.innerHTML = squareWidthInput.value;
}

function changeHeight () {
    square.style.height = squareHeightInput.value +'px';
    squareAnswerHeightSpan.innerHTML = squareHeightInput.value;
}

squareWidthInput.addEventListener('input', changeWidth);
squareHeightInput.addEventListener('input', changeHeight);

/** Side toolbar **/

/* Border radius* */

//inputs
const topLeftRange = document.getElementById('top-left-radius');
const topRightRange = document.getElementById('top-right-radius');
const bottomRightRange = document.getElementById('bottom-right-radius');
const bottomLeftRange = document.getElementById('bottom-left-radius');
const allRadiusInputs = document.querySelectorAll('.square-border-radius');
//spans-result
const topLeftResult = document.getElementById('tl-result');
const topRightResult = document.getElementById('tr-result');
const bottomRightResult = document.getElementById('br-result');
const bottomLeftResult = document.getElementById('bl-result');
//span-answer
const borderRadiusAnswer = document.getElementById('square-border-radius');


let borderRadius = topLeftRange.value + 'px ' + 
                   topRightRange.value + 'px ' +
                   bottomRightRange.value + 'px ' +
                   bottomLeftRange.value + 'px';

function getRadius () {
    topLeftResult.innerHTML = topLeftRange.value;
    topRightResult.innerHTML = topRightRange.value;
    bottomRightResult.innerHTML = bottomRightRange.value;
    bottomLeftResult.innerHTML = bottomLeftRange.value;

    square.style.borderRadius = 
    topLeftRange.value + 'px ' + 
    topRightRange.value + 'px ' +
    bottomRightRange.value + 'px ' +
    bottomLeftRange.value + 'px';

    borderRadiusAnswer.innerHTML = topLeftRange.value + 'px ' + 
    topRightRange.value + 'px ' +
    bottomRightRange.value + 'px ' +
    bottomLeftRange.value + 'px';


}  

for (let elem of allRadiusInputs) {
    elem.addEventListener('input', getRadius)
}



