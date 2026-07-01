class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const map = {};
        for (let str of strs) {
            let j = 0;
            let prev = "";
            while (j < str.length) {
                prev = prev + str[j];
                if (map[prev]) {
                    map[prev] = map[prev] + 1;
                } else {
                    map[prev] = 1;
                }
                j++;
            }
        }


        let largest = "";
        for (let [key, value] of Object.entries(map)) {
            if (key.length > largest.length && value === strs.length) {
                largest = key;
            }
        }

        return largest
    }
}
