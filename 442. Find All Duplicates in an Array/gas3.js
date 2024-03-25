var findDuplicates = function (nums) {
  let result = [];
  let j = 0;
  let key = nums[j];
  let pat = 0
  for(i = 0; i < nums.length; i++){
    const num = Math.abs(nums[i])
    let idx = num-1
    if(nums[idx] < 0){
        res.push(num)
    }
    nums[idx] *= -1
  }

    // tle 
//   while(pat != nums.length){
//       for (let i = j+1; i < nums.length; i++) {
//           if (key == nums[i]) {
//             result.push(nums[i]);
//           }
//         if (i == nums.length-1) {
//           j = j + 1;
//           key = nums[j];
//         }
    
//       } 
//     pat++
//   }

//   //sort data
//   let res = result.sort();
//   return res;
};

let res = findDuplicates([1]);
console.log(res);
