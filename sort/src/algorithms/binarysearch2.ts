function binarySearch(array: Array<number>, value: number, start = 0, end = array.length - 1, newArray: number[] = []): number | undefined {
    if (start > end) {
        console.log(`Values checked: ${newArray.join(", ")}`); // Show all values that were checked
        return undefined; // Value not found
    }

    let mid = Math.floor((start + end) / 2);
    let midValue = array[mid];
    newArray.push(midValue); // Add the current middle value to the array

    if (value === midValue) {
        console.log(`Values checked: ${newArray.join(", ")}`); // Optionally, log here too if you want to see the path when the value is found
        return mid; // Value found
    } else if (value < midValue) {
        return binarySearch(array, value, start, mid - 1, newArray); // Pass newArray along to keep accumulating
    } else {
        return binarySearch(array, value, mid + 1, end, newArray); // Pass newArray along to keep accumulating
    }
}

const generatedArray = Array.from({ length: 101 }, (_, index) => index);
console.log(binarySearch(generatedArray, 15, 0, 99)); // Invoke with the array length corrected
