/* function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0, count = 0;
    for (let i=0; i<candles.length; i++) {
        if(candles[i] > max){
            max = candles[i];
            count=1; 
            
        }else if (candles[i] == max){
            count++;
        }
    }
    
    console.log(count);

}

candles2 = [3, 2, 1, 3];

birthdayCakeCandles(candles2) */

/* 
function timeConversion(s) {
    // Write your code here
    
    let time = "";
    let sub = s.substring(8,9)
    console.log(sub);
    if(sub == "A"){
        console.log(s.substring(0,8));
    }
    if(sub == "P"){
        let hours = s.substring(0, 2);
        let newhours = parseInt(hours)+12;
        console.log(newhours + s.substring(2,8));
        // [newhours, s.substring(2,8)].join();
    }


}


let si = '07:05:45PM';
    timeConversion(si)

 */






    function angryChildren(k, packets) {
        // Write your code here
        
        
        let n = packets.length;
        packets.sort();
        
        // finds sum of abs values
         let s = BigInt(0);
       //let  s = BigInt(100000000);


        /* for(let i=1; i <= k; i++){ // k is no. of children
            s += packets[i] * (2*i - k);
        } */

        for(let i=0; i < k; i++){ // k is no. of children
            s += BigInt(Math.abs(packets[i] - packets[i+1]));


        } 
        console.log("S: ", s);
        return s;

    }


    let packets2 = [3,3,4,5,7,9,10];

    
    console.log("CHECK: ", angryChildren(3, packets2));