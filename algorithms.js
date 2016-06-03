
/*
 * Summary: A collection of methods implementing a variety of
 * algorithms. These algorithms sometimes require data structures defined
 * in other modules (e.g. heap, graph).
*/

module.exports = {
    
    mergesort: function(arr) {
        
        /*
         * Summary: USes the merge sort algorithm to returns a new array 
         * containing the sorted values of the input array.
         *
         * Limitations: input array is assumed to hold numbers. This could be
         * fixed by using a custom comparison function.
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
                if (i < left.length && (j >= right.length|| left[i] < right[j])) {
                    sorted[k] = left[i++];
                } else {
                    sorted[k] = right[j++];
                }
            }
            return sorted;
        }

    },

    quicksort: function(arr) {

    },

    heapsort: function(arr) {

    }

};
