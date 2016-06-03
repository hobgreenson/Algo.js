
var MinHeap = require('./heap.js').MinHeap;
var assert = require('./assert.js').assert;
var plt = require('./plotter.js');

run_tests();

function run_tests() {
    
    var util = {
    
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
    
    test_heapsort.call(util);
    test_run_time.call(util);

};

function test_heapsort() {
    /*
     * Check that items can be pushed, then popped such
     * that item keys emerge in ascending sorted order. This is tested
     * against the built-in array sort method.
    */ 
    
    'use strict'
    
    var heap = new MinHeap();
    var arr = [];
    var N_tests = 10000;
    
    for (var i = 0; i < N_tests; i++) {
        var key = this.random_int(0, N_tests);
        heap.push(key, {});
        arr.push(key);
    }
    
    arr.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < N_tests; i++) {
        var item = heap.pop();
        assert(item.key === arr[i], '' + item.key + '  ' + arr[i] + '', false); 
    }

}

function test_run_time() {
    
    /* 
     * Running time: Check push and pop operations are truly O(logN), and that
     * peek is O(1).
     * TODO: microsecond timer - Date.now() is too coarse.  
    */
    
    'use strict'
    
    var heap = new MinHeap();
    
    var max_pow = 20;
    var N = [];
    var n = 1;
    for (var p = 1; p <= max_pow; p++) {
        n <<= 1; 
        N.push(n);
    }
    
    var push_results = [];
    var t0;

    for (var i = 0; i <= N[max_pow - 1]; i++) {
        var key = Math.random();
        if (N.indexOf(i) >= 0) { 
            t0 = Date.now();
            heap.push(key, {});
            push_results.push(Date.now() - t0);
        } 
        else { heap.push(key, {}); }
    }
    
    //plt.d3_scatter_plot('test.svg', [250], [250]);
}


