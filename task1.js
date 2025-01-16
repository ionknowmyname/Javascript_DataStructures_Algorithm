/* 
    check any number, add all its digits together, if they sum up to more than 1 digits, add the digits 
*/


function sumFunction(numArray){
    let sum = 0;

    for (let i=0; i<numArray.length; i++) {
        sum += numArray[i]
    }

    return sum; 
}

function checkIfMoreThanTwoDigits(N){

    let arr = N.toString().split("");
    let num = arr.map((i) => Number(i));

    let firstSum = sumFunction(num);
    console.log("firstSum: ", firstSum);

    let arr2 = firstSum.toString().split("");
    let num2 = arr2.map((i) => Number(i));



    if (arr2[1] != null) { // more than 1 digit
    
        return sumFunction(num2);
    }else{
        return num2;
    }
}

console.log("CHECK: ", checkIfMoreThanTwoDigits(834));
console.log("CHECK 2: ", checkIfMoreThanTwoDigits(5));