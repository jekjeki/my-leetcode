/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {

    let map = new Map()
    for(num of nums){
        map.set(num, (map.get(num) || 0) + 1 )
    }

    nums.sort((a,b)=>{
        const freqA = map.get(a)
        const freqB = map.get(b)
        if(freqA == freqB){
            return b - a
        }
        return freqA - freqB
    })

    return nums
};