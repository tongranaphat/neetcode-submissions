class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanText = s.toLowerCase().replace(/[^a-z0-9]/g,"");

        let left = 0;
        let right = cleanText.length-1;

        while (left < right){
            if (cleanText[left] != cleanText[right]){
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
}
