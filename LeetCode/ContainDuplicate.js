function containsDuplicate(nums) {
	const set = new Set([...nums]);  
    // set don't allow duplicates, it'll trim off duplicates
    // convert array to set by spreading in set constructor

	return set.size != nums.length;
};

const ans = containsDuplicate([5, 6, 3, 2, 6])
console.log(ans);

function containsDuplicate2(nums) {
	const hashTable = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (hashTable.has(nums[i])) return true;
		else hashTable.set(nums[i], true);
	}

	return false;
};

const ans2 = containsDuplicate2([5, 6, 3, 2, 9])
console.log(ans2);