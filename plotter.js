var d3 = require('d3');
var fs = require('fs');
var jsdom = require('jsdom');

module.exports = {
    
    d3_scatter_plot: function(file_name, x_data, y_data) {
  
        var data = [];

        for (var i = 0; i < x_data.length; i++) {
            data.push({ x: x_data[i],
                        y: y_data[i] });
        }

        var document = jsdom.jsdom(); 
    
        var w = 500,
            h = 500;

        var svg = d3.select(document.body)
                    .append('svg')
                    .attr('width', w)
                    .attr('height', h);
    
        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; })
            .attr('r', 5);
    
        fs.writeFile(file_name, d3.select(document.body).html());
    }

};
