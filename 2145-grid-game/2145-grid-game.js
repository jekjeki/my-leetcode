/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
      // sum top grid data 
    const tops = grid[0]
    let sumsTop = 0
    for(let c of tops){
        sumsTop += c
    }

    let bottom = 0
    let res = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < grid[0].length; i++) {
        sumsTop -= grid[0][i];
        res = Math.min(res, Math.max(sumsTop, bottom));
        bottom += grid[1][i];
    }

    return res
};