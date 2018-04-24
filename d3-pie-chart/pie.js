
let data = [
    {"category" : "donations", "percentage" : 40.11},
    {"category" : "runner", "percentage" : 56.96},
    {"category" : "charities", "percentage" : 71.74},
]

let svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2

let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

// Create group element to hold pie chart
let g = svg.append("g")
    .attr("transform", "translate( " + radius + "," + radius +" )")

let color = d3.scaleOrdinal(d3.schemeCategory10)

let pie = d3.pie().value(function(d) {
    return d.percentage
})

let path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

let arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")

arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) {
        return color(d.data.percentage)
    })

let label = svg.selectAll("text")
    .data(pie(data))

