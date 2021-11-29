function areThereDuplicates(arr){
    if (arr.length) {
        const arrSorted = arr.sort();
        for (j = 1; j < arrSorted.length; ++j) {
            let i = j-1;
            if (arrSorted[i] === arrSorted[j]) {
                return true
            }
        }
    }
    return false
}

console.log(areThereDuplicates([1,2,3,4,7]));