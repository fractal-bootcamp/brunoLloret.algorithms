

//FOR THE PIVOT: create a function that goes through the values of the array and picks the value that is more similar
//to the average value of the sum of the values in the array

//--First: go through the array and get the values and add them together, then create the average value by dividing the total by the array.length
//--Second: go through the array and take an index, then compare it to the next one and the average, whichever is closer to the average, store it
//iterate through the entire array with this logic, and then get the value and the index of the pivot

//Once the pivot is chosen:
// create a function that iterates through the array and organizes a half lesser than pivot (i) on the first
//half of the array, and a half more than i on the second half of the array

//-- We create three new empty arrays, array1 contains the lesser half, array2 the upper half, arraypivots contains the values that are equal to pivot.
// -We go with the pivot and compare each value at each index of the array. If it's bigger than pivot, goes to array2, if not, goes to array1,
//- Now that we have stored bigger than pivot in array2, lesser than pivot in array1, and equal than pivot in arraypivots, we have to iterate
//in array1 and array2.

//So you take array1 and apply the same

//once this is done, the pick a pivot in the first half, and repeat the previous operation
//break: when all the elements in the array are organized in ascending sense of values

//once this is done, pick a pivot in the second half, and repeat the operation

//finally, check in the entire array that they are organized in ascending




//Question, then, is a general approach that is applied to other cases until each value of array[0-n] is so that 0<1<...n

//general approach:
//you take an array, calculate the ideal pivot, and divide the array,
// apply it's value as comparison point, and re-arrange according to it


// let array = [...n];

// let pivot[i];

// let newArray = [];




//Pivot

// let sum = 0;

// // let array1: Array<number> = [0, 1, 2, 3, 4, 5]

// function summatory(array: number[]) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]

//     }
//     return sum;
// }




// function average(arr: number[]) { summatory(arr) / arr.length; }


//--Second: go through the array and take an index, then compare it to the next one and the average, whichever is closer to the average, store it
//iterate through the entire array with this logic, and then get the value and the index of the pivot

function definePivot(array: number[]) {


    let pivot = 0;

    function summatory(arr: number[]) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]

        }
        return sum;

    }

    let average: number = summatory(array) / array.length;


    //This was completely missing!!! :

    // Variable to keep track of the minimum difference and the corresponding pivot value
    let minDifference = Number.MAX_VALUE; // Initialize to the largest possible number



    for (let i = 0; i < array.length; i++) {

        //     let newArray1: Array<number> = [];
        //     let newArray2: Array<number> = [];
        //     newArray1.push(array[i], average);
        //     newArray2.push(array[i + 1], average);

        //     let arrangedNewArray1 = BubbleSort(newArray1);
        //     let arrangedNewArray2 = BubbleSort(newArray2);

        //     if (Math.abs(arrangedNewArray1[1] - arrangedNewArray1[0]) > Math.abs(arrangedNewArray2[1] - arrangedNewArray2[0])) {
        //         if (arrangedNewArray2[1] !== average) {
        //             pivot = arrangedNewArray2[1]
        //         }
        //     }

        //     else

        //         if (arrangedNewArray1[1] !== average) {
        //             pivot = arrangedNewArray1[1]
        //         }



        // }

        // return pivot


        // Iterate through the array to determine the pivot
        for (let i = 0; i < array.length; i++) {
            // Calculate the absolute difference from the average
            let difference = Math.abs(array[i] - average);

            // Update the pivot if the current difference is smaller
            if (difference < minDifference) {
                minDifference = difference; // Update minDifference
                pivot = array[i]; // Update pivot to the current element
            }
        }

        return pivot;

    }
}

// const arraysToTest = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [-10, -5, 0, 5, 10],
//     [3, 3, 3, 6, 6, 6, 9, 9, 9],
//     [8, 1, 6, 3, 7, 2, 5, 4],
//     [1, 1000, 2, 999, 3, 998, 4, 997, 5, 996]
// ];

// arraysToTest.forEach(array => {
//     console.log(`Array: ${array}`);
//     console.log(`Pivot: ${definePivot(array)}`);
// });



//Once the pivot is chosen:
// create a function that iterates through the array and organizes a half lesser than pivot (i) on the first
//half of the array, and a half more than i on the second half of the array

