// comment in src in index.html

// d3.axisTop()
// d3.axisRight()
// d3.axisBottom()
// d3.axisLeft()

let dset3 = [100,300,500,700,900]

let svgWidth = 500, svgHeight=300

let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

let xScale = d3.scaleLinear()
    .domain([0,d3.max(dset3)])
    .range([0, svgWidth])

let yScale = d3.scaleLinear()
    .domain([0,d3.max(dset3)])
    .range([0, svgHeight])

let x_axis = d3
    .axisBottom()
    .scale(xScale)

let y_axis = d3
    .axisLeft()
    .scale(yScale)

svg.append("g") // append group element 
    .attr("transform", "translate(50,10)")
    .call(y_axis)

let xAxisTranslate = svgHeight - 20

svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate + ")")
    .call(x_axis)

