function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let app, bapp;
    let countA = 0, countO = 0;
    
    for(let i=0; i < apples.length; i++){
        app = apples[i] + a;

        if(app >= s && app <= t){
            countA++;
        }
    }
    for(let i=0; i < oranges.length; i++){
        bapp = oranges[i] + b;

        if(bapp >= s && bapp <= t){
            countO++;
        }
    }
    console.log(countA);
    console.log(countO);

}


countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6]);