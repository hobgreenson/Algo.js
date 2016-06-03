
module.exports = {

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
    }

};
