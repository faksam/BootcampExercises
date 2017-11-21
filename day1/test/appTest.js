const assert = require('chai').assert;
const app = require('../countWordOccurrence');

describe("words(olly olly in come free)", () => {
    //Test to check correct input
    it('words should trim white spaces', function () {
        var result = app.words('olly    olly  in come   free');
        assert.deepEqual(result, { olly: 2, in: 1, come: 1, free: 1 });
    });
});

describe("words(olly    olly  in come   free)", () => {
    //Test to check incorrect input with white spaces
    it('words should return a invalid boolean input', () => {
        const result = app.words(true)
        assert.deepEqual(result, 'Invalid boolean input');
    });
});

describe("words(true)", () => {
    //Test to check if input is Boolean
    it('words should return a invalid boolean input', () => {
        const result = app.words(true)
        assert.deepEqual(result, 'Invalid boolean input');
    });
});

describe("words(5)", () => {
    //Test to check if input is number
    it('words should return invalid number input', () => {
        assert.equal(app.words(5), "Invalid number input");
    });
});

describe("words({ a: 1 })", () => {
    //Test to check if input is an object
    it('words({ a: 1 }) should return invalid object input', () => {
        assert.equal(app.words({ a: 1 }), "Invalid object input");
    });
});

describe("words(function () { })", () => {
    //Test to check if input is a function
    it('words(function () { }) should return invalid function input', () => {
        assert.equal(app.words(function () { }), "Invalid function input");
    });
});

describe('words(["olly", "olly", "in ", "come", "true"])', () => {
    //Test to check if input is an array
    it('words(["olly", "olly", "in", "come", "true"]) should return invalid array input', () => {
        assert.equal(app.words(["olly", "olly", "in", "come", "true"]), "Invalid array input");
    });
});
