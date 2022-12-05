/* 
    if string s is a subsequence of t; i only increases when s char is present
    in t, so if i==s.length, it means all chars in s were found in t in the 
    right order
*/

var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while(i<s.length && j<t.length){
        if(s[i]!=t[j]){
            j++;
        }else{
            i++;
            j++;
        }
    }
    //return (i==s.length)?true:false;
    return i == s.length
};


/* 
    again i only increases if s char found in similar spot in t, j increases on each iteration,
    so if i gets to less than s.length first, we break out, that return true, that means all the char in
    s were found in the right spots so its a subsequences. If we don't get to i < s.length, then we'd get to 
    j === t.length first and return false, coz the loop would keep running non stop, and then j would eventually
    get to t.length coz its increasing on each iteration
*/

let isSubsequence2 = function(s, t) {
    let i=0;
    let j=0;
    while(i<s.length){
        if(j===t.length){
            return false;
        }
        if(s[i]===t[j]){
            i++;
        }
        j++;
    }
return true;
};

