
function countUniqueValues(arr){
    let count;
    let i = 0;
    if (arr.length) {
        console.log(arr.length);
        count = 1
    }
    for (j = 1; j < arr.length; ++j) {
        if (arr[i] !== arr[j]) {
            console.log(i, j, count);
            i = j
            ++count
        }

    }
    return count
}

console.log(countUniqueValues([1,1,1,1,1,1,1,1,2,2,2,3,3,3,3,3,4,5,5,7,7,9,9,9,9,9,10,12,12,12,12,12,12,12]));