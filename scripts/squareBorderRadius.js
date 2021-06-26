/* Variables */

//inputs

const topLeftRange = document.getElementById('top-left-radius');
const topRightRange = document.getElementById('top-right-radius');
const bottomRightRange = document.getElementById('bottom-right-radius');
const bottomLeftRange = document.getElementById('bottom-left-radius');
const allRadiusInputs = document.querySelectorAll('.square-border-radius');
const manualRadiusInputs = document.querySelectorAll('.manual-radius-inputs');

//span-answer

const borderRadiusAnswer = document.getElementById('square-border-radius');

/* Functions */

function changeRadius() {
    for (let elem of allRadiusInputs) {
        elem.nextElementSibling.innerHTML = elem.value;
    };
    let borderRadiusParams = `${topLeftRange.value}px ${topRightRange.value}px ${bottomRightRange.value}px ${bottomLeftRange.value}px`;

    square.style.borderRadius = borderRadiusParams;

    borderRadiusAnswer.innerHTML = borderRadiusParams;

    if (topLeftRange.value == 0 && topRightRange.value == 0 && bottomRightRange.value == 0 && bottomLeftRange.value == 0) {
        borderRadiusAnswer.innerHTML = '0';
    };
    if (topLeftRange.value == topRightRange.value && topLeftRange.value == bottomRightRange.value && topLeftRange.value == bottomLeftRange.value) {
        borderRadiusAnswer.innerHTML = `${topLeftRange.value}px`;//Попробовать через массив и цикл или switch case
    };
};

for (let elem of allRadiusInputs) {
    elem.addEventListener('input', changeRadius);
};

for (let elem of manualRadiusInputs) {
    elem.previousElementSibling.onclick = function () {
        enableManualInput(elem);
    };
};

for (let elem of manualRadiusInputs) {
    elem.onblur = function () {
        disableManualInput(elem)
        changeRadius();
    };

    elem.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key == 13) {
            disableManualInput(elem);
            changeRadius();
        };
    });
};