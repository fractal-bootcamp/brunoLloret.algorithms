
function mergeSort(array: Array<number>): Array<any> {

    console.log("Dividing array:", array)
    // Base case: a single-element array is by definition sorted
    if (array.length < 2) {
        return array;
    }


    // depending on math floor or math ceil, the mid point will vary in arrays with an uneven number of items
    //     //in this case, with math ceil it was easier to see the dynamics of breaking in halves
    const mid = Math.floor(array.length / 2);
    //use mergeSort inside mergeSort (recursion)
    // console.log(mid)


    const left = mergeSort(array.slice(0, mid));  // Recursively sort the left half
    const right = mergeSort(array.slice(mid));   // Recursively sort the right half




    //you use merge inside mergeSort
    return merge(left, right);
}



// // then compare each element with the adjacent list to sort and merge the two adjacent lists.
// here we have two arrays: left and right
function merge(left: Array<number>, right: Array<number>): Array<any> {
    console.log("Merging:", left, right)
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays into a sorted one
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex++]);
        } else {
            sorted.push(right[rightIndex++]);
        }
    }


    // If there are leftovers in one of the arrays, add them to the end

    console.log("Merged to:", sorted);  // Logs the result of the merge

    sorted = sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    return sorted;
}

// Example usage:
const unsortedArray = [34, 7, 23, 49, 32, 5, 62];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);  // Output: [5, 7, 23, 32, 34, 62]
