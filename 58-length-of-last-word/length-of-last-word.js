/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = s.trim().split(' ')
    let lastWord = word[word.length-1]
    return lastWord.length
};