/* function plusMinus(arr) {

   let n = arr.length;
   let plus = 0, minus = 0, ziro = 0;
   
   arr.forEach((x) => {
       if(x>0){
          plus++; 
       } 
       if(x<0){
          minus++; 
       }
       if(x=0){
          ziro++; 
       }
   });
   
   let Pluss = plus/n;
   let Minuss = minus/n;
   let Ziros = ziro/n;

//    return Minuss;

   console.log(Pluss.toPrecision(3));
   console.log(Minuss.toPrecision(3));
   console.log(Ziros.toPrecision(3));
}



let arr2 = [3, 4, -1, 0]

console.log("CHECK: ", plusMinus(arr2));
 */



// input.forEach(function (num) {
//     num = parseInt(num);
//     if (num < 0) { neg++ }
//     else if (num > 0) { pos++ }
//     else { zero++ }
// });




function staircase(n) {

    // commented out below works, and is the best solution
    /* for(let i = 1; i <= n; i++){

        console.log(" ".repeat(n-i) + "#".repeat(i));
      
    } */

    let output = "";

    for(let i = 1; i <= n; i++){
        for(let j=n-1; j >= i; j--){
            output += " ";
        }
       
        for(let k = 1; k <= i; k++){
            output += "#";
        }

        output += "\n"
    }

    console.log(output);

}

staircase(5);