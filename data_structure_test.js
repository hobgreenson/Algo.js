
var util = require('./utils');
var ds = require('./data_structures.js');

run_tests();

function run_tests() {
    
    test_heap();

};

function test_heap() {
    /*
     * Check that items can be pushed, then popped such
     * that item keys emerge in ascending sorted order. This is tested
     * against the built-in array sort method.
    */ 
    
    'use strict'
    
    var heap = new ds.BinaryMinHeap();
    var arr = [];
    var N_tests = 10000;
    
    for (var i = 0; i < N_tests; i++) {
        var key = util.random_int(0, N_tests);
        heap.push(key, {});
        arr.push(key);
    }
    
    arr.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < N_tests; i++) {
        var item = heap.pop();
        util.assert(item.key === arr[i], item.key + ' = ' + arr[i], true); 
    }

}



