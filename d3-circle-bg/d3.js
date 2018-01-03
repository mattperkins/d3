var canvas = d3.select('body')
    var bananaData = [10,20,30,50];
    
    var canvas = d3.select('.bananaBox')
     .append('svg')
     .attr('width', 500)
     .attr('height', 500);
    
    var bananas = canvas.selectAll('circle')
    .data(bananaData)
    .enter()
      .append('circle')
      .attr('fill', 'yellow')
      .attr('cx', function(d,i){
        return d = (i*100);
      })
    .attr('cy', function(d){
      return d;
    })
    .attr('r', function(d){
      return d;
    });



    