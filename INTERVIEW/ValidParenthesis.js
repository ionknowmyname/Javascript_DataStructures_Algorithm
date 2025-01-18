
// TURING JAVASCRIPT & PYTHON INTERVIEW


// MY HASHMAP IMPL. DURING INTERVIEW
/* function isValid(s) {
  let arr = [];
    const holding = s.map((r) => arr.push(r));

    let mMap = new Map();

    for (i = 0; i < arr.length; i++) {
        const hold2 = arr[i];
        const hold3 = arr[i-1];
        switch:
            '('
            '['
            '{'
                mMap[hold2] = mMap.get(hold2) ? mMap.get(hold2) + 1 : 1;
            ')'
                if(hold3 == '(') mMap[hold2] = mMap.get(hold2) - 1;
                if(hold3 != '(') return false;
            '}'
                if(hold3 == '{') mMap[hold2] = mMap.get(hold2) - 1;
                if(hold3 != '({') return false;
            ']'
                if(hold3 == '[') mMap[hold2] = mMap.get(hold2) - 1;
                if(hold3 != '[') return false;
                


    }

    return mMap.length == 0;
} */

// USING HASHMAP FROM CHATGPT
function isValid2(s) {
  let mMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const previous = s[i - 1];

    switch (current) {
      case '(':
      case '{':
      case '[':
        // Increment the count for the current bracket
        mMap.set(current, (mMap.get(current) || 0) + 1);
        break;

      case ')':
        // Decrement the count for the matching opening bracket
        if (previous !== '(' || !mMap.get('(')) return false;
        mMap.set('(', mMap.get('(') - 1);
        break;

      case '}':
        if (previous !== '{' || !mMap.get('{')) return false;
        mMap.set('{', mMap.get('{') - 1);
        break;

      case ']':
        if (previous !== '[' || !mMap.get('[')) return false;
        mMap.set('[', mMap.get('[') - 1);
        break;

      default:
        return false; // If an invalid character is encountered
    }
  }

  // Check if all bracket counts are zero
  for (let [key, value] of mMap) {
    if (value !== 0) return false;
  }

  return true;
}


// USING STACK FROM CHATGPT
// stack is best approach, Map fails last example of ([]) coz we checking previous char 
function isValid3(s) {
  const stack = [];
  
  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    // If the character is a closing bracket
    if (char in matchingBrackets) {
      // Check if the top of the stack matches the corresponding opening bracket
      if (stack.length > 0 && stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop(); // Pop the opening bracket from the stack
      } else {
        return false; // Invalid if no match or stack is empty
      }
    } else {
      // If it's an opening bracket, push it to the stack
      stack.push(char);
    }
  }

  // If the stack is empty, the string is valid
  return stack.length === 0;
}

// MY STACK IMPL.
// I'm rolling with this
function isValid4(s) {
  const stack = [];


  for (let char of s) {
    switch (char) {
      case "(":
      case "{":
      case "[":
        stack.push(char);
        break;

      case ")":
        if(stack.length == 0 || stack.pop() != '(') {
          // if the stack is empty then it means string has no open bracket.
          return false;
        }
        break;

      case "}":
        if (stack.length == 0 || stack.pop() != "{") {
          return false;
        }
        break;

      case "]":
        if (stack.length == 0 || stack.pop() != "[") {
          return false;
        }
        break;
    }
  }

  // If the stack is empty, the string is valid
  // return stack.length === 0;
  return stack.length === 0;
}

console.log(isValid4("()")); // Output: true
console.log(isValid4("()[]{}")); // Output: true
console.log(isValid4("(]")); // Output: false
console.log(isValid4("([])")); // Output: true
