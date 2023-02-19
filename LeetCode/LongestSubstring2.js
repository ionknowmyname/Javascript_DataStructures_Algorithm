/* 
    Longest substring with at most 2 distinct characters 
    i.e the two characters can be repeated any number of times bt no 3rd character
    SLIDING WINDOW TECHNIQUE (Variable sized window)
    
*/

function lengthOfLongestSubstring(s) {
	if (s.length < 2)
		return s.length;

    let left = 0
    const map = new Map();
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {

        let rightChar = s[right];
        let rightChar2 = s.charAt(right)

        if(!map.has(rightChar)) {
            map.set(rightChar, 1)   // char not in map, add it with 1 instance
        } else {
            map.set(rightChar, map.get(rightChar) + 1)    // char in map, add 1 to its occurence
        }

        while(map.size > 2) { 
            // more than allowed distinct chars, so move left pointer to the right by 1 to remove 1 distinct key-value pair from map

            let leftChar = s[left]
            // if left char has only 1 instance in map, then delete it,
            // if it has more than 1 instance, then we reduce the instances by 1

            if(map.get(leftChar) > 1) {
                map.set(leftChar, map.get(leftChar) - 1)
            } else {
                map.delete(leftChar)
            }

            left++
        }

        maxLength = Math.max(maxLength, (right - left) + 1)
    }

    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));