/* Choose canvas */
function toggleCanvas() {
    figureCanvas.classList.toggle('disabled');
    textCanvas.classList.toggle('disabled');
};

canvasTrigger.addEventListener('change', toggleCanvas);

/* Accordeon */

for (let item of accordeonItemsTitles) {
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('disabled');
    });
};

/*** Square customization ***/

/** Top toolbar**/

/* Square color */

function changeSquareColor() {
    square.style.backgroundColor = squareColor.value;
    answerColor.innerHTML = squareColor.value;
}

squareColor.addEventListener('input', changeSquareColor);

/* Square opacity */

function changeOpacity() {
    square.style.opacity = opacityRange.value;
    opacityRangeSpan.innerHTML = opacityRange.value;
    squareAnswerOpacitySpan.innerHTML = opacityRange.value;
};

opacityRange.addEventListener('input', changeOpacity);

/* Square size */

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

function changeRadius() {
    for (let elem of allRadiusInputs) {
        elem.nextElementSibling.innerHTML = elem.value;
    };
    let borderRadiusParams = topLeftRange.value + 'px ' +
        topRightRange.value + 'px ' +
        bottomRightRange.value + 'px ' +
        bottomLeftRange.value + 'px';

    square.style.borderRadius = borderRadiusParams;

    borderRadiusAnswer.innerHTML = borderRadiusParams;

    if (topLeftRange.value == 0 && topRightRange.value == 0 && bottomRightRange.value == 0 && bottomLeftRange.value == 0) {
        borderRadiusAnswer.innerHTML = '0';
    };
    if(topLeftRange.value == topRightRange.value && topLeftRange.value == bottomRightRange.value && topLeftRange.value == bottomLeftRange.value) {
        borderRadiusAnswer.innerHTML = topLeftRange.value + 'px';
    };
};

for (let elem of allRadiusInputs) {
    elem.addEventListener('input', changeRadius);
};



for (let elem of manualRadiusInputs) {
    elem.previousElementSibling.onclick = function () {
        elem.previousElementSibling.classList.add('disabled');
        elem.classList.remove('disabled');
        elem.value = elem.previousElementSibling.previousElementSibling.value;  
    };
};

for (let elem of manualRadiusInputs) {
    elem.onblur = function () {
        elem.classList.add('disabled');
        elem.previousElementSibling.classList.remove('disabled');
        elem.previousElementSibling.innerHTML = elem.value;
        elem.previousElementSibling.previousElementSibling.value = elem.value;
        changeRadius();
    };
};

/* Box shadow */

function changeBoxShadow() {

    for (let elem of boxShadowInputs) {
        elem.nextElementSibling.innerHTML = elem.value;
    };

    let shadowParams = `${insetShadowCheckbox.checked  ? 'inset' : ''} 
    ${boxShadowOffsetX.value}px 
    ${boxShadowOffsetY.value}px 
    ${boxShadowBlur.value}px 
    ${boxShadowSpread.value}px 
    ${boxShadowColor.value}`;

    boxShadowAnswer.innerHTML = shadowParams;

    square.style.boxShadow = shadowParams;

    if (boxShadowOffsetX.value == 0 && boxShadowOffsetY.value == 0 && boxShadowBlur.value == 0 && boxShadowSpread.value == 0) {
        boxShadowAnswer.innerHTML = 'none';
    };
};

for (let input of boxShadowInputs) {
    input.addEventListener('input', changeBoxShadow);
};

boxShadowColor.addEventListener('input', changeBoxShadow);
insetShadowCheckbox.addEventListener('change', changeBoxShadow);

/* Borders (square) */

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

function changeOutline() {
    blockOutlineWidth.nextElementSibling.innerHTML = blockOutlineWidth.value;
    let outlineParams = `${blockOutlineWidth.value}px ${blockOutlineStyle.value} ${blockOutlineColor.value}`;
    square.style.outline = outlineParams;
    if(blockOutlineWidth.value == 0) {
        blockOutlineAnswer.innerHTML = 'none';
    } else {
        blockOutlineAnswer.innerHTML = outlineParams;
    };    
};

blockOutlineColor.addEventListener('input', changeOutline);
blockOutlineStyle.addEventListener('change', changeOutline);
blockOutlineWidth.addEventListener('input', changeOutline);

