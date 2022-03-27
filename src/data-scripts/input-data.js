let inputPoints = [];

function getPoints() {
    let text = "";
    let all_X = document.getElementsByName("X_input");
    let all_Y = document.getElementsByName("Y_input");

    let currentX, currentY;

    for (let n = 0; n < 11; n++) {
        currentX = all_X[n].value;
        currentY = all_Y[n].value;
        currentX = Number(currentX);
        currentY = Number(currentY);

        console.log(currentX + ", " + currentY);
        if (isFinite(currentX) &&
            isFinite(currentY)) {
            const point = new Point(currentX, currentY);
            inputPoints.push(point);
            text += "x = " + point.x + ", y = " + point.y + "\n";
        }
    }
}

function outputPoints() {
    let text = "";
    for (let i in inputPoints) {
        text += inputPoints[i].toString() + "\n";
    }

    document.getElementById("data-inputting").value = text;
}

function deleteLogs() {
    inputPoints = [];
    document.getElementById("data-inputting").value = "";
}

function inputFromFile(input) {
    let file = input.files[0];

    console.log(file.name);

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        let results = reader.result.replaceAll("\r", "").split("\n");
        console.log(results);

        let strokes = new Array(11);
        for (let i = 0; i < 11; i++) {
            strokes[i] = new Array(2);
            strokes[i] = results[i].split(" ");
        }
        console.log(strokes);

        let all_X = document.getElementsByName("X_input");
        let all_Y = document.getElementsByName("Y_input");

        for (let n = 0; n < 11; n++) {
            all_X[n].value = strokes[n][0];
            all_Y[n].value = strokes[n][1];
        }

    }


}

function computAll() {
    deleteLogs();

    getPoints();
    outputPoints();

    initSizes();
    drawStartPoints();

    fillConstants();
    outputConstants();

    linearAppr();
    outputLinear();

    quadraticAppr();
    outputQuadratic();

    thirdAppr();
    outputThird();

    exponentAppr();
    outputExponent();

    logAppr();
    outputLog();

    powAppr();
    outputPow();
}