


export function binarySearch(
    array: Array<number>,
    value: number,
    start = 0,
    end = array.length - 1,
    history: number[] = []
): [number, number[]] | undefined {

    if (start > end) {
        return undefined; // Value not found
    }

    let mid = Math.floor((start + end) / 2);
    let midValue = array[mid];

    history.push(mid)

    if (value === midValue) {
        return [mid, history]


    } else if (value < midValue) {

        // // console.log(midValue)
        // newArray.push(midValue)
        // console.log(midValue)


        // console.log(`loging in 2 ${newArray}`)
        return binarySearch(array, value, start, mid - 1, history);

    } else {

        // // console.log(midValue)
        // newArray.push(midValue)
        // console.log(midValue)


        // console.log(`loging in 3 ${newArray}`)
        return binarySearch(array, value, mid + 1, end, history);

    }
}


// const generatedArray = Array.from({ length: 101 }, (_, index) => index);


// console.log(binarySearch(generatedArray, 4, 0, 99))
