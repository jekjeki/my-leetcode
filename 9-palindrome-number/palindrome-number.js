/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let string = x.toString()
   let i = 0
   let j = string.length-1

   if(string.length == 1){
    return true
   }

   while(i < j){
    if(string[i] != string[j]){
        return false
    }
    i++ 
    j--
   }
   return true
};