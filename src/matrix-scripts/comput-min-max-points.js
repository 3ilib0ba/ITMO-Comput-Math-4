var minX;
var maxX;
var minY;
var maxY;

function initSizes() {
    minX = inputPoints[0].x;
    maxX = inputPoints[0].x;
    minY = inputPoints[0].y;
    maxY = inputPoints[0].y;

    let currentX, currentY;
    for (let i = 0; i < inputPoints.length; i++) {
        currentX = inputPoints[i].x;
        currentY = inputPoints[i].y;
        if (minX > currentX) {
            minX = currentX;
        }
        if (maxX < currentX) {
            maxX = currentX;
        }
        if (minY > currentY) {
            minY = currentY;
        }
        if (maxY < currentY) {
            maxY = currentY;
        }
    }

    console.log(minX);
    console.log(maxX);
    console.log(minY);
    console.log(maxY);
}