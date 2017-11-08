


var margin = {top: 20, right: 5, bottom: 0, left: 40}
var width = 1100;
var height = 500;




d3.json("data.json", function(error, data) {

    dataset = data;
    dataset.sort(function(x, y){
   return d3.ascending(x.AGE, y.AGE);
});
    createbarchart();

});




function createbarchart() {

    var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom);

  var g = svg.append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


     var xScale = d3.scaleBand()
    .domain(dataset.map(function(d) { return d.AGE; }))
    .rangeRound([0, width])
    .padding(0.1);

    var yScale = d3.scaleLinear()
    .domain([0,d3.max(dataset, function(d) { return d.Count; })])
    .rangeRound([0,height]);
  
    g.append("g")
      .attr("class", "axis axis--x")
      .call(d3.axisTop(xScale));

    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(yScale));

    g.selectAll(".bar")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class","bar")
    .attr("x", function(d) { return xScale(d.AGE); })
    .attr("y", function(d) { return yScale(d.Count); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height-yScale(d.Count); })



};

