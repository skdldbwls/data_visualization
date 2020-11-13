var data = [14242, 7679, 13616, 7512, 6193, 5487, 18155, 24572]

var svg = d3.select(".SEXUAL_time")
  .append("svg")
  .attr("width", 1200)
  .attr("height", 400)
  .attr('transform', 'translate(300,0)')

var xAxis = svg.append("line")
        .attr("x1", 50)
        .attr("y1", 330)
        .attr("x2", 730)
        .attr("y2", 330)
        .style("stroke", "black")
        .style("stroke-width", 1.0)

    //y
var yAxis = svg.append("line")
        .attr("x1", 50)
        .attr("y1", 330)
        .attr("x2", 50)
        .attr("y2", 20)
        .style("stroke", "black")
        .style("stroke-width", 1.0)

for (var i = 0; i < 6; i++) {
          svg.append("line") // y 눈금
              .attr("x1", 50)
              //y축 50만큼 차이나게
              .attr("y1", 330 - i * 50)
              .attr("x2", 55)
              .attr("y2", 330 - i * 50)
              .style("stroke", "black")
              .style("stroke-width", 0.6)
              .attr('transform', 'translate(0,-25)')


        }

    //x축 label
svg.append('text')
          .attr('x', 350)
          .attr('y', 370)
          .text("Time")
          .style('font-size', '14px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")

svg.append('text')
          .attr('x', 25)
          .attr('y', 13)
          .text("Crime incidence")
          .style('font-size', '14px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")
          .attr("transform", "translate(12,240) rotate(-90)")

// x시간 추10
svg.append('text') // x 레전드
      .attr('x', 20)
      .attr('y', 355)
      .text("00:00 - 02:59")
      .style('font-size', '10px')
      .attr("font-family", "sans-serif")
      .attr("fill", "gray")

svg.append('text') // x 레전드
      .attr('x', 90 + 20)
      .attr('y', 355)
      .text("03:00 - 05:59")
      .style('font-size', '10px')
      .attr("font-family", "sans-serif")
      .attr("fill", "gray")

svg.append('text') // x 레전드
      .attr('x', 90*2 + 20)
      .attr('y', 355)
      .text("06:00 - 08:59")
      .style('font-size', '10px')
      .attr("font-family", "sans-serif")
      .attr("fill", "gray")


svg.append('text') // x 레전드
      .attr('x', 90*3 + 20)
      .attr('y', 355)
      .text("09:00 - 11:59")
      .style('font-size', '10px')
      .attr("font-family", "sans-serif")
      .attr("fill", "gray")

svg.append('text') // x 레전드
      .attr('x', 90*4 + 20)
      .attr('y', 355)
      .text("12:00 - 14:59")
      .style('font-size', '10px')
      .attr("font-family", "sans-serif")
      .attr("fill", "gray")

svg.append('text') // x 레전드
      .attr('x', 90*5 + 20)
      .attr('y', 355)
      .text("15:00 - 17:59")
      .style('font-size', '10px')
      .attr("font-family", "sans-serif")
      .attr("fill", "gray")

svg.append('text') // x 레전드
      .attr('x', 90*6 + 20)
      .attr('y', 355)
      .text("18:00 - 20:59")
      .style('font-size', '10px')
      .attr("font-family", "sans-serif")
      .attr("fill", "gray")


svg.append('text') // x 레전드
        .attr('x', 90*7 + 20)
        .attr('y', 355)
        .text("21:00 - 23:59")
        .style('font-size', '10px')
        .attr("font-family", "sans-serif")
        .attr("fill", "gray")

data.forEach((d, i) => {

          if (i == 7) {
            return;
          }

          svg.append("line") // x 눈금
              .attr("x1", (i + 1) * 90)
              .attr("y1", 330)
              .attr("x2", (i + 1) * 90)
              .attr("y2", 340)
              .style("stroke", "black")
              .style("stroke-width", 0.6)
              .attr('transform', 'translate(50,0)')

//          svg.append('text') // x 레전드
//              .attr('x', i * 90 + 35)
//              .attr('y', 355)
//              .text(i + 2011)
//              .style('font-size', '14px')
//              .attr("font-family", "sans-serif")
//              .attr("fill", "gray")


  })



data.forEach((d, i) => {

          if (i == 7) {
            var rect = svg.append('rect')
                .attr('x', 590)
                .attr('y', 20)
                .attr('width', 90)
                .attr('height', 310)
                .style("fill", "#F6CEEC")
                .style("opacity", 0.4);
              return;
          }

          var line = svg.append("line")
              .attr("x1", i * 90)
              .attr("y1", 300 - (data[i]/100))
              .attr("x2", (i + 1) * 90)
              .attr("y2", 300 - (data[i+1]/100))
              .attr("transform", "translate(50,25)")
              .style("stroke", "#FA58AC")
              .style("stroke-width", 3)

          var circle = svg.append('circle')
              .attr('cx', (i + 1) * 90)
              .attr('cy', (300 - data[i + 1]/100))
              .attr('r', 3)
              .attr("transform", "translate(50,25)")
              .style('fill', '#B40431')
})
