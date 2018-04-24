// basics
// d3
//     .select('body')
//     .append('p')
//     .text('this is text what i done added!!')
//     .style('color', 'red')
//     .attr('class', 'myClass')

let dataset = [1,2,3,4,5]
d3
    .select('body')
    .selectAll('p')
    .data(dataset)
    .enter() // method takes data items 1 by 1 to perform further operations on them
    .append('p') // appends paragraph for each data element
    .text('adding text for each data element from dataset array')
    //.text(function(d) {return d}) // return the values of the array

