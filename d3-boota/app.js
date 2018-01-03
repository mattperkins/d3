var quotes = [
  {
    quote: "The future is now",
    year: 1999
  },
  {
    quote: "Failure is the gateway to success",
    year: 2016
  },
  {
    quote: "Everything is awesome",
    year: 2014
  }
];

var colors = {
  "1999": "tomato",
  "2016": "yellow",
  "2014": "lightgreen"
};

d3
  .select("#quotes")
  .style("list-style", "none")
  .selectAll("li")
  .data(quotes)
  .enter()
  .append("li")
  .text(d => {
    return d.quote;
  })
  .style("font-size", d => (d.quote.length < 20 ? "2em" : "1.6rem"))
  .style("background-color", d => colors[d.year]);
