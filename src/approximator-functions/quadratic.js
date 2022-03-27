var quadraticAnswers = [];

function quadraticAppr() {
    let matrix = {
        size: 3,
        matrix: []
    }

    matrix.matrix = new Array(3);
    matrix.matrix[0] = new Array(4);
    matrix.matrix[1] = new Array(4);
    matrix.matrix[2] = new Array(4);

    matrix.matrix[0][0] = inputPoints.length;
    matrix.matrix[0][1] = CONSTANTS.x1_sum;
    matrix.matrix[0][2] = CONSTANTS.x2_sum;
    matrix.matrix[0][3] = CONSTANTS.y_sum;
    matrix.matrix[1][0] = CONSTANTS.x1_sum;
    matrix.matrix[1][1] = CONSTANTS.x2_sum;
    matrix.matrix[1][2] = CONSTANTS.x3_sum;
    matrix.matrix[1][3] = CONSTANTS.xy_sum;
    matrix.matrix[2][0] = CONSTANTS.x2_sum;
    matrix.matrix[2][1] = CONSTANTS.x3_sum;
    matrix.matrix[2][2] = CONSTANTS.x4_sum;
    matrix.matrix[2][3] = CONSTANTS.x2y_sum;

    quadraticAnswers = methodGauss(matrix);

    console.log(quadraticAnswers);
}

function outputQuadratic() {
    document.getElementById("quadratic-out").value = "";
    document.getElementById("quadratic-out").value =
        quadraticAnswers[2] + "*x^2 + " + quadraticAnswers[1] + "*x + " + quadraticAnswers[0];

    for (let i in inputPoints) {
        drawPoint(1,
            inputPoints[i].x,
            quadraticAnswers[2]*inputPoints[i].x*inputPoints[i].x+quadraticAnswers[1]*inputPoints[i].x+quadraticAnswers[0],
            "white");
    }
}