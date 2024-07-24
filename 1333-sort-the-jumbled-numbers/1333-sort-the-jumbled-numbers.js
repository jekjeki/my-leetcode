/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    let n = nums.length 
    let n_map = mapping.length 
    
    function getMappedValue(num){
        num_str = num.toString()
        let mapped = ''
        
        for(let i of num_str){
            let v = mapping[parseInt(i)]
            mapped += v
        }
        
        return parseInt(mapped)
    }
    
    nums.sort((a,b) => {
        const mappedA = getMappedValue(a)
        const mappedB = getMappedValue(b)
        
        if(mappedA < mappedB){
            return -1 
        }
        else if(mappedA > mappedB){
            return 1
        }
        else{
            return 0
        }
    })
    
    return nums
};