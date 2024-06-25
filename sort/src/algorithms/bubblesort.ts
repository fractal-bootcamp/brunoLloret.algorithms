



export function bubblesort(array: number[], callback?: (newArr: number[]) => any): number[] {
    const newArray = structuredClone(array)
    // 1. compare and swap for each index
    let swapped = false
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] > newArray[i + 1]) {
            [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
            swapped = true
            if (callback) callback(newArray)
        }
    }

    // to be defined: swapped and newArray
    if (swapped) return bubblesort(newArray, callback);
    return newArray
}
