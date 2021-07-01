/* Variables */

const square = document.querySelector('.main-content__canvas__square');
const text = document.querySelector('.main-content__canvas__text');

// Page toolbar

const canvasTrigger = document.querySelector('#canvas-trigger');
const figureCanvas = document.querySelector('.figure-canvas');
const textCanvas = document.querySelector('.text-canvas');

// Accordeon

const accordeonItemsTitles = document.querySelectorAll('.accordeon__item__title');
const accordeonItemsContent = document.querySelectorAll('.accordeon__item__content');

/* Functions */

// Choose canvas

function toggleCanvas() {
    figureCanvas.classList.toggle('disabled');
    textCanvas.classList.toggle('disabled');
};
canvasTrigger.addEventListener('change', toggleCanvas);

// Accordeon

for (let item of accordeonItemsTitles) {
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('disabled');
    });
};

// Manual inputs

function enableManualInput(manualInput) {
    manualInput.previousElementSibling.classList.add('disabled');
    manualInput.classList.remove('disabled');
    manualInput.value = manualInput.previousElementSibling.previousElementSibling.value;
};

function disableManualInput(manualInput) {
    manualInput.classList.add('disabled');
    manualInput.previousElementSibling.classList.remove('disabled');
    manualInput.previousElementSibling.innerHTML = manualInput.value;
    manualInput.previousElementSibling.previousElementSibling.value = manualInput.value;
};


/**** Text customization ****/


//text sidebar

function changeTextDecoration() {

    let textDecorationParams =
        `${textDecorationLineThrough.checked ? 'line-through' : ''}
     ${textDecorationOverline.checked ? 'overline' : ''}
     ${textDecorationUnderline.checked ? 'underline' : ''}`;

    text.style.textDecoration = textDecorationParams;

    textDecorationAnswer.innerHTML = textDecorationParams;

    if (!textDecorationLineThrough.checked && !textDecorationOverline.checked && !textDecorationUnderline.checked) {
        text.style.textDecoration = 'none';
        textDecorationAnswer.innerHTML = 'none';
    };
};

function changeTextDecorationColor() {
    text.style.textDecorationColor = textDecorationColor.value;
    textDecorationColorAnswer.innerHTML = textDecorationColor.value;
};

textDecorationColor.addEventListener('input', changeTextDecorationColor);

for (let checkbox of textDecorationCheckboxes) {
    checkbox.addEventListener('change', changeTextDecoration);
};

function changeTextDecirationStyle() {
    text.style.textDecorationStyle = textDecorationStyle.value;
    textDecorationStyleAnswer.innerHTML = textDecorationStyle.value;
};

textDecorationStyle.addEventListener('change', changeTextDecirationStyle);

function changeTextShadow() {
    for (let input of textShadowInputs) {
        input.nextElementSibling.innerHTML = input.value;
    };
    let textShadowParams = `${textShadowOffsetX.value}px ${textShadowOffsetY.value}px ${textShadowBlur.value}px ${textShadowColor.value}`;
    text.style.textShadow = textShadowParams;
    textShadowAnswer.innerHTML = textShadowParams;

};

for (let input of textShadowInputs) {
    input.addEventListener('input', changeTextShadow);
};

textShadowColor.addEventListener('input', changeTextShadow);

for (let elem of textShadowManualInputs) {
    elem.previousElementSibling.onclick = function () {
        enableManualInput(elem);
    };
};

for (let elem of textShadowManualInputs) {
    elem.onblur = function () {
        disableManualInput(elem)
        changeTextShadow();
    };

    elem.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key == 13) {
            disableManualInput(elem);
            changeTextShadow();
        };
    });
};

function transformText() {
    text.style.textTransform = textTransform.value;
    textTransformAnswer.innerHTML = textTransform.value;
};

textTransform.addEventListener('change', transformText);

//подумать как можно переделать этот кусок кода (начало)

for (let input of textBorderInputs) {
    input.oninput = function () {
        input.nextElementSibling.innerHTML = input.value;
    };
};

function changeTextBorders(input, style, color) {
    return `${input.value}px ${style.value} ${color.value}`;
};

