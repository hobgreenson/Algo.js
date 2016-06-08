
var util = require('./util');
var algo = require('./algorithm');

run_tests();

function run_tests() {

    //test_mergesort();
    //test_count_inversions();
    test_quicksort();
}


function test_mergesort() {
    util.assert(0 === algo.mergesort([]).length, 'returns empty list', true);
    util.assert([1].pop() === algo.mergesort([1]).pop(), 'returns singleton list', true)
    var x = [],
        n = 10000;
    for (var i = 0; i < n; i++) {
        x.push(util.random_int(0, n));
    }
    var y = algo.mergesort(x);
    x.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < n; i++) {
        util.assert(x[i] === y[i], x[i] + ' = ' + y[i], true);
    }
}


function test_count_inversions() {
    var x = [1,2,4,5,3];
    console.log(algo.count_inversions(x));
}

function test_quicksort() {

    var x = [];
    algo.quicksort(x);
    util.assert(0 === x.length, 'quicksort works on empty array', true);

    x = [1];
    algo.quicksort(x);
    util.assert(x.pop() === 1, 'quicksort works on array with one element', true);

    var n = 10000,
        y = [];
    x = [];
    for (var i = 0; i < n; i++) {
        var value = util.random_int(0, n);
        x.push(value);
        y.push(value);
    }
    
    algo.quicksort(x);
    y.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < n; i++) {
        util.assert(x[i] === y[i], x[i] + ' = ' + y[i], true);
    }
}
