
function validAnagram(string1, string2){
    const arr1 = string1.split('').sort().join();
    const arr2 = string2.split('').sort().join();
    console.log(arr1, arr2);
    if (arr1 === arr2) {
        return true
    } else return false
}

console.log(validAnagram('qwytteqrtur', 'werqqturtty'));