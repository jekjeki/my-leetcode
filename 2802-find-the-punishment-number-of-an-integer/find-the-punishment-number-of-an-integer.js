/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    
    function partition(str, target) {
        if (target === 0 && str.length === 0) return true;
        if (target < 0 || str.length === 0) return false;

        for (let i = 1; i <= str.length; i++) {
            let part = parseInt(str.substring(0, i), 10);
            let remaining = str.substring(i)
            if (partition(remaining, target - part)) {
                return true;
            }
        }
        return false;
    }

    let punishmentSum = 0;

    for (let i = 1; i <= n; i++) {
        let square = i * i; 
        let squareStr = square.toString(); 

        if (partition(squareStr, i)) {
            punishmentSum += square; 
        }
    }

    return punishmentSum;
};