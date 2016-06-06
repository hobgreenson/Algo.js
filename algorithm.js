
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
         * - pick a pivot
         * - rearrange array so that elements left of the pivot are less
         * and elements right of the pivot are greater: this puts the pivot
         * in it's "rightful" position.
         *
         */


        if (arr.length <= 1) { return arr; }
        else { sort(arr); }

        function sort(x) {
            var p = pivot(x);
            sort(x.slice(0, p));
            sort(x.slice(p));
        }
        
        function partition(x, pivot, left, right) {
                 
        }

        function swap(x, i, j) {
            var temp = x[i];
            x[i] = x[j];
            x[j] = temp;
        }

    },

    heapsort: function(arr) {

    }

};
