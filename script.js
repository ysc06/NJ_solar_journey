
//dimensions
const margin = {top:60, right:40, bottom:50, left:60},
	  width = 800 - margin.left - margin.right,
	  height = 500 - margin.top - margin.bottom; 

// create SVG canvas 
const svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
