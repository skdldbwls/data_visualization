// pie-chart-2011.js
var width = 300;
var height = 300;
var data = [
  {name: 'THEFT	', value: 21.36, color: '#c1484f'},
  {name: 'BATTERY', value: 17.18, color: '#d35d50'},
  {name: 'NARCOTICS', value: 10.97, color: '#e88d5d'},
  {name: 'CRIMINAL DAMAGE', value: 10.61, color: '#f4c17c'},
  {name: 'BURGLARY', value: 7.57, color: '#fae8a4'},
  {name: 'other', value: 32.31, color: '#FBF8EF'}
];

var arc = d3.arc().innerRadius(50).outerRadius(Math.min(width, height) / 3);

var arcLabel = (() => {
  var radius = Math.min(width, height) / 2 * 0.5;
  return d3.arc().innerRadius(radius).outerRadius(radius);
})();

var pie = d3.pie()
    .sort((a, b) => a.value - b.value)
    .value(d => d.value);

var arcs = pie(data);

var svg = d3.select('.pie').append('svg').style('width', width).style('height', height)
  .attr('text-anchor', 'middle')
    .style('font-size', '12px sans-serif');


svg.append('text')
        .attr('x', 150)
        .attr('y', 150)
        .text('2011')
        .style('font-size', '12px')
        .style('font-weight', 'bolder')
        .attr("font-family", "sans-serif")
        .attr("fill", "dark gray")


var g = svg.append('g')
  .attr('transform', `translate(${width/2}, ${height/2})`);

g.selectAll('path')
  .data(arcs)
  .enter().append('path')
  .attr('fill', d => d.data.color)
    .attr('stroke', 'white')
    .attr('d', arc)
  .append('title')
    .text(d => `${d.data.name}: ${d.data.value}`);


var text = g.selectAll('text')
  .data(arcs)
  .enter().append('text')
    .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
    .attr('dy', '0.35em');


text.append('tspan')
  .attr('x', 0)
  .attr('y', '-0.7em')
  .style('font-weight', 'bold')
  .style('font-size', '12px')
  .text(d => d.data.name)


text.filter(d => (d.endAngle - d.startAngle > 0.25)).append('tspan')
  .attr('x', 0)
  .attr('y', '0.7em')
  .attr('fill-opacity', 0.7)
  .style('font-size', '9px')
  .text(d => d.data.value);


svg.node();
