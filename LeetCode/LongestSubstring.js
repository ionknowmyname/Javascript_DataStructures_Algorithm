/* 
    Longest substring without repeating characters 
    SLIDING WINDOW TECHNIQUE (Variable sized window)
    
*/

function lengthOfLongestSubstring(s) {
	if (s.length < 2)
		return s.length;

	var left = 0;
	var right = 0;
	var maxLength = 0;
	var map = new Map()   // {};

	while (right < s.length) {
		var ch = s.charAt(right); // s[right] also correct
		
		if (map.has(ch)) {
			maxLength = Math.max(maxLength, right - left);  
			left = Math.max(left, map.get(ch) + 1);  
            // move left pointer to the right of found char by 1 to start counting again
		}
		
		map.set(ch, right++);  // add character to hashmap if not found in hashmap, the value would be right++
	}

	return Math.max(maxLength, right - left);
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));