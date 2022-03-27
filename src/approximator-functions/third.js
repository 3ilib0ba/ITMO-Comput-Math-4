var thirdAnswers = [];

function thirdAppr() {
    let matrix = {
        size: 4,
        matrix: []
    }

    matrix.matrix = new Array(4);
    matrix.matrix[0] = new Array(5);
    matrix.matrix[1] = new Array(5);
    matrix.matrix[2] = new Array(5);
    matrix.matrix[3] = new Array(5);

    matrix.matrix[0][0] = inputPoints.length;
    matrix.matrix[0][1] = CONSTANTS.x1_sum;
    matrix.matrix[0][2] = CONSTANTS.x2_sum;
    matrix.matrix[0][3] = CONSTANTS.x3_sum;
    matrix.matrix[0][4] = CONSTANTS.y_sum;

    matrix.matrix[1][0] = CONSTANTS.x1_sum;
    matrix.matrix[1][1] = CONSTANTS.x2_sum;
    matrix.matrix[1][2] = CONSTANTS.x3_sum;
    matrix.matrix[1][3] = CONSTANTS.x4_sum;
    matrix.matrix[1][4] = CONSTANTS.xy_sum;

    matrix.matrix[2][0] = CONSTANTS.x2_sum;
    matrix.matrix[2][1] = CONSTANTS.x3_sum;
    matrix.matrix[2][2] = CONSTANTS.x4_sum;
    matrix.matrix[2][3] = CONSTANTS.x5_sum;
    matrix.matrix[2][4] = CONSTANTS.x2y_sum;

    matrix.matrix[3][0] = CONSTANTS.x3_sum;
    matrix.matrix[3][1] = CONSTANTS.x4_sum;
    matrix.matrix[3][2] = CONSTANTS.x5_sum;
    matrix.matrix[3][3] = CONSTANTS.x6_sum;
    matrix.matrix[3][4] = CONSTANTS.x3y_sum;

    thirdAnswers = methodGauss(matrix);

    console.log(thirdAnswers);
}

function outputThird() {
    document.getElementById("third-out").value = "";
    document.getElementById("third-out").value =
        thirdAnswers[3] + "*x^3 + " + thirdAnswers[2] + "*x^2 + " + thirdAnswers[1] + "*x^1 + " + thirdAnswers[0];

    for (let i in inputPoints) {
        drawPoint(2,
            inputPoints[i].x,
            thirdAnswers[3]*Math.pow(inputPoints[i].x, 3) + thirdAnswers[2]*Math.pow(inputPoints[i].x, 2)
              +thirdAnswers[1]*Math.pow(inputPoints[i].x, 1) + thirdAnswers[0],
            "white");
    }
}