/**
 * @param {number[]} fruits
 * @return {number}
*/

/* 
   totalFruit is working, but I don't get it,
   try sliding window technique    
*/



var totalFruit = function(fruits) {
    let max = 0, count = 0;
    for (let i = 0, first = 0, second = -1; i < fruits.length; i++) {
        count++;
        if (fruits[i] === fruits[first]) {
            first = i;
        } else if (second === -1 || fruits[i] === fruits[second]) {
            second = i;
        } else {
            max = Math.max(count - 1, max);
            count = Math.abs(first - second) + 1;
            first = i - 1;
            second = i;
        }
    }
    return Math.max(count, max);
};


var totalFruit2 = function(fruits) {
    // if (s.length < 2)
	// 	return s.length;
	// var left = 0;
	// var right = 0;
	// var maxLength = 0;
	// var map = new Map()   // {};

	// while (right < s.length) {
	// 	var ch = s.charAt(right);
		
	// 	if (map.has(ch)) {
	// 		maxLength = Math.max(maxLength, right - left);  
	// 		left = Math.max(left, map.get(ch) + 1);  
    //         // move left pointer to the right of found char by 1 to start counting again
	// 	}
		
	// 	map.set(ch, right++);  // add character to hashmap if not found in hashmap, the value would be right++
	// }

	// return Math.max(maxLength, right - left);

};