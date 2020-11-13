// pie-chart-2018.js
var width = 300;
var height = 300;
var data = [
  {name: 'THEFT', value: 24.33, color: '#c1484f'},
  {name: 'BATTERY', value: 18.57, color: '#d35d50'},
  {name: 'CRIMINAL DAMAGE', value: 10.37, color: '#e88d5d'},
  {name: 'ASSAULT', value: 7.61, color: '#f4c17c'},
  {name: 'DECEPTIVE PRACTICE', value: 7.28, color: '#fae8a4'},
  {name: 'other', value: 31.84, color: '#FBF8EF'}
];


var arc = d3.arc().innerRadius(50).outerRadius(Math.min(width, height) / 3);
// .arc() 새로운 기본값의 아치(호) 생성
// .innerRadius() 안쪽 반지름 값, 0이면 완전한 원이되고 값이 있으면 도넛 형태가 됩니다.
// .outerRadius() 바깥쪽 반지름값

var arcLabel = (() => {
  var radius = Math.min(width, height) / 2 * 0.5;
  return d3.arc().innerRadius(radius).outerRadius(radius);
})();
// 라벨이 위치할 반지름 값을 설정합니다.

var pie = d3.pie()
  // 새로운 기본값의 파이 모양의 생성
  .sort((a, b) => a.value - b.value)
  // data의 value 큰값 > 작은값 순으로 정렬합니다. ex. 반대 순서는 a.value - b.value
  .value(d => d.value);

var arcs = pie(data);

var svg = d3.select('.pie2').append('svg').style('width', width).style('height', height)
  .attr('text-anchor', 'middle')
  .style('font-size', '12px sans-serif');


svg.append('text')
      .attr('x', 150)
      .attr('y', 150)
      .text('2018')
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
