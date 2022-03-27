var width = 300;
var height = 300;
var svg = new Array(6);

function svgInit(){
    svg[0] = d3.select("#svg-container-linear")
        .append("svg").attr("width", width).attr("height", height);
    svg[1] = d3.select("#svg-container-quadratic")
        .append("svg").attr("width", width).attr("height", height);
    svg[2] = d3.select("#svg-container-third")
        .append("svg").attr("width", width).attr("height", height);
    svg[3] = d3.select("#svg-container-exponent")
        .append("svg").attr("width", width).attr("height", height);
    svg[4] = d3.select("#svg-container-log")
        .append("svg").attr("width", width).attr("height", height);
    svg[5] = d3.select("#svg-container-pow")
        .append("svg").attr("width", width).attr("height", height);

    for (let i = 0; i < 6; i++) {
        svg[i].append("line")
            .attr("x1", 0)
            .attr("y1", 150)
            .attr("x2", 300)
            .attr("y2", 150)
            .style("stroke", "rgb(255,0,0)")
            .style("stroke-width", 2);
        svg[i].append("line")
            .attr("x1", 150)
            .attr("y1", 0)
            .attr("x2", 150)
            .attr("y2", 300)
            .style("stroke", "rgb(255,0,0)")
            .style("stroke-width", 2);

        for (let point in inputPoints) {
            drawPoint(i, inputPoints[point].x, inputPoints[point].y);
        }
    }
}

function drawStartPoints() {
    for (let i = 0; i < 6; i++) {
        for (let point in inputPoints) {
            drawPoint(i, inputPoints[point].x, inputPoints[point].y, "green");
        }
    }
}

function drawPoint(currentSVG, x, y, color) {
    let svg = this.svg[currentSVG];

    svg.append("circle")
        .attr("r", 3)
        .attr("cx", transformX(x))
        .attr("cy", transformY(y))
        .attr("fill", color);
}

function transformX(value) {
    return 150 + (value * 140 / (maxX - minX));
}

function transformY(value) {
    return 150 - (value * 140 / (maxY - minY));
}


