class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s?.length !== t?.length) {
            return false
        }
        const sMap = {};
        const tMap = {};

        for (let i = 0; i < s.length; i ++) {
            this.updateMap(s[i], sMap);
            this.updateMap(t[i], tMap);
        }
        
        for (let [key, value] of Object.entries(sMap)) {
            if (value !== tMap[key])
                return false;
        }
        return true;
    }

    updateMap(key, map) {
        if (map[key]) {
            map[key] += 1;
        } else {
            map[key] = 1;
        }
    }
}
