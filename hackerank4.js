function getWays(n, c) {
    // Write your code here
    
    let ways = new Array(n+1);
    for(let i=0; i<n+1; i++)
    {
        ways[i]=0;  // make ways have 0 at all indexes
    }
    ways[0] = 1;    // ways of giving zero change is 1


    for(let i=0; i < c.length; i++){
        for(let j=c[i]; j < n+1; j++){
            ways[j] += ways[j - c[i]];
        }
    }
    return ways[n];
}


let c2 = [1,2,3];

    
console.log("CHECK: ", getWays(4, c2));