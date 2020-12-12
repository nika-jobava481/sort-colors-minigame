
var allBoxes = document.querySelectorAll(".color");
var colorArray = [];

function getRandomColor() {
    var red = Math.round(Math.random() * 256);
    var green = Math.round(Math.random() * 256);
    var blue = Math.round(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

function getColors() {
    for (var i = 0; i < allBoxes.length / 4; i++) {
        var randColor = getRandomColor();
        for (var j = 0; j < 4; j++) {
            colorArray.push(randColor);
        }
    }
}

function giveColorsToBoxes() {
    var range = allBoxes.length - 1;
    for (var i = 0; i < allBoxes.length; i++) {
        var randNum = Math.round(Math.random() * range);
        allBoxes[i].style.backgroundColor = colorArray[randNum];
        colorArray.splice(randNum, 1);
        range--;
    }
}

function checkColorsInColumns() {
    if (allBoxes[0].style.backgroundColor == allBoxes[4].style.backgroundColor && allBoxes[4].style.backgroundColor == allBoxes[8].style.backgroundColor && allBoxes[8].style.backgroundColor == allBoxes[12].style.backgroundColor) {
        if (allBoxes[1].style.backgroundColor == allBoxes[5].style.backgroundColor && allBoxes[5].style.backgroundColor == allBoxes[9].style.backgroundColor && allBoxes[9].style.backgroundColor == allBoxes[13].style.backgroundColor) {
            if (allBoxes[2].style.backgroundColor == allBoxes[6].style.backgroundColor && allBoxes[6].style.backgroundColor == allBoxes[10].style.backgroundColor && allBoxes[10].style.backgroundColor == allBoxes[14].style.backgroundColor) {
                if (allBoxes[3].style.backgroundColor == allBoxes[7].style.backgroundColor && allBoxes[7].style.backgroundColor == allBoxes[11].style.backgroundColor && allBoxes[11].style.backgroundColor == allBoxes[15].style.backgroundColor) {
                    return true;
                }
            }
        }
    }
}

function checkColorsInRows() {
    if (allBoxes[0].style.backgroundColor == allBoxes[1].style.backgroundColor && allBoxes[1].style.backgroundColor == allBoxes[2].style.backgroundColor && allBoxes[2].style.backgroundColor == allBoxes[3].style.backgroundColor) {
        if (allBoxes[4].style.backgroundColor == allBoxes[5].style.backgroundColor && allBoxes[5].style.backgroundColor == allBoxes[6].style.backgroundColor && allBoxes[6].style.backgroundColor == allBoxes[7].style.backgroundColor) {
            if (allBoxes[8].style.backgroundColor == allBoxes[9].style.backgroundColor && allBoxes[9].style.backgroundColor == allBoxes[10].style.backgroundColor && allBoxes[10].style.backgroundColor == allBoxes[11].style.backgroundColor) {
                if (allBoxes[12].style.backgroundColor == allBoxes[13].style.backgroundColor && allBoxes[13].style.backgroundColor == allBoxes[14].style.backgroundColor && allBoxes[14].style.backgroundColor == allBoxes[15].style.backgroundColor) {
                    return true;
                }
            }
        }
    }
}

var selected = null;
var bgColor;
for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", function () {
        if (selected == null) {
            selected = this;
        } else {
            bgColor = this.style.backgroundColor;
            this.style.backgroundColor = selected.style.backgroundColor;
            selected.style.backgroundColor = bgColor;
            selected = null;
        }

        if (checkColorsInColumns() || checkColorsInRows()) {
            setTimeout(function () {
                alert("You won!");
                window.location.reload();
            }, 300);
        }

    });
}

getColors();
giveColorsToBoxes();