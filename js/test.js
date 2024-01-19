function findTargetIndices(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // find index of target complement
        const complementIndex = nums.indexOf(complement, i + 1);
        
        if (complementIndex !== -1) {
            return [i, complementIndex];
        }
    }    
    // no indices
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = findTargetIndices(nums, target);
console.log(result);
