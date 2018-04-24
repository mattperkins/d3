// comment in src in index.html

let dset = [80,100,56,120,180,30,40,120,160]

let svgWidth = 500, svgHeight=300, barPadding = 5
let barWidth = (svgWidth / dset.length)

let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

let barChart = svg.selectAll("rect")
    .data(dset)
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
    .data(dset)
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