const data = [
 {
  width: 200,
  height: 150,
  fill: '#f5d443'
 }
]

let svg = d3.select("svg").append("rect")
 
 .data(data)
 .attr('width', x => x.width )
 .attr('height', x => x.height )
 .attr('fill', x => x.fill )
