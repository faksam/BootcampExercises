module.exports = {
    words: function (input) {
    if (typeof input === 'string') {
        input.trim();
        input = input.trim().replace(/\s+/g, ' ');
        var wordOccur = {};
        input.split(" ").forEach(function (el, i, arr) {
            wordOccur[el] = wordOccur[el] ? ++wordOccur[el] : 1;
        });
        return wordOccur;
    }
    else if (typeof input === 'number')
    {
        return 'Invalid number input';
    }
    else if (typeof input === 'boolean') {
        return 'Invalid boolean input';
    }
    else if (typeof input === 'undefined') {
        return 'Invalid undefined input';
    }
    else if (Array.isArray(input)) {
        return 'Invalid array input';
    }
    else if (typeof input === 'object') {
        return 'Invalid object input';
    }
    else if (typeof input === 'symbol') {
        return 'Invalid symbol input';
    }
    else if (typeof input === 'function') {
        return 'Invalid function input';
    }
    
    else
        return 'Invalid input';
    }
}
