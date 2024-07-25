/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    if(nums.length <= 1){
        return nums
    }

    const middleIdx = (nums.length/2)
    const left = nums.slice(0, middleIdx)
    const right = nums.slice(middleIdx)

    let sortedLeft = sortArray(left)
    let sortedRight = sortArray(right)

    let result = []
    let leftIdx = 0
    let rightIdx = 0

    while(leftIdx < sortedLeft.length && rightIdx < sortedRight.length){
        if(sortedLeft[leftIdx] < sortedRight[rightIdx]){
            result.push(sortedLeft[leftIdx])
            leftIdx++
        }
        else{
            result.push(sortedRight[rightIdx])
            rightIdx++
        }
    }

    return result.concat(sortedLeft.slice(leftIdx)).concat(sortedRight.slice(rightIdx))

};