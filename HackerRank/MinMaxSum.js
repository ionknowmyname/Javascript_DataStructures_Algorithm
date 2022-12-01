function miniMaxSum(arr) {
    // Write your code here
    
    let min = 0, max = 0;
    let sor = arr.sort();
    console.log("Sorted array: ", arr);
    

    for (let i=0; i<sor.length-1; i++) {
        min += sor[i]
    }

    let rev = arr.reverse();
    console.log("reversed array: ", arr);

    for (let j=0; j<rev.length-1; j++) {
        max += rev[j]
    }
    
    
console.log(min + " " + max);
}

let arr2 = [5,4,3,2,1]

miniMaxSum(arr2)