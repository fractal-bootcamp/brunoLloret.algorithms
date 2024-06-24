

//we take an array and organize it's elements on an ascending way

// import { number } from "prop-types";



function BubbleSort(array: Array<number>) {
    //we do a shallow copy of array to keep the original one for future display purposes
    let copyArray = [...array];
    let hasSwapped = false;
    //function for swapping elements between two positions inside an array
    //example: array 0,1,2; pos1=1, pos2=2
    function swapElements(arr: number[], pos1: number, pos2: number): number[] {

        //we declare a const temp to store the first position from the array
        // const temp = 1

        const temp = arr[pos1];


        //we then store the value of the second position in the first position
        // now what it was 1 it's 2
        arr[pos1] = arr[pos2];
        //arr is now= 0,2,2

        //we finally store the value of the second position in the array tem
        // now the value in temp (1) is stored in position 2.
        arr[pos2] = temp;
        //arr(0,2,2) = arr(0,2,1)

        return arr;
        //return arr(0,2,1)
    }


    for (let i = 0; i < copyArray.length - 1; i++) {
        //we will iterate throughout the entire array's length

        let hasSwapped = false;


        for (let j = 0; j < copyArray.length - 1; j++) {
            //we kind of repeat the function
            if (copyArray[j] > copyArray[j + 1]) {
                copyArray = swapElements(copyArray, j, j + 1)
                // we want to document this progressive change by creating an array of arrays:
                // supportArray[i][i]= copyArray

                // console.log(array[j], array[j + 1])
                // console.log(copyArray[j], copyArray[j + 1])
                hasSwapped = true;
                console.log(copyArray)

            }

        }

        if (!hasSwapped) break;
    }

    return copyArray



}




let array1 = [5, 2, 9, 1, 5, 6];
console.log(BubbleSort(array1))

let array2 = [3, 3, 2, 1, 5, 4, 5, 4];
let array3 = [-3, -1, -7, 4, 2, 0, 5, -2];
let array4 = [1, 1, 1, 1, 1, 1];
let array5 = [12, 11, 13, 5, 6, 7, 1, 3, 10, 8, 9, 2, 4, 0, -1, -2, -3, 14, 15, 16];
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array8 = [42];
let array9: Array<number> = [];
let array10 = [3.1, 2.4, 5.6, 1.2, 4.8, 0.3];


console.log(BubbleSort(array2))
console.log(BubbleSort(array3))
console.log(BubbleSort(array4))
console.log(BubbleSort(array5))
console.log(BubbleSort(array6))
console.log(BubbleSort(array8))
console.log(BubbleSort(array9))
console.log(BubbleSort(array10))

