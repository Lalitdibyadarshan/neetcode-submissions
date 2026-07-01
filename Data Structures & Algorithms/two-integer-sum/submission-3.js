class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = nums.reduce((obj, num, idx) => {
            obj[num] = idx;
            return obj;
        }, {});
        
        for (let i = 0; i < nums.length; i++) {
            const remainingIdx = map[target - nums[i]];
            if (remainingIdx && remainingIdx != i) {
                return [i, remainingIdx];
            }
        }

        return [];
    }
}
