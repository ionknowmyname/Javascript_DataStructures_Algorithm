var isPalindrome = function(s) {
    const toLowerAndAlphaNum = s.toLowerCase().split("").filter(el => el.at(0).match(/[a-z0-9]/)).join("")
    const toLowerAndAlphaNum2 = Array.from(s.toLowerCase()).filter(el => el.at(0).match(/[a-z0-9]/)).join("")

    console.log("toLowerAndAlphaNum --> " + toLowerAndAlphaNum);
    console.log("toLowerAndAlphaNum2 --> " + toLowerAndAlphaNum2);

    let leftPointer = 0
    let rightPointer = toLowerAndAlphaNum.length -1

    while(leftPointer <= rightPointer) {
        if(toLowerAndAlphaNum[leftPointer++] != toLowerAndAlphaNum[rightPointer--]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("Race a car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));