var sum = [ 26667,29453,14316,43203,39450]
var color = ['#173B0B','#088A29', '#088A08','#04B404','#01DF01']
var svg = d3.select(".population")
    .append("svg")
    .attr('width', 650)
    .attr('height', 650);


svg.append('text')
        .attr('x', 180)
        .attr('y', 40)
        .text("<lowest 5 population density area>")
        .style('font-weight', 'bolder')
        .style('font-size', '20px')
        .attr("font-family", "sans-serif")
        .attr("fill", "gray")

svg.append('text')
        .attr('x', 1)
        .attr('y', 150)
        .text("Number of occurrences")
        .style('font-size', '12px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "gray")
        .attr("transform", "translate(-70,350) rotate(-90)")

var xAxis = svg.append("line")
      .attr("x1", 100)
      .attr("y1", 500)
      .attr("x2", 600)
      .attr("y2", 500)
      .style("stroke", "black")
      .style("stroke-width", 0.6)

var yAxis = svg.append("line")
      .attr("x1", 100)
      .attr("y1", 500)
      .attr("x2", 100)
      .attr("y2", 70)
      .style("stroke", "black")
      .style("stroke-width", 0.6)

svg.append('text')
        .attr('x', 75)
        .attr('y', 80)
        .text("high")
        .style('font-size', '10px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "gray")

svg.append('text')
        .attr('x', 75)
        .attr('y', 500)
        .text("low")
        .style('font-size', '10px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "gray")

svg.append('text')
        .attr('x', 290)
        .attr('y', 540)
        .text("Community Area Num")
        .style('font-weight', 'bolder')
        .style('font-size', '10px')
        .attr("font-family", "sans-serif")
        .attr("fill", "gray")

svg.append('text')
      .attr('x', 160)
      .attr('y', 520)
      .text("50")
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .attr("font-family", "sans-serif")
      .attr("fill", 'black')
      //.attr('transform', 'translate(-220,240) rotate(-15)')

svg.append('text')
      .attr('x', 250)
      .attr('y', 520)
      .text("54")
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .attr("font-family", "sans-serif")
      .attr("fill", 'black')
      //.attr('transform', 'translate(-120,235) rotate(-15)')

svg.append('text')
      .attr('x', 335)
      .attr('y', 520)
      .text("55")
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .attr("font-family", "sans-serif")
      .attr("fill", 'black')
      //.attr('transform', 'translate(10,225) rotate(-15)')

svg.append('text')
      .attr('x', 430)
      .attr('y', 520)
      .text("51")
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .attr("font-family", "sans-serif")
      .attr("fill", 'black')

svg.append('text')
      .attr('x', 515)
      .attr('y', 520)
      .text("76")
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .attr("font-family", "sans-serif")
      .attr("fill", 'black')


for (var i = 0; i < 5; i++) {
      svg.append('rect')
          .attr('x', 150 + 90 * i)
          .attr('y', 500 - (sum[i]/550))
          .attr('width', 30)
          .attr('height', sum[i]/550)
          .attr('fill', 'gray')
          .style("fill", function () {
                return color[i]
        });
}