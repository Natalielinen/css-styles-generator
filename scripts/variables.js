/** Page toolbar **/
const canvasTrigger = document.querySelector('#canvas-trigger');
const figureCanvas = document.querySelector('.figure-canvas');
const textCanvas = document.querySelector('.text-canvas');

/** Square top toolbar **/
//Square background-color

const squareColor = document.getElementById('square-color');
const square = document.querySelector('.main-content__canvas__square');
const answerColor = document.getElementById('background-color');

//Square opacity

const opacityRange = document.querySelector('#square-opacity');
const opacityRangeSpan = document.querySelector('#square-opacity+span');
const squareAnswerOpacitySpan = document.getElementById('answer-square-opasity');

//Square size

const squareWidthInput = document.getElementById('square-width');
const squareHeightInput = document.getElementById('square-height');
const squareAnswerWidthSpan = document.getElementById('answer-square-width');
const squareAnswerHeightSpan = document.getElementById('answer-square-height');

/** Accordeon **/

const accordeonItemsTitles = document.querySelectorAll('.accordeon__item__title');
const accordeonItemsContent = document.querySelectorAll('.accordeon__item__content');

/* Accordeon square side toolbar */
//Border radius

//inputs
const topLeftRange = document.getElementById('top-left-radius');
const topRightRange = document.getElementById('top-right-radius');
const bottomRightRange = document.getElementById('bottom-right-radius');
const bottomLeftRange = document.getElementById('bottom-left-radius');
const allRadiusInputs = document.querySelectorAll('.square-border-radius');

const manualRadiusInputs = document.querySelectorAll('.manual-inputs');

//span-answer
const borderRadiusAnswer = document.getElementById('square-border-radius');

//Box shadow

const insetShadowCheckbox = document.getElementById('inset-box-shadow');

const boxShadowOffsetX = document.getElementById('box-shadow-offset-x');
const boxShadowOffsetY = document.getElementById('box-shadow-offset-y');
const boxShadowBlur = document.getElementById('box-shadow-blur');
const boxShadowSpread = document.getElementById('box-shadow-spread');
const boxShadowColor = document.getElementById('box-shadow-color');
const boxShadowInputs = document.querySelectorAll('.box-shadow-input');

const boxShadowAnswer = document.getElementById('box-shadow-answer');

//Square borders

const blockBorderRanges = document.querySelectorAll('.block-border-range');

const blockBorderWidth = document.getElementById('block-border-width');
const blockBorderStyle = document.getElementById('block-border-style');
const blockBorderColor = document.getElementById('block-border-color');

const blockBorderAnswer = document.getElementById('block-border-answer');

//Square outline

const blockOutlineColor = document.getElementById('block-outline-color');
const blockOutlineStyle = document.getElementById('block-outline-style');
const blockOutlineWidth = document.getElementById('block-outline-width');
const blockOutlineAnswer = document.getElementById('block-outline-answer');



