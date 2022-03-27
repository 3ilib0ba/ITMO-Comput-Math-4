var powAnswers = [];

function powAppr() {
    powAnswers = new Array(2);

    powAnswers[1] = 
        (inputPoints.length * CONSTANTS.ln_x_ln_y_sum - CONSTANTS.ln_x_sum * CONSTANTS.ln_y_sum)
        /
        (inputPoints.length * CONSTANTS.ln_x_ln_x_sum - Math.pow(CONSTANTS.ln_x_sum, 2))


    powAnswers[0] = Math.exp(
        CONSTANTS.ln_y_sum / inputPoints.length
        -
        powAnswers[1] * CONSTANTS.ln_x_sum / inputPoints.length
    );

    console.log(powAnswers);
}

function outputPow() {
    document.getElementById("pow-out").value = "";
    document.getElementById("pow-out").value = powAnswers[0] + " * x^" + powAnswers[1];

    for (let i in inputPoints) {
        drawPoint(5, inputPoints[i].x, Math.pow(inputPoints[i].x, powAnswers[1])*powAnswers[0], "white");
    }
}