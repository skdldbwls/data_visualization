var data = [1850,970,577,971,555,938,1380,831,512,386,
 1189,967,486,601,1403,174,2937,632,305,
 380,661,187,1333,413,800,323,2228,1687,
 175,261,1518,4545,395,1030,747,2392,401,
 226,185,1198,751,364,2664,223,1768,1824,
 1521,210,819,2212,617,2222,2065,402,252,
 1507,1452,2057,399,364,1277,963,338,189,
 134,550,161,185,88,65,118,242,267,525,191,517,284]
var mean = 890.077922077922

var svg = d3.select(".population_violence")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 650)
    .attr('transform', 'translate(300,0)')

svg.append('text')
    .attr('x', 350)
    .attr('y', 40)
    .text("< violence crime >")
    .style('font-weight', 'bolder')
    .style('font-size', '20px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")

var xAxis = svg.append("line")
        .attr("x1", 50)
        .attr("y1", 570)
        .attr("x2", 850)
        .attr("y2", 570)
        .style("stroke", "black")
        .style("stroke-width", 1.0)

    //y
var yAxis = svg.append("line")
        .attr("x1", 50)
        .attr("y1", 570)
        .attr("x2", 50)
        .attr("y2", 125)
        .style("stroke", "black")
        .style("stroke-width", 1.0)


    //x축 label
svg.append('text')
          .attr('x', 350)
          .attr('y', 590)
          .text("population density")
          .style('font-size', '14px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")




svg.append('text')
          .attr('x', 23)
          .attr('y', 135)
          .text("high")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")

svg.append('text')
          .attr('x', 28)
          .attr('y', 565)
          .text("low")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")

svg.append('text')
        .attr('x', 50)
        .attr('y', 585)
        .text("high")
        .style('font-size', '10px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "gray")

svg.append('text')
        .attr('x', 830)
        .attr('y', 585)
        .text("low")
        .style('font-size', '10px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "gray")

//y축
svg.append('text')
          .attr('x', 1)
          .attr('y', 150)
          .text("Number of occurrences")
          .style('font-size', '14px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")
          .attr("transform", "translate(-130,400) rotate(-90)")


 // 평균
svg.append("line")
        .attr("x1", 50)
        .attr("y1",  530 - (mean/20))
        .attr("x2", 850)
        .attr("y2", 530 - (mean/20))
        .style("stroke", "#fc7978")
        .style("stroke-width", 2)

svg.append('text')
        .attr('x', 11)
        .attr('y', 530 - (mean/20))
        .text("mean")
        .style('font-size', '12px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "#fc7978")

svg.append('text')
        .attr('x', 12)
        .attr('y', 545 - (mean/20))
        .text("890")
        .style('font-size', '12px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "#fc7978")

data.forEach((d, i) => {

          if (i == 76) {
              return;
          }

          var line = svg.append("line")
              .attr("x1", i * 10)
              .attr("y1", 530 - (data[i]/20))
              .attr("x2", (i + 1) * 10)
              .attr("y2", 530 - (data[i+1]/20))
              .attr("transform", "translate(50,25)")
              .style("stroke", "#04B486")
              .style("stroke-width", 3)

          var circle = svg.append('circle')
              .attr('cx', (i + 1) * 10)
              .attr('cy', 530 - (data[i + 1]/20))
              .attr('r', 3)
              .attr("transform", "translate(50,25)")
              .style('fill', '#5eb7b7')
})

//가장 높은
svg.append('text')
          .attr("x", 330)
          .attr("y", 540 - (data[31]/20))
          .text("area : 25")
          .style('font-size', '14px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")
