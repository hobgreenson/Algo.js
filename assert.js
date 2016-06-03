
module.exports = {
    
    assert: function(value, desc, log) {
        var outcome = value ? 'pass: ' : 'fail: ';
        if (log) console.log(outcome + desc);
        if (!value) throw 'test case failed';
    }

};

