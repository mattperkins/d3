console.log("hello, world!");

d3.json("./data.json", function(lemon) {
  var canvas = d3
    .select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  canvas
    .selectAll("rect")
    .data(lemon)
    .enter()
    .append("rect")
    .attr("width", function(d) {
      return d.age * 10;
    })
    .attr("height", 48)
    .attr("y", function(d, index) {
      return index * 50;
    })
    .attr("fill", "skyblue");

  canvas
    .selectAll("text")
    .data(lemon)
    .enter()
    .append("text")
    .attr("fill", "#333")
    .attr("y", function(d, index) {
      return index * 48 + 33;
    })
    .text(function(d) {
      return d.name;
    })
    .style("font-size", "20px");
});
