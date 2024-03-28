/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let list = {}
    let from = 0
    let max = 0
    for(let i = 0; i < nums.length; i++){
        if(!list[nums[i]]){
            list[nums[i]] = 0
        }

        list[nums[i]] += 1

        while(list[nums[i]] > k){
            list[nums[from++]] -= 1 
        }
        max = Math.max(max, (i - from) + 1)
    }
    return max
};