// comment in src in index.html

let dset2 = [1,3,5,7,9]

let svgWidth = 500, svgHeight=300, barPadding = 5
let barWidth = (svgWidth / dset2.length)

let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

let yScale = d3.scaleLinear()
    .domain([0,d3.max(dset2)])
    .range([0, svgHeight])

let barChart = svg.selectAll("rect")
    .data(dset2)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d
    })
    .attr("height", function(d) {
        return d
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d,i) {
        let translate = [barWidth * i, 0]
        return "translate("+ translate +")"
    })

let label = svg.selectAll("text")
    .data(dset2)
    .enter()
    .append("text")
    .text(function(d){
        return d
    })
    .attr("y", function(d, i){
        return svgHeight -d -2
    })
    .attr("x", function(d,i){
        return barWidth * i
    })
    .attr("fill", "#f33")