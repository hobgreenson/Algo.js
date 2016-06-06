var d3 = require('d3');
var fs = require('fs');
var jsdom = require('jsdom');

module.exports = {
    
    assert: function(value, desc, log) {
        var outcome = value ? 'pass: ' : 'fail: ';
        if (log) console.log(outcome + desc);
        if (!value) throw 'test case failed';
    },

    random_int: function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
    },

    print_heap: function(heap) {
        var n = heap.data.length;
        console.log('heap length = ' + n);
        var i = 0, j = 1, e = 0;
        while (i < n) {
            var level = '';
            for (var k = i; k < j; k++) {
                level += k < n ? ' ' + heap.data[k].key : '';
            }
            console.log(level);
            i += Math.pow(2, e);
            e += 1;
            j = i + Math.pow(2, e);
        }
    },

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
