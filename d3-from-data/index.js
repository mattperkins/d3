const data = [
 {
  width: 200,
  height: 200,
  fill: 'purple'
 }
]

const svg = d3.select("svg")

svg.select('rect')
 .data()
 .attr('width', 200)
 .attr('height', 200)
 .attr('fill', 'pink')
