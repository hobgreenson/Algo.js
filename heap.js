
/* 
 * Summary: This is a novice implementation of a min heap. I hope it brings
 * you such performance much minimum wow!
 *
 * Applications: finding the minimum, priority queue, object localization, 
 * running statistics, etc.
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
        var j = (i - 1) >> 1;
        if (this.data[i].key < this.data[j].key) {
            this.swap(i, j);
            this.bubble_up(j);
        } else { return; }
    },

    bubble_down: function(i) {
        var key = this.data[i].key;
        var j = (i + 1) << 1;
        var k = j - 1;
        var swap_index;
        
        if (this.data[j] && this.data[k]) {
            swap_index = this.data[j].key < this.data[k].key ? j : k;           
        } 
        else if (this.data[j]) { swap_index = j; }
        else if (this.data[k]) { swap_index = k; }
        else { return; }
        
        if (key > this.data[swap_index].key) {
            this.swap(i, swap_index);
            this.bubble_down(swap_index);
        } else { return; }
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
