/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let total = 0
    let minAbs = Infinity 
    let negCount = 0

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            const val = matrix[i][j]
            total += Math.abs(val)
            minAbs = Math.min(minAbs, Math.abs(val))
            if(val < 0){
                negCount++
            }
        }
    }

    if(negCount % 2 !== 0){
        total -= 2 * minAbs
    }

    return total
};