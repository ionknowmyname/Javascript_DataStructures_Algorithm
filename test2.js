let a = 456;
// let i = 0
let sum = 0;
// let b = a.toString().split('');
// for (i = 0; i < b.length; i++) {
//     sum+=a[i];
// }

// console.log(a);
// console.log(sum);



while (a) {
    sum += a % 10;
    value = Math.floor(a / 10);
}

console.log(sum);