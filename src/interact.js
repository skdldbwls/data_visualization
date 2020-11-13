var data_text = [['THEFT' , 'BATTERY' , 'NARCOTICS' ],
['THEFT' , 'BATTERY' , 'CRIMINAL DAMAGE'],
['THEFT' , 'BATTERY' , 'NARCOTICS'],
['THEFT' , 'BATTERY' , 'NARCOTICS'],
['THEFT' , 'BATTERY' , 'CRIMINAL DAMAGE'],
['THEFT' , 'BATTERY' , 'CRIMINAL DAMAGE'],
['THEFT' , 'BATTERY' , 'CRIMINAL DAMAGE'],
['THEFT' , 'BATTERY' , 'CRIMINAL DAMAGE'],
['THEFT' , 'BATTERY' , 'CRIMINAL DAMAGE'],
['BATTERY' , 'THEFT' , 'CRIMINAL DAMAGE']]
var target = document.getElementById("slide");

var svg = d3.select(".interact")
    .append("svg")
    .attr('width', 1300)
    .attr('height', 1000)



    svg.append('line') // x 축
        .attr('x1', 350)
        .attr('y1', 70)
        .attr('x2', 750)
        .attr('y2', 70)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.6)

    svg.append('line') // y 축
        .attr('x1', 450)
        .attr('y1', 20)
        .attr('x2', 450)
        .attr('y2', 170)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.6)

    svg.append('text')
        .attr('x', 380)
        .attr('y', 50)
        .text('Year')
        .attr('fill', 'gray')

    svg.append('text')
        .attr('x', 610)
        .attr('y', 50)
        .text('Crime Type')
        .attr('fill', 'gray')



function tt() {

            svg.append('rect')
                .attr('x', 370)
                .attr('y', 85)
                .attr('width', 60)
                .attr('height', 20)
                .attr('fill', 'white')

            svg.append('text')
                .attr('x', 380)
                .attr('y', 100)
                .text(Number(target.value) + 2011)
                .attr('fill', 'gray')

            svg.append('rect')
                .attr('x', 470)
                .attr('y', 85)
                .attr('width', 60)
                .attr('height', 80)
                .attr('fill', 'white')



            svg.append('rect')
                .attr('x', 570)
                .attr('y', 85)
                .attr('width', 318)
                .attr('height', 80)
                .attr('fill', 'white')

            svg.append('text')
                .attr('x', 587)
                .attr('y', 100)
                .text(data_text[target.value][0])
                .attr('fill', 'gray')

            svg.append('text')
                .attr('x', 587)
                .attr('y', 130)
                .text(data_text[target.value][1])
                .attr('fill', 'gray')

            svg.append('text')
                .attr('x', 587)
                .attr('y', 160)
                .text(data_text[target.value][2])
                .attr('fill', 'gray')

            svg.append('rect')
                .attr('x', 970)
                .attr('y', 20)
                .attr('width', 140)
                .attr('height', 200)
                .attr('fill', 'white')

            svg.append('line') // x 축
                .attr('x1', 940)
                .attr('y1', 220 - 25.22 * 4)
                .attr('x2', 1100)
                .attr('y2', 220 - 25.22 * 4)
                .attr('stroke', 'white')
                .attr('stroke-width', 0.6)
                .style("stroke-dasharray", 5)





        }
