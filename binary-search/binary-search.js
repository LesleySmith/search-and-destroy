'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let midPoint = Math.floor(array.length /2)
	let midpointVal = array[midPoint];
	if (midpointVal === target) {
		return true;
	} else if (array.length > 1) {
		if (target > midpointVal) {
			let newArr = array.slice(midPoint, array.length)
			return binarySearch(newArr, target);
		}
		if (target < midpointVal) {
			let newArr = array.slice(0, midPoint)
			return binarySearch(newArr, target);
		}
	}
	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
