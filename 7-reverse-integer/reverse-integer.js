/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString()
    let right = str.length-1
    let reverse = []

    if(str.length == 1){
        let num = parseInt(str)

        if(x < 0){
            num *= -1
        }
        else{
            return num
        }
    }

    while(right >= 0){
        if(str[str.length] != '0'){
            reverse.push(str[right])
        }
        right--
    }

    let num = parseInt(reverse.join(""))
    if(x < 0){
        num *= -1 
    }

    if(num > Math.pow(2, 31) - 1 || num < -Math.pow(2,31)){
        return 0
    }

    return num
};