function getAnswer (answerCont, answer, border, borderStyle, borderColor) {
    let textBorderAnswersContainers = [
        topTextBordersAnswerCont,
        rightTextBordersAnswerCont,
        bottomTextBordersAnswerCont,
        leftTextBordersAnswerCont
    ];

    allTextBordersAnswerCont.classList.add('disabled');
    answerCont.classList.remove('disabled');
    answer.innerHTML = `${border.value}px ${borderStyle.value} ${borderColor.value}`;
    if(topTextBorder.value == 0 && rightTextBorder.value == 0 && bottomTextBorder.value == 0 && leftTextBorder.value == 0) {
        for(let borderCont of textBorderAnswersContainers) {
            borderCont.classList.add('disabled');
        };
        allTextBordersAnswerCont.classList.remove('disabled');
    }; 

    if(
        topTextBorder.value ==  rightTextBorder.value &&
        topTextBorder.value ==  bottomTextBorder.value &&
        topTextBorder.value ==  leftTextBorder.value &&
        topTextBorderStyle.value == rightTextBorderStyle.value &&
        topTextBorderStyle.value == bottomTextBorderStyle.value &&
        topTextBorderStyle.value == leftTextBorderStyle.value &&
        topTextBorderColor.value == rightTextBorderColor.value &&
        topTextBorderColor.value == bottomTextBorderColor.value &&
        topTextBorderColor.value == leftTextBorderColor.value
    ) {
        for(let borderCont of textBorderAnswersContainers) {
            borderCont.classList.add('disabled');
        };
        allTextBordersAnswerCont.classList.remove('disabled');
        allTextBordersAnswer.innerHTML = `${topTextBorder.value}px ${topTextBorderStyle.value} ${topTextBorderColor.value}`;
    } else {
        allTextBordersAnswerCont.classList.add('disabled');
        for(let borderCont of textBorderAnswersContainers) {
            borderCont.classList.remove('disabled');
        };
        
    }
};

function changeTopTextBorder() {
    text.style.borderTop = changeTextBorders(topTextBorder, topTextBorderStyle, topTextBorderColor);
    getAnswer(topTextBordersAnswerCont, topTextBorderAnswer, topTextBorder, topTextBorderStyle, topTextBorderColor);
};
topTextBorder.addEventListener('input', changeTopTextBorder);
topTextBorderStyle.addEventListener('change', changeTopTextBorder);
topTextBorderColor.addEventListener('input', changeTopTextBorder);



function changeRightTextBorder() {
    text.style.borderRight = changeTextBorders(rightTextBorder, rightTextBorderStyle, rightTextBorderColor);
    getAnswer(rightTextBordersAnswerCont, rightTextBorderAnswer, rightTextBorder, rightTextBorderStyle, rightTextBorderColor);
};
rightTextBorder.addEventListener('input', changeRightTextBorder);
rightTextBorderStyle.addEventListener('change', changeRightTextBorder);
rightTextBorderColor.addEventListener('input', changeRightTextBorder);

function changeBottomTextBorder() {
    text.style.borderBottom = changeTextBorders(bottomTextBorder, bottomTextBorderStyle, bottomTextBorderColor);
    getAnswer(bottomTextBordersAnswerCont, bottomTextBorderAnswer, bottomTextBorder, bottomTextBorderStyle, bottomTextBorderColor);
};
bottomTextBorder.addEventListener('input', changeBottomTextBorder);
bottomTextBorderStyle.addEventListener('change', changeBottomTextBorder);
bottomTextBorderColor.addEventListener('input', changeBottomTextBorder);

function changeLeftTextBorder() {
    text.style.borderLeft = changeTextBorders(leftTextBorder, leftTextBorderStyle, leftTextBorderColor);
    getAnswer(leftTextBordersAnswerCont, leftTextBorderAnswer, leftTextBorder, leftTextBorderStyle, leftTextBorderColor);
};
leftTextBorder.addEventListener('input', changeLeftTextBorder);
leftTextBorderStyle.addEventListener('change', changeLeftTextBorder);
leftTextBorderColor.addEventListener('input', changeLeftTextBorder);

//подумать как можно переделать этот кусок кода (конец)

for (let elem of manualTextBorderInputs) {
    elem.previousElementSibling.onclick = function () {
        enableManualInput(elem);
    };
};

for (let elem of manualTextBorderInputs) {
    elem.onblur = function () {
        disableManualInput(elem)
        changeTopTextBorder();
        changeRightTextBorder();
        changeBottomTextBorder();
        changeLeftTextBorder(); 
    };

    elem.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key == 13) {
            disableManualInput(elem);
            changeTextShadow();
        };
    });
};


