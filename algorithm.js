

var util = require('./util.js');

/*
 * Summary: A collection of methods implementing a variety of
 * algorithms. These algorithms sometimes require data structures defined
 * in other modules (e.g. heap, graph).
*/

module.exports = {

    mergesort: function(arr) {
        
        /*
         * Summary: Uses the merge sort algorithm to returns a new array 
         * containing the sorted values of the input array.
         *
         * Limitations: input array is assumed to hold numbers. This could be
         * fixed by using a custom comparison function.
         *
         * Applications: sorting
         * 
        */

        if (arr.length === 0) { return []; }
        else if (arr.length === 1) { return [arr[0]]; } 
        else { return sort(arr); }

        function sort(x) {
            if (x.length <= 1) { return x; }
            var mid = x.length >> 1; 
            var left = sort(x.slice(0, mid));
            var right = sort(x.slice(mid));
            return merge(left, right);
        }

        function merge(left, right) {
            var i = 0,
                j = 0,
                n = left.length + right.length;
            var sorted = [];
            for (var k = 0; k < n; k++) {
                if (i < left.length && (j >= right.length || left[i] < right[j])) {
                    sorted[k] = left[i++];
                } else {
                    sorted[k] = right[j++];
                }
            }
            return sorted;
        }

    }, 

    count_inversions: function(arr) {

        /*
         * Summary: returns the number of pairs of elements
         * in the input array that are out of order (ascending).
         * Basically a modified version of mergesort.
         *
         * Limitations: assumes input is an array of numbers
         *
         * Applications: similarity metric, inverted vampires
         *
         */
        
        if (arr.length <= 1) { return 0; }
        else {
            var n_inv = 0;
            var sorted = sort_count(arr);
            return n_inv;
        }

        function sort_count(x) {
            if (x.length <= 1) { return x; }
            var mid = x.length >> 1; 
            var left = sort_count(x.slice(0, mid));
            var right = sort_count(x.slice(mid));
            return merge(left, right);
        }

        function merge(left, right) {
            var i = 0,
                j = 0,
                n = left.length + right.length;
            var sorted = [];
            for (var k = 0; k < n; k++) {
                if (i < left.length && j < right.length && left[i] > right[j]) {
                    n_inv += left.length - i;
                }
                if (i < left.length && (j >= right.length || left[i] <= right[j])) {
                    sorted[k] = left[i++];
                } else {
                    sorted[k] = right[j++];
                }
            }
            return sorted; 
        }
    },

    quicksort: function(arr) {
        
        /*
         * Summary: uses randomized quicksort algorithm to sort the 
         * input array in-place.
         *
         * Limitations: assumes input array holds numbers. does not implement
         * some well-known optimizations.
         *
         * Applications: sorting
         *
         */

        sort(0, arr.length);
        
        function sort(left, right) {
            if (left < right) {
                var pivot_index = partition(left, right);
                sort(left, pivot_index);
                sort(pivot_index + 1, right);
            }
        }
        
        function partition(left, right) {
            var p = util.random_int(left, right);
            if (p !== left) {
                util.array_swap(arr, p, left);
            }
            var pivot = arr[left];
            for (var i = j = left + 1; j < right; j++) {
                if (arr[j] < pivot) {
                    if (i !== j) {
                        util.array_swap(arr, i, j);
                    }
                    i++;
                } 
            }
            var pivot_index = i - 1
            util.array_swap(arr, left, pivot_index);
            return pivot_index;
        }
    },

    heapsort: function(arr) {

    }

};