//-- We create three new empty arrays, array1 contains the lesser half, array2 the upper half, arraypivots contains the values that are equal to pivot.
// -We go with the pivot and compare each value at each index of the array. If it's bigger than pivot, goes to array2, if not, goes to array1,
//- Now that we have stored bigger than pivot in array2, lesser than pivot in array1, and equal than pivot in arraypivots, we have to iterate
//in array1 and array2.

//So you take array1 and apply the same

//once this is done, the pick a pivot in the first half, and repeat the previous operation
//break: when all the elements in the array are organized in ascending sense of values

//once this is done, pick a pivot in the second half, and repeat the operation

//finally, check in the entire array that they are organized in ascending

function arrangeArray(array: Array<number>, pivot: number): { lesserHalf: number[], pivotArray: number[], upperHalf: number[] } {
    let lesserHalf: number[] = [];
    let upperHalf: number[] = [];
    let pivotArray: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            lesserHalf.push(array[i]);
        } else if (array[i] > pivot) {
            upperHalf.push(array[i]);
        } else {
            pivotArray.push(array[i]);
        }
    }

    return { lesserHalf, pivotArray, upperHalf };
}

// Test arrangeArray function
const testArray = [8, 1, 6, 3, 7, 2, 5, 4];
const pivotValue = 5;
console.log(arrangeArray(testArray, pivotValue));



// // Example Test Cases
// const testCases = [
//     { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pivot: 5, expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
//     { array: [-10, -5, 0, 5, 10], pivot: 0, expected: [-10, -5, 0, 5, 10] },
//     { array: [3, 3, 3, 6, 6, 6, 9, 9, 9], pivot: 6, expected: [3, 3, 3, 6, 6, 6, 9, 9, 9] },
//     { array: [8, 1, 6, 3, 7, 2, 5, 4], pivot: 5, expected: [1, 4, 3, 2, 5, 6, 7, 8] },
//     { array: [1, 1000, 2, 999, 3, 998, 4, 997, 5, 996], pivot: 500, expected: [1, 2, 3, 4, 5, 1000, 999, 998, 997, 996] },
// ];

// testCases.forEach(({ array, pivot, expected }) => {
//     const total: Array<number> = arrangeArray(pivot, array);
//     console.log(`Array: ${array}, Pivot: ${pivot}`);
//     console.log(`Result: ${total}`);
//     console.log(`Expected: ${expected}`);
//     console.log(total.join(',') === expected.join(',') ? 'Test passed' : 'Test failed');
// });


function Quicksort(array: Array<number>): Array<number> {
    function definePivot(array: number[]): number {
        let pivot = 0;

        function summatory(arr: number[]): number {
            return arr.reduce((sum, num) => sum + num, 0);
        }

        let average: number = summatory(array) / array.length;
        let minDifference = Number.MAX_VALUE;

        for (let i = 0; i < array.length; i++) {
            let difference = Math.abs(array[i] - average);

            if (difference < minDifference) {
                minDifference = difference;
                pivot = array[i];
            }
        }

        return pivot;
    }

    function arrangeArray(array: Array<number>, pivot: number): { lesserHalf: number[], pivotArray: number[], upperHalf: number[] } {
        let lesserHalf: number[] = [];
        let upperHalf: number[] = [];
        let pivotArray: number[] = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] < pivot) {
                lesserHalf.push(array[i]);
            } else if (array[i] > pivot) {
                upperHalf.push(array[i]);
            } else {
                pivotArray.push(array[i]);
            }
        }

        return { lesserHalf, pivotArray, upperHalf };
    }

    function quicksortHelper(arr: number[]): number[] {

        //this is the minimum case, a pair in the index
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = definePivot(arr);
        const { lesserHalf, pivotArray, upperHalf } = arrangeArray(arr, pivot);

        return [...quicksortHelper(lesserHalf), ...pivotArray, ...quicksortHelper(upperHalf)];
    }

    return quicksortHelper(array);
}

// Test Quicksort function
const arraysToTest = [
    [3, 6, 8, 10, 1, 2, 1],
    [1, 4, 5, 6, 1, 4, 5, 6],
    [9, -3, 5, 2, 6, 8, -6, 1, 3],
    [5, 5, 5, 5, 5],
    [],
    [10]
];

arraysToTest.forEach(array => {
    console.log(`Original array: ${array}`);
    console.log(`Sorted array: ${Quicksort(array)}`);
});
