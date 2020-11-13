var svg = d3.select(".pie_title")
    .append("svg")
    .attr('width', 1200)//캠버스크기
    .attr('height', 75)
    .attr('transform','translate(180,0)')

    svg.append('text')
    .attr('x', 320)//캠버스안에서의 위치
    .attr('y', 60)
    .text('< Firearm Related Crime Ratio >')//넣을
    .style('font-size', '19px')
    .attr("font-family", "sans-serif")
    .attr("fill", "black")
