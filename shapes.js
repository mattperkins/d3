// comment in src in index.html

let svgWidth = 600, svgHeight = 500

let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container")

let line = svg.append("line")
    .attr("x1", 100)
    .attr("x2", 500)
    .attr("y1", 50)
    .attr("y2", 50)
    .attr("stroke", "red")
    .attr("stroke-width", "5")

let rect = svg.append("rect")
    .attr("x", 100)
    .attr("y", 115)
    .attr("width", 200)
    .attr("height", 100)
    .attr("fill", "#9895ff")

let circle = svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 360)
    .attr("r", 80)
    .attr("fill", "#7ce8d3")