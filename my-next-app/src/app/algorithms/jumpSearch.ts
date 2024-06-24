

function binarySearch(array: Array<number>, value: number) {
    let copyArray = [...array]
    let x = value

    if (x > Math.round(array.length / 2)) {
        let chunk = Math.round(array.length / 2);
        let arr = array;
        let arr2 = arr.slice(chunk, chunk + arr.length)
        let newArray = arr2

        binarySearch(arr2, value)
    }

    if (x === Math.round(array.length / 2)) {

        return x
    }

    if (x < Math.round(array.length / 2)) {
        let arr = array;
        let arr2 = arr.slice(0 + Math.round(arr.length / 2))
        let newArray = arr2

        binarySearch(arr2, value)

    }

}