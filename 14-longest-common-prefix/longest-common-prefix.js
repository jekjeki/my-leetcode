/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let word = ""
    let words = ""
    let count = 0
    
    while(count !== strs[0].length){
        words=word
        word += strs[0][count]
        for(let i=1; i<strs.length; i++){
            if(word[count] !== strs[i][count]){
                word = words
                break
            }
        }
        
        if(word == words){
            break
        }
        
        count += 1
    }
    
    return word
};