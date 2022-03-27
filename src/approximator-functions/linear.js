var linearAnswers = [];

function linearAppr() {
    let matrix = {
        size: 2,
        matrix: []
    }

    matrix.matrix = new Array(2);
    matrix.matrix[0] = new Array(3);
    matrix.matrix[1] = new Array(3);

    matrix.matrix[0][0] = CONSTANTS.x2_sum;
    matrix.matrix[0][1] = CONSTANTS.x1_sum;
    matrix.matrix[0][2] = CONSTANTS.xy_sum;
    matrix.matrix[1][0] = CONSTANTS.x1_sum;
    matrix.matrix[1][1] = inputPoints.length;
    matrix.matrix[1][2] = CONSTANTS.y_sum;

    linearAnswers = methodGauss(matrix);

    console.log(linearAnswers);
}

function outputLinear() {
    document.getElementById("linear-out").value = "";
    document.getElementById("linear-out").value = linearAnswers[0] + "*x + " + linearAnswers[1];

    for (let i in inputPoints) {
        drawPoint(0, inputPoints[i].x, linearAnswers[0]*inputPoints[i].x+linearAnswers[1], "white");
    }
}