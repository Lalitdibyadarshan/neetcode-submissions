class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0)
            return false

        const numbersMap = {}
        
        for (let i = 0; i < nums.length; i++) {
            if (numbersMap[nums[i]]) {
                return true
            }
            numbersMap[nums[i]] = 1;
        }

        return false
    }
}
