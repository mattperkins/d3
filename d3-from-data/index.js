const data = [
 {
  width: 200,
  height: 150,
  fill: 'yellow'
 }
]
const svg = d3.select('svg')
 
const rect = svg.select('rect')
 .data(data)
 .attr('width', (x)=>{ return x.width })
 .attr('height', (x)=>{ return x.height })
 .attr('fill', (x)=>{ return x.fill })
