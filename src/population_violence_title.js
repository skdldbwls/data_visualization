var svg = d3.select(".population_total")
    .append("svg")
    .attr('width', 1200)//캠버스크기
    .attr('height', 100)
    .attr('transform','translate(180,0)')

    svg.append('text')
    .attr('x', 270)
    .attr('y', 80)
    .text('[ Relationship between population density and crime ]')
    .style('font-size', '23px')
    .attr("font-family", "sans-serif")
    .attr("font-weight", "bolder")
    .attr("fill", "black")
