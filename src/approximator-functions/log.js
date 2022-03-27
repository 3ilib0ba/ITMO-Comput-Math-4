var logAnswers = [];

function logAppr() {
    logAnswers = new Array(2);

    logAnswers[1] =
        (inputPoints.length * CONSTANTS.y_ln_x_sum - CONSTANTS.ln_x_sum * CONSTANTS.y_sum)
        /
        (inputPoints.length * CONSTANTS.ln_x_ln_x_sum - Math.pow(CONSTANTS.ln_x_sum, 2));


    logAnswers[0] =
        CONSTANTS.y_sum / inputPoints.length
        -
        logAnswers[1] * CONSTANTS.ln_x_sum / inputPoints.length;

    console.log(logAnswers);
}

function outputLog() {
    document.getElementById("log-out").value = "";
    document.getElementById("log-out").value = logAnswers[0] + " + " + logAnswers[1] + "*ln(x)";

    for (let i in inputPoints) {
        drawPoint(4, inputPoints[i].x, logAnswers[0] + logAnswers[1]*Math.log(inputPoints[i].x), "white");
    }
}