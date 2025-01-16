function compareTriplets(a, b) {
    // Write your code here
    let x = 0, y = 0;
    let arr = [x,y];
    
    for(let i = 0; i<a.length; i++){
        // for(let j = 0; j<a.length; j++){
            if(a[i]>b[i]){
                x++;
                arr = [x,y];
            }
            if(a[i]<b[i]){
                y++;
                arr = [x,y];
            }
            // if(a[i]==b[i]){
            //     x += 0;
            //     y += 0;
            // }
        // }
    }
    
    return arr;

}

x = [4,5,6]; 
y = [3, 5, 7]
console.log("CHECK: ", compareTriplets(x, y));