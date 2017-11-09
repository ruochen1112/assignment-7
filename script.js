


var margin = {top: 30, right: 20, bottom: 50, left: 30}
var width = 1000;
var height = 400;



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
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  var g = svg.append('g')
    .attr("transform", "translate(" + margin.left*2 + "," + margin.top*2 + ")");


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
    .attr("class", function(d) {
            if (d.Count > 500){
                return "bar high";
            } else {
                return "bar low";
            }

        })
    .attr("x", function(d) { return xScale(d.AGE); })
    .attr("y", 0)
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return yScale(d.Count); })

    svg.append("text")
    .attr("class", "lableText")
    .attr("y", 30)
    .attr("x", 550)             
    .style("text-anchor", "middle")
    .text("Age");

    svg.append("text")
    .attr("class", "lableText")
    .attr("transform", "rotate(-90)")
    .attr("y", 25)
    .attr("x", -250)
    .style("text-anchor", "middle")
    .text("Number of Contacts");

    g.selectAll(".dot")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("class","dotone")
        .attr("r",8)
        .attr("cx", 810)
        .attr('cy', 340)

    g.selectAll(".dot")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("class","dottwo")
        .attr("r",8)
        .attr("cx", 810)
        .attr('cy', 365);


    svg.append("text")
    .attr("class", "legendText")
    .attr("y", 405)
    .attr("x", 900)             
    .text("Higher than 500");

    svg.append("text")
    .attr("class", "legendText")
    .attr("y", 430)
    .attr("x", 900)             
    .text("Lower and Equal to 500");
     



                    
};


