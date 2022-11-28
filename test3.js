

function first(a){

    let arr = a.toString().split("");

    console.log("Array int: ", arr);

    let sum = 0;

    for (let i = 0; i <= arr.length+1; i++) {
        sum += parseInt(arr.pop());
    }
    console.log("Sum: ", sum);

    return sum;
}


/* let x = 456;
let Y = first(x)
console.log("Y: ", Y); */

///////////////////////////////////////////////////////


function second(b){

    let arr = b.toString().split("");
    let num = arr.map((i) => Number(i));
    console.log(num);

    let sum = 0;
    for (let i=0; i<num.length; i++) {
        sum += num[i]
    }

    /* const toNumbers = arr => arr.map(Number);
    toNumbers(['1', '2', '3','4']);     // [1, 2, 3, 4] */

    return sum;
}

/* let Z = 789;
console.log("From 2nd: ", second(Z)); */



function checkIfMoreThanTwoDigits(N){
    // let N = second(45); 

    let arr = N.toString().split("");
    let num = arr.map((i) => Number(i));

    let sum = 0;
    if (arr[1] != null) { // more than 1 digit
        for (let i=0; i<num.length; i++) {
            sum += num[i]
        }
    
        return sum;
    }else{
        return N;
    }
}

console.log("CHECK: ", checkIfMoreThanTwoDigits(234));
console.log("CHECK 2: ", checkIfMoreThanTwoDigits(5));

function sumFunction(c){
    let sum = 0;

    return sum
}