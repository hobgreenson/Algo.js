
var assert = require('./assert.js').assert;
var util = require('./utils');
var algo = require('./algorithms');

run_tests();

function run_tests() {

    test_mergesort.call(util);

}


function test_mergesort() {
    assert(0 === algo.mergesort([]).length, 'returns empty list', true);
    assert([1].pop() === algo.mergesort([1]).pop(), 'returns singleton list', true)
    var x = [],
        n = 10000;
    for (var i = 0; i < n; i++) {
        x.push(this.random_int(0, n));
    }
    var y = algo.mergesort(x);
    x.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < n; i++) {
        assert(x[i] === y[i], x[i] + ' = ' + y[i], true);
    }
}
