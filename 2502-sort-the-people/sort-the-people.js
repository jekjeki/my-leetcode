/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let n = heights.length 

    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(heights[j] < heights[j+1]){
                let temp = heights[j]
                let temp_names = names[j]

                heights[j] = heights[j+1]
                names[j] = names[j+1]

                heights[j+1] = temp
                names[j+1] = temp_names
            }
        }
    }

    return names
};