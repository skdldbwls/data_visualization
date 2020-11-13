var data = [
  {name: 'BATTERY	', value: 20.30, color: '#c1484f'},
  {name: 'THEFT', value: 19.89, color: '#d35d50'},
  {name: 'CRIMINAL DAMAGE', value: 12.09, color: '#e88d5d'},
  {name: 'ASSAULT', value: 8.88, color: '#f4c17c'},
  {name: 'DECEPTIVE PRACTICE', value: 6.73, color: '#fae8a4'},
  {name: 'other', value: 32.11, color: '#FBF8EF'}
];


//var data = [22785,392728];

var svg = d3.select(".pie")
    .append("svg")
    .attr("width", 100)
    .attr("height", 300)

var arc = d3.arc().innerRadius(20).outerRadius(35);

var pie = svg.selectAll("path")
    .data(d3.pie()(data))
    .enter()
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(60,50)")
    .style("fill", function (d, i) {
        return ['#3d84a8', "#abedd8"][i];
    })
    .attr('d', arc)

svg.data(d3.pie()([1]))
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(60,150)")
    .style("fill", '#abedd8')
    .attr('d', arc)

svg.data(d3.pie()([20.30,19.89,12.09,8.88,6.73,32.11]))
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(60,150)")
    .style("fill", '#3d84a8')
    .attr('d', arc)

//svg.append('text')
//    .attr('x', 34)
//    .attr('y', 100)
//    .text('< 2009 >')
//    .style('font-size', '12px')
//    .attr("font-family", "sans-serif")
//    .attr("fill", "dark gray")
