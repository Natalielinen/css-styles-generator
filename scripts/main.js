/* Choose canvas */
const canvasTrigger = document.querySelector('#canvas-trigger');
const figureCanvas = document.querySelector('.figure-canvas');
const textCanvas = document.querySelector('.text-canvas');

function toggleCanvas() {
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
const answerColor = document.getElementById('background-color');


function changeSquareColor() {
    square.style.backgroundColor = squareColor.value;
    answerColor.innerHTML = squareColor.value;
}

squareColor.addEventListener('input', changeSquareColor);

/* Square opacity */

const opacityRange = document.querySelector('#square-opacity');
const opacityRangeSpan = document.querySelector('#square-opacity+span');
const squareAnswerOpacitySpan = document.getElementById('answer-square-opasity');

function changeOpacity() {
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

function changeWidth() {
    square.style.width = squareWidthInput.value + 'px';
    squareAnswerWidthSpan.innerHTML = squareWidthInput.value;
};

function changeHeight() {
    square.style.height = squareHeightInput.value + 'px';
    squareAnswerHeightSpan.innerHTML = squareHeightInput.value;
};

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

function changeRadius() {
    topLeftResult.innerHTML = topLeftRange.value;
    topRightResult.innerHTML = topRightRange.value;
    bottomRightResult.innerHTML = bottomRightRange.value;
    bottomLeftResult.innerHTML = bottomLeftRange.value;

    let borderRadiusParams = topLeftRange.value + 'px ' +
        topRightRange.value + 'px ' +
        bottomRightRange.value + 'px ' +
        bottomLeftRange.value + 'px';

    square.style.borderRadius = borderRadiusParams;

    borderRadiusAnswer.innerHTML = borderRadiusParams;
};

for (let elem of allRadiusInputs) {
    elem.addEventListener('input', changeRadius);
};

/* Box shadow */

const insetShadowCheckbox = document.getElementById('inset-box-shadow');

const boxShadowOffsetX = document.getElementById('box-shadow-offset-x');
const boxShadowOffsetY = document.getElementById('box-shadow-offset-y');
const boxShadowBlur = document.getElementById('box-shadow-blur');
const boxShadowSpread = document.getElementById('box-shadow-spread');
const boxShadowColor = document.getElementById('box-shadow-color');
const boxShadowInputs = document.querySelectorAll('.box-shadow-input');

const boxShadowAnswer = document.getElementById('box-shadow-answer');

function changeBoxShadow() {

    boxShadowOffsetX.nextElementSibling.innerHTML = boxShadowOffsetX.value;
    boxShadowOffsetY.nextElementSibling.innerHTML = boxShadowOffsetY.value;
    boxShadowBlur.nextElementSibling.innerHTML = boxShadowBlur.value;
    boxShadowSpread.nextElementSibling.innerHTML = boxShadowSpread.value;

    let shadowParams = `${insetShadowCheckbox.checked  ? 'inset' : ''} 
    ${boxShadowOffsetX.value}px 
    ${boxShadowOffsetY.value}px 
    ${boxShadowBlur.value}px 
    ${boxShadowSpread.value}px 
    ${boxShadowColor.value}`;

    boxShadowAnswer.innerHTML = shadowParams;

    square.style.boxShadow = shadowParams;
};

for (let input of boxShadowInputs) {
    input.addEventListener('input', changeBoxShadow);
};

insetShadowCheckbox.addEventListener('change', changeBoxShadow);

/* Borders (square) */

const topBlockBorder = document.getElementById('top-block-border');
const rightBlockBorder = document.getElementById('right-block-border');
const bottomBlockBorder = document.getElementById('bottom-block-border');
const leftBlockBorder = document.getElementById('left-block-border');
const blockBorderRanges = document.querySelectorAll('.block-border-range');
const allBorderCheckbox = document.getElementById('all-block-borders');

const blockBorderWidth = document.getElementById('block-border-width');
const blockBorderStyle = document.getElementById('block-border-style');
const blockBorderColor = document.getElementById('block-border-color');

const blockBorderAnswer = document.getElementById('block-border-answer');
const blockBorderAnswerP = document.getElementById('block-border-answer-p');
const sideBlockBorders = document.querySelectorAll('.side-block-border-answer-p');

function changeAllBorders() {
    let borderParams = blockBorderWidth.value + 'px ' +
    blockBorderStyle.value + ' ' +
    blockBorderColor.value;
    square.style.border = borderParams;
    blockBorderWidth.nextElementSibling.innerHTML = blockBorderWidth.value;
    if (blockBorderWidth.value == 0) {
        blockBorderAnswer.innerHTML = 0;
    } else {
        blockBorderAnswer.innerHTML = borderParams;
    };    
};

blockBorderWidth.addEventListener('input', changeAllBorders);
blockBorderStyle.addEventListener('change', changeAllBorders);
blockBorderColor.addEventListener('input', changeAllBorders);

/* Outline */

const blockOutlineColor = document.getElementById('block-outline-color');
const blockOutlineStyle = document.getElementById('block-outline-style');
const blockOutlineWidth = document.getElementById('block-outline-width');
const blockOutlineAnswer = document.getElementById('block-outline-answer');

function changeOutline () { 
    blockOutlineWidth.nextElementSibling.innerHTML = blockOutlineWidth.value;
    let outlineParams = `${blockOutlineWidth.value}px ${blockOutlineStyle.value} ${blockOutlineColor.value}`;
    square.style.outline = outlineParams;
    blockOutlineAnswer.innerHTML = outlineParams;

};

blockOutlineColor.addEventListener('input', changeOutline);
blockOutlineStyle.addEventListener('change', changeOutline);
blockOutlineWidth.addEventListener('input', changeOutline);





