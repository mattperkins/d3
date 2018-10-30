const data = [
 {width: 200, height: 100, fill: '#f5d443'},
 {width: 100, height: 60, fill: '#354'},
 {width: 50, height: 30, fill: '#44ff'}
]

const svg = d3.select("svg")

// join data to rects
const rects = svg.selectAll("rect") 
 .data(data)

// add attrs to rects already in the DOM
rects.attr('width', x => x.width )
 .attr('height', x => x.height )
 .attr('fill', x => x.fill )

// append the enter selection to DOM
rects.enter()
 .append("rect")
 .attr('width', x => x.width )
 .attr('height', x => x.height )
 .attr('fill', x => x.fill )