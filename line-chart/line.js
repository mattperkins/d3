// API to fetch historical data of Bitcoin Price Index
const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01'

// Loading data from API when DOM content has been loaded
document.addEventListener("DOMContentLoaded", function(event) {
    fetch(api)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let parsedData = parseData(data)
            drawChart(parsedData)
        })
        .catch(function(err){
            console.log(err)
        })
})

// Parse data into key-value pairs
// @param {object} data object containing historical data of BPI
function parseData(data) {
    let arr = []
    for(var i in data.bpi) {
        arr.push({
            date: new Date(i), // date
            value: +data.bpi[i] // convert string to number
        })
    }
    return arr
}

//  creates a chart using D3
// @params {object} data object containing historical data of BPI

function drawChart(data) {
    let svgWidth=600, svgHeight=400
    let margin = { top:20, right: 20, bottom: 30, left: 50}
    let width = svgWidth - margin.left - margin.right
    let height = svgHeight - margin.top - margin.bottom

    let svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight)

    let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
    let x = d3.scaleTime()
        .rangeRound([0,width])
    let y = d3.scaleLinear()
        .rangeRound([height, 0])

    let line = d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.date) })
        x.domain(d3.extend(data, function(d) {return d.date }))
        y.domain(d3.extend(data, function(d) {return d.date }))

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axidBottom(x))
        .select(".domain")
        .remove()

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-amchor", "end")
        .attr("Price ($)")

    a.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line)
}

