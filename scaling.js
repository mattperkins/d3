var canvas = d3.select('body')
    
    var canvas = d3.select('.graphContainer')
     .append('svg')
     .attr('width', 500)
     .attr('height', 500);

function scaling(){
        var graphData = [10,400],
            w         = 400,
            h         = 400;
        var canvas = d3.select('.graphContainer')
        .append('svg')
        .attr('width', w)
        .attr('height',h);

        var graphBars = canvas.selectAll('rect')
        .data(graphData)
        .enter()
        .append('rect')
        .attr('fill', 'blue')
        .attr('width', function(d){
            return d;
        })
        .attr('height', 20)
        .attr('y', function(d,i){
            return i * 50;
        })
 }
