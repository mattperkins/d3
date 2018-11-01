const cy = 300;
// select svg container first
const svg = d3.select("svg");

toggleCol = (function() {
  // var currentCol = "white"

  return function() {
    //  currentCol = currentCol == "white" ? "red" : "white"
    d3.select(this).style("stroke", "#111");
  };
})();

d3.json("fakeData.json").then(data => {
  const circs = svg.selectAll("circle").data(data);

  // add attrs to circs already in DOM (if any exist)
  circs
    .attr("cy", cy)
    .attr("cx", d => d.distance)
    .attr("r", d => d.radius)
    .attr("fill", d => d.fill);

  // append the enter selection to DOM (add to existing)
  circs
    .enter()
    .append("circle")
    .attr("cy", cy)
    .attr("cx", d => d.distance)
    .attr("r", d => d.radius)
    .attr("fill", d => d.fill)
    .on("click", toggleCol);
});
