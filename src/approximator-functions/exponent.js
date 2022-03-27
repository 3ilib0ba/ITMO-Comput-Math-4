var exponentAnswers = [];

function exponentAppr() {
    exponentAnswers = new Array(2);

    exponentAnswers[1] =
        (inputPoints.length * CONSTANTS.x_ln_y_sum - CONSTANTS.x1_sum * CONSTANTS.ln_y_sum)
        /
        (inputPoints.length * CONSTANTS.x2_sum - Math.pow(CONSTANTS.x1_sum, 2));


    exponentAnswers[0] =
        CONSTANTS.ln_y_sum / inputPoints.length
        -
        exponentAnswers[1] * CONSTANTS.x1_sum / inputPoints.length;

    console.log(exponentAnswers);
}

function outputExponent() {
    document.getElementById("exponent-out").value = "";
    document.getElementById("exponent-out").value = "e^(" + exponentAnswers[0] + " + " + exponentAnswers[1] + "*x)";

    for (let i in inputPoints) {
        drawPoint(3, inputPoints[i].x, Math.exp(exponentAnswers[0] + exponentAnswers[1]*inputPoints[i].x), "white");
    }
}