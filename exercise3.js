
function sameFrequency(int1, int2) {
    const value1 = int1.toString().split('').sort().join();
    const value2 = int2.toString().split('').sort().join();
    console.log(value1, value2);
    if (value1 === value2) {
        return true
    } else return false
}

console.log(sameFrequency(123321, 231312));