


var margin = {top: 100, right: 75, bottom: 125, left: 50}
var width = 800 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var colors = ['#fef0d9','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#990000'];
// From ColorBrewer: http://colorbrewer2.org/#type=sequential&scheme=OrRd&n=7


var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);


var g = svg.append("g")
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.csv("data.json", function(d) {
  return {
    CONTACT_CARD_ID: d.id,
    AGE: d.age,
    RACE_CODE_CD: d.race,
    Contact_Type: d.type,
    Count:d.count
  }
}, function(error, data){
  // Simple error handling
  if(error) { 
    console.log(error);
  } else {
    createbarchart(data);
  };
});


function createbarchart(pol = data) {

  
  
 
};

