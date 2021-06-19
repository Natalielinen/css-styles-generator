/** Page toolbar **/
const canvasTrigger = document.querySelector('#canvas-trigger');
const figureCanvas = document.querySelector('.figure-canvas');
const textCanvas = document.querySelector('.text-canvas');

/** Accordeon **/

const accordeonItemsTitles = document.querySelectorAll('.accordeon__item__title');
const accordeonItemsContent = document.querySelectorAll('.accordeon__item__content');


/* Square variables */
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

/* Accordeon square side toolbar */
//Border radius

//inputs
const topLeftRange = document.getElementById('top-left-radius');
const topRightRange = document.getElementById('top-right-radius');
const bottomRightRange = document.getElementById('bottom-right-radius');
const bottomLeftRange = document.getElementById('bottom-left-radius');
const allRadiusInputs = document.querySelectorAll('.square-border-radius');

const manualRadiusInputs = document.querySelectorAll('.manual-radius-inputs');

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

const shadowManualInputs = document.querySelectorAll('.shadow-manual-inputs');

const boxShadowAnswer = document.getElementById('box-shadow-answer');

//Square borders

const blockBorderRanges = document.querySelectorAll('.block-border-range');

const blockBorderWidth = document.getElementById('block-border-width');
const blockBorderStyle = document.getElementById('block-border-style');
const blockBorderColor = document.getElementById('block-border-color');

const borderManualInput = document.querySelector('.border-manual-input');

const blockBorderAnswer = document.getElementById('block-border-answer');

//Square outline

const blockOutlineColor = document.getElementById('block-outline-color');
const blockOutlineStyle = document.getElementById('block-outline-style');
const blockOutlineWidth = document.getElementById('block-outline-width');
const blockOutlineAnswer = document.getElementById('block-outline-answer');
const outlineManualInput = document.querySelector('.outline-manual-input');

/* End of square variables */

/* Text variables */

const text = document.querySelector('.main-content__canvas__text');

const textColor = document.getElementById('text-color');
const textColorAnswer = document.getElementById('text-color-answer');

const fontSize = document.getElementById('font-size');
const fontSizeAnswer = document.getElementById('font-size-answer');

const fontStyle = document.getElementById('font-style');
const fontStyleAnswer = document.getElementById('font-style-answer');

const fontWeight = document.getElementById('font-weight');
const fontWeightAnswer = document.getElementById('font-weight-answer');

/* Text side toolbar */
const textDecorationCheckboxes = document.querySelectorAll('.text-decoration-checkbox'); //for event listener

const textDecorationLineThrough = document.getElementById('text-decoration-line-through');
const textDecorationOverline = document.getElementById('text-decoration-overline');
const textDecorationUnderline = document.getElementById('text-decoration-underline');
const textDecorationAnswer = document.getElementById('text-decoration-answer');

const textDecorationColor = document.getElementById('text-decoration-color');
const textDecorationColorAnswer = document.getElementById('text-decoration-color-answer');

const textDecorationStyle = document.getElementById('text-decoration-style');
const textDecorationStyleAnswer = document.getElementById('text-decoration-style-answer');

const textShadowColor = document.getElementById('text-shadow-color');
const textShadowOffsetX = document.getElementById('text-shadow-offset-x');
const textShadowOffsetY = document.getElementById('text-shadow-offset-y');
const textShadowBlur = document.getElementById('text-shadow-blur');

const textShadowInputs = document.querySelectorAll('.text-shadow-input');
const textShadowManualInputs = document.querySelectorAll('.text-shadow-manual-input')

const textShadowAnswer = document.getElementById('text-shadow-answer');

const textTransform = document.getElementById('text-transform');
const textTransformAnswer = document.getElementById('text-transform-answer');

const topTextBorder = document.getElementById('top-text-border');
const rightTextBorder = document.getElementById('right-text-border');
const bottomTextBorder = document.getElementById('bottom-text-border');
const leftTextBorder = document.getElementById('left-text-border');
const textBorderInputs = document.querySelectorAll('.text-border');

const textBorderStyle = document.getElementById('text-border-style');
const textBorderColor = document.getElementById('text-border-color');





















