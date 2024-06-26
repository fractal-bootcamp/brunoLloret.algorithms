'use client'


import { useState, useEffect } from "react";




const INITIAL_ARRAY: number[] = [34, 7, 23, 49, 32, 5, 62];


interface Node {

    finalArray: number[];

    metadata: {


    },

}


input: array to organize

function wrapFunction<T>(func: (input: T, captureState: (data: T, description: string) => void) => T): (input: T) => DataState<T>[]

function wrapFunction<T>

    (mergeSort:

        (input: T,

            captureState: (data: ?, metadata: number[]??) => void) => T
        //a callback function that you'll use to capture the state of the data at different points in the function's execution.
    ):

    (input: T) => DataState<T>[]
// This means wrapFunction returns a new function that, when called with an input of type T, returns an array of DataState<T>.
// Each DataState<T> object contains a description and a snapshot of the data at a specific point in time.


{
    return function (input: T): DataState<T>[] {
        const states: DataState<T>[] = []; // Array to store each state

        // Helper function to capture states
        function captureState(data: T, description: string) {
            states.push({ stepDescription: description, data: JSON.parse(JSON.stringify(data)) }); // Deep copy to capture the state
        }

        // Call the original function with the helper
        const result = func(input, captureState);

        // Optionally, you might want to capture the final state
        captureState(result, "Final result");

        return states;
    };
}




const divideAndConquer = (array: Array<number>): Array<number> => {



    return (

        <>


        </>

    )

}





function mergeSort(array: number[], captureState: (data: number[], history: number[][] => void)): number[] {

    captureState( array, history.concat(array) )
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
export function merge(left: Array<number>, right: Array<number>): Array<any> {

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





//implement mergesort function and make it visible in its changes of states

// from the structure that is created at the terminal thanks to the console.log, we see the following:


//LEVEL ZERO // Dividing array: [
//     34, 7, 23, 49,
//     32, 5, 62
//   ]

//LEVEL ONE: LEFT HALF
//   Dividing array: [ 34, 7, 23 ]


//LEVEL TWO: LEFT HALF OF LEFT HALF
//   Dividing array: [ 34 ]


// LEVEL TWO: RIGHT HALF OF LEFT HALF
//   Dividing array: [ 7, 23 ]


//LEVEL THREE: LEFT HALF OF RIGHT HALF OF LEFT HALF
//   Dividing array: [ 7 ]

//LEVEL THREE: RIGHT HALF OF RIGHT HALF OF LEFT HALF
//   Dividing array: [ 23 ]

//MERGING LEVEL THREE: WHICH IS SMALLER?
//   Merging: [ 7 ] [ 23 ]
//   Merged to: [ 7 ]

//MERGING LEVEL THREE WITH LEVEL TWO LEFT HALF OF LEFT HALF: WHICH IS SMALLER?
//   Merging: [ 34 ] [ 7, 23 ]
//   Merged to: [ 7, 23 ]

//LEVEL ONE: RIGHT HALF
//   Dividing array: [ 49, 32, 5, 62 ]

//LEVEL TWO: LEFT HALF OF RIGHT HALF
//   Dividing array: [ 49, 32 ]

//LEVEL THREE: LEFT HALF OF LEFT HALF OF RIGHT HALF
//   Dividing array: [ 49 ]

//LEVEL THREE: RIGHT HALF OF LEFT HALF OF RIGHT HALF
//   Dividing array: [ 32 ]

//MERGING LEVEL THREE: WHICH IS SMALLER?
//   Merging: [ 49 ] [ 32 ]
//   Merged to: [ 32 ]

//LEVEL TWO: RIGHT HALF OF RIGHT HALF
//   Dividing array: [ 5, 62 ]

//LEVEL THREE: LEFT HALF OF RIGHT HALF OF RIGHT HALF
//   Dividing array: [ 5 ]

//LEVEL THREE: RIGHT HALF OF RIGHT HALF OF RIGHT HALF
//   Dividing array: [ 62 ]

//MERGING LEVEL THREE: WHICH ONE IS SMALLER?
//   Merging: [ 5 ] [ 62 ]
//   Merged to: [ 5 ]

//MERGING LEVEL TWO: 
//   Merging: [ 32, 49 ] [ 5, 62 ]
//   Merged to: [ 5, 32, 49 ]

//MERGING LEVEL ONE:
//   Merging: [ 7, 23, 34 ] [ 5, 32, 49, 62 ]
//   Merged to: [ 5, 7, 23, 32, 34 ]

//MERGING LEVEL ZERO:
//   [
//      5,  7, 23, 32,
//     34, 49, 62
//   ]












//LEVEL ZERO // Dividing array: [
//     34, 7, 23, 49,
//     32, 5, 62
//   ]

//LEVEL ONE: LEFT HALF
//   Dividing array: [ 34, 7, 23 ]


//LEVEL TWO: LEFT HALF OF LEFT HALF
//   Dividing array: [ 34 ]


// LEVEL TWO: RIGHT HALF OF LEFT HALF
//   Dividing array: [ 7, 23 ]


//LEVEL THREE: LEFT HALF OF RIGHT HALF OF LEFT HALF
//   Dividing array: [ 7 ]

//LEVEL THREE: RIGHT HALF OF RIGHT HALF OF LEFT HALF
//   Dividing array: [ 23 ]

//MERGING LEVEL THREE: WHICH IS SMALLER?
//   Merging: [ 7 ] [ 23 ]
//   Merged to: [ 7 ]

//MERGING LEVEL THREE WITH LEVEL TWO LEFT HALF OF LEFT HALF: WHICH IS SMALLER?
//   Merging: [ 34 ] [ 7, 23 ]
//   Merged to: [ 7, 23 ]



//LEVEL ONE: RIGHT HALF
//   Dividing array: [ 49, 32, 5, 62 ]

//LEVEL TWO: LEFT HALF OF RIGHT HALF
//   Dividing array: [ 49, 32 ]

//LEVEL THREE: LEFT HALF OF LEFT HALF OF RIGHT HALF
//   Dividing array: [ 49 ]

//LEVEL THREE: RIGHT HALF OF LEFT HALF OF RIGHT HALF
//   Dividing array: [ 32 ]

//MERGING LEVEL THREE: WHICH IS SMALLER?
//   Merging: [ 49 ] [ 32 ]
//   Merged to: [ 32 ]

//LEVEL TWO: RIGHT HALF OF RIGHT HALF
//   Dividing array: [ 5, 62 ]

//LEVEL THREE: LEFT HALF OF RIGHT HALF OF RIGHT HALF
//   Dividing array: [ 5 ]

//LEVEL THREE: RIGHT HALF OF RIGHT HALF OF RIGHT HALF
//   Dividing array: [ 62 ]

//MERGING LEVEL THREE: WHICH ONE IS SMALLER?
//   Merging: [ 5 ] [ 62 ]
//   Merged to: [ 5 ]

//MERGING LEVEL TWO:
//   Merging: [ 32, 49 ] [ 5, 62 ]
//   Merged to: [ 5, 32, 49 ]

//MERGING LEVEL ONE:
//   Merging: [ 7, 23, 34 ] [ 5, 32, 49, 62 ]
//   Merged to: [ 5, 7, 23, 32, 34 ]

//MERGING LEVEL ZERO:
//   [
//      5,  7, 23, 32,
//     34, 49, 62
//   ]