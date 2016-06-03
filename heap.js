

module.exports = {
    
    MinHeap: MinHeap 

};

function MinHeap() {
    /* 
     * Summary: This is a novice implementation of a min (binary) heap. 
     * I hope it brings you such performance much minimum wow!
     *
     * Limitations: Keys are expected to be numbers (int, float). This
     * could be fixed by allowing custom comparison function.
     *
     * Applications: finding the minimum, priority queue, object localization, 
     * running statistics, etc.
     */
    
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
        var j = (i - 1) >> 1;
        if (this.data[i].key < this.data[j].key) {
            this.swap(i, j);
            this.bubble_up(j);
        } else { return; }
    },

    bubble_down: function(parent) {
        var key = this.data[parent].key;
        var child_right = (parent + 1) << 1;
        var child_left = child_right - 1;
        var swap_index;
        
        if (this.data[child_right] && this.data[child_left]) {
            swap_index = this.data[child_right].key < this.data[child_left].key ? 
                         child_right : child_left;
        } 
        else if (this.data[child_right]) { swap_index = child_right; }
        else if (this.data[child_left])  { swap_index = child_left; }
        else { return; }
        
        if (key > this.data[swap_index].key) {
            this.swap(parent, swap_index);
            this.bubble_down(swap_index);
        } else { return; }
    },

    size: function() {
        return this.data.length;
    },

    peek: function() {
        return this.data[0];
    },

    push: function(key, value) {
        this.data.push({ key: key,
                         value: value });
        this.bubble_up(this.data.length - 1);
    },

    pop: function() {
        this.swap(0, this.data.length - 1);
        var min_item = this.data.pop();
        if (this.data.length > 0) this.bubble_down(0);
        return min_item;
    },
    
    /* TODO:
    heapify: function(data) {

    },

    delete: function(key) {

    }
    */

};
