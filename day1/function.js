module.exports = {
  words: function(input){
    var wordOccur = {};
    input.split(" ").forEach(function (el, i, arr) {
        wordOccur[el] = wordOccur[el] ? ++wordOccur[el] : 1;
    });
    return wordOccur;
  }
}
