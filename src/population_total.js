var data = [229551, 131894, 65159, 101409, 59086, 96248, 160957, 83117,
 103298, 39842, 121562, 138494, 61863, 60690, 194236, 39276, 216720, 74770,
 41374, 37546, 64215, 25501, 111512, 46631, 83691, 42199, 208891, 162820, 15622, 24663, 125216,
 418507, 50116, 91413, 73460, 187743,
 40385, 26154, 14745, 107169, 64217, 49025, 193156, 27161, 196548, 143786, 124984,
 26031, 78435, 193088, 60159, 163705, 176483,
 54686, 28186, 122215, 135182,
 175352, 33871,32696,108580,70515,35858,22072,14752,52768,23867, 23693,11941,6412,9897,22271,26667,29453,14316,43203,39450]

var mean = 85875.66233766233

var svg = d3.select(".population_total")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 650)
    .attr('transform', 'translate(300,0)')

svg.append('text')
    .attr('x', 380)
    .attr('y', 40)
    .text("< total crime >")
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
        .attr("y1",  530 - (mean/1000))
        .attr("x2", 850)
        .attr("y2", 530 - (mean/1000))
        .style("stroke", "#fc7978")
        .style("stroke-width", 2)

svg.append('text')
        .attr('x', 11)
        .attr('y', 530 - (mean/1000))
        .text("mean")
        .style('font-size', '12px')
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "#fc7978")

svg.append('text')
        .attr('x', 8)
        .attr('y', 545 - (mean/1000))
        .text("85875")
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
              .attr("y1", 530 - (data[i]/1000))
              .attr("x2", (i + 1) * 10)
              .attr("y2", 530 - (data[i+1]/1000))
              .attr("transform", "translate(50,25)")
              .style("stroke", "#04B486")
              .style("stroke-width", 3)

          var circle = svg.append('circle')
              .attr('cx', (i + 1) * 10)
              .attr('cy', (530 - data[i + 1]/1000))
              .attr('r', 3)
              .attr("transform", "translate(50,25)")
              .style('fill', '#5eb7b7')
})

//가장 높은
svg.append('text')
          .attr("x", 330)
          .attr("y", 540 - (data[31]/1000))
          .text("area : 25")
          .style('font-size', '14px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")
