var CONSTANTS = {
    x1_sum: 0,
    x2_sum: 0,
    x3_sum: 0,
    x4_sum: 0,
    x5_sum: 0,
    x6_sum: 0,

    y_sum: 0,
    xy_sum: 0,
    x2y_sum: 0,
    x3y_sum: 0,
    x4y_sum: 0,

    ln_x_sum: 0,
    ln_y_sum: 0,
    ln_x_ln_x_sum: 0,
    ln_x_ln_y_sum: 0,
    x_ln_y_sum: 0,
    y_ln_x_sum: 0,
}

function fillConstants() {
    CONSTANTS.x1_sum = 0;
    CONSTANTS.x2_sum = 0;
    CONSTANTS.x3_sum = 0;
    CONSTANTS.x4_sum = 0;
    CONSTANTS.x5_sum = 0;
    CONSTANTS.x6_sum = 0;
    CONSTANTS.y_sum = 0;
    CONSTANTS.xy_sum = 0;
    CONSTANTS.x2y_sum = 0;
    CONSTANTS.x3y_sum = 0;
    CONSTANTS.x4y_sum = 0;
    CONSTANTS.ln_x_sum = 0;
    CONSTANTS.ln_y_sum = 0;
    CONSTANTS.ln_x_ln_x_sum = 0;
    CONSTANTS.ln_x_ln_y_sum = 0;
    CONSTANTS.x_ln_y_sum = 0;
    CONSTANTS.y_ln_x_sum = 0;

    for (let i in inputPoints) {
        CONSTANTS.x1_sum += inputPoints[i].x;
        CONSTANTS.x2_sum += Math.pow(inputPoints[i].x, 2);
        CONSTANTS.x3_sum += Math.pow(inputPoints[i].x, 3);
        CONSTANTS.x4_sum += Math.pow(inputPoints[i].x, 4);
        CONSTANTS.x5_sum += Math.pow(inputPoints[i].x, 5);
        CONSTANTS.x6_sum += Math.pow(inputPoints[i].x, 6);

        CONSTANTS.y_sum += inputPoints[i].y;
        CONSTANTS.xy_sum += inputPoints[i].x * inputPoints[i].y;
        CONSTANTS.x2y_sum += Math.pow(inputPoints[i].x, 2) * inputPoints[i].y;
        CONSTANTS.x3y_sum += Math.pow(inputPoints[i].x, 3) * inputPoints[i].y;
        CONSTANTS.x4y_sum += Math.pow(inputPoints[i].x, 4) * inputPoints[i].y;

        if (inputPoints[i].x > 0 && inputPoints[i].y > 0) {
            CONSTANTS.ln_x_sum += Math.log(inputPoints[i].x);
            CONSTANTS.ln_y_sum += Math.log(inputPoints[i].y);
            CONSTANTS.ln_x_ln_x_sum += Math.pow(Math.log(inputPoints[i].x), 2);
            CONSTANTS.ln_x_ln_y_sum += Math.log(inputPoints[i].x) * Math.log(inputPoints[i].y);
            CONSTANTS.x_ln_y_sum += inputPoints[i].x * Math.log(inputPoints[i].y);
            CONSTANTS.y_ln_x_sum += inputPoints[i].y * Math.log(inputPoints[i].x);
        }
    }
}

function outputConstants() {
    let output = document.getElementById("constants");
    output.value = "";

    output.value += "sum of X = " + CONSTANTS.x1_sum + "\n";
    output.value += "sum of X^2 = " + CONSTANTS.x2_sum + "\n";
    output.value += "sum of X^3 = " + CONSTANTS.x3_sum + "\n";
    output.value += "sum of X^4 = " + CONSTANTS.x4_sum + "\n";
    output.value += "sum of X^5 = " + CONSTANTS.x5_sum + "\n";
    output.value += "sum of X^6 = " + CONSTANTS.x6_sum + "\n";
    output.value += "sum of Y = " + CONSTANTS.y_sum + "\n";
    output.value += "sum of X*Y = " + CONSTANTS.xy_sum + "\n";
    output.value += "sum of X^2*Y = " + CONSTANTS.x2y_sum + "\n";
    output.value += "sum of X^3*Y = " + CONSTANTS.x3y_sum + "\n";
    output.value += "sum of X^4*Y = " + CONSTANTS.x4y_sum + "\n";
}