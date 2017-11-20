const assert = require('chai').assert;
const app = require('../function');

// Results

describe('words(olly olly in come free)', function () {
    it('words should return { olly: 2, in: 1, come: 1, free: 1 }', function () {
        var result = app.words('olly olly in come free');           
        assert.deepEqual(result, { olly: 2, in: 1, come: 1, free: 1 });
    });
});
