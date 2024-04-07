/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let min = 0
    let max = 0
    for(let i=0; i < s.length; i++){
        if(s[i] == '('){
            max++
            min++
        }
        else if(s[i] == ')'){
            max-- 
            min--
        }
        else{
            max++
            min--
        }

        if(max < 0) return false
        if(min < 0) min = 0
    }

    return min == 0
};