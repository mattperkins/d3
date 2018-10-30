const data = [
 {width: 200, height: 100, fill: '#f5d443'},
 {width: 100, height: 60, fill: '#354'},
 {width: 50, height: 30, fill: '#44ff'}
]

const svg = d3.select("svg")

const rect = svg.selectAll("rect") 
 .data(data)
 .attr('width', x => x.width )
 .attr('height', x => x.height )
 .attr('fill', x => x.fill )
