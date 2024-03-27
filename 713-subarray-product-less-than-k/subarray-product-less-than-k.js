/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0

    if(k <= 0) return 0 

    for(let i=0; i<nums.length; i++){
        let total = 1
        for(let j=i; j<nums.length; j++){
            total *= nums[j]
            if(total < k){
                count++
            }
            else{
                break
            }
        }
    }
    return count
};