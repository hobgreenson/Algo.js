
/* 
 * Summary: This is a novice implementation of a min heap. I hope it brings
 * you such performance much minimum wow!
 *
 * Applications: priority queue, object localization, running statistics
 *
 */

function MinHeap() {
    this.data = [];
}

MinHeap.prototype = {
    
    swap: function(i, j) {
        var temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    },

    bubble_up: function(i) {
        if (i === 0) { return; }
        var j = i >> 1;
        if (this.data[i].key < this.data[j].key) {
            this.swap(i, j);
            this.bubble_up(j);
        } else { return; }
    },

    bubble_down: function(i) {
        // TODO: this is really ugly!
        var j = (i + 1) << 1;
        var k = j - 1;
        var key = this.data[i].key;
        if (this.data[j] && this.data[k]) {
            // two children, j and k
            var min_index = this.data[j].key < this.data[k].key ? j : k;           
            if (key > this.data[min_index].key) {
                this.swap(i, min_index);
                this.bubble_down(min_index);
            } else {
                return;
            }
        } else if (this.data[j]) {
            // one child, j
            if (key > this.data[j].key) {
                this.swap(i, j);
                this.bubble_down(j);
            } else {
                return;
            }
        } else if (this.data[k]) {
            // one child, k
            if (key > this.data[j].key) {
                this.swap(i, k);
                this.bubble_down(k);
            } else {
                return;
            }
        } else {
            // no children, is a leaf
            return;
        }
    },

    push: function(key, value) {
        this.data.push({ key: key,
                         value: value });
        this.bubble_up(this.data.length - 1);
    },

    pop: function() {
        this.swap(0, this.data.length - 1);
        var min_item = this.data.pop();
        this.bubble_down(0);
        return min_item;
    },
    
    /* TODO:
    heapify: function(data) {

    },

    delete: function(key) {

    }
    */

};
