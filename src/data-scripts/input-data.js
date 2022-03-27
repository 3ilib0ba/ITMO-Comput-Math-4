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
            isFinite(currentY))
        {
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