// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.


function camelize(str){
  let newString = str.split('-')
  newString = newString.map(
    function(word, index){
      if(index === 0){
        return word.toLowerCase()
      }else{
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    }
  )
  return newString.join('')
}

console.log(camelize('This-Word')) 
console.log(camelize('This-Word-letter')) 
console.log(camelize('This-is-my-name')) 
console.log(camelize('This-IS-my-name')) 





// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
  return arr.filter(item => (a <= item && item <= b))
}

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)


// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

 let arr = [5, 2, 4, 3, 8, 1, 0];

 function filterRangeInPlace(arr,a,b){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < a || arr[i] > b){
      arr.splice(i,1)
      i--
    }
  }
 }

 filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

 alert( arr ); // [2, 4, 3, 1]




//  Sort in decreasing order
//  importance: 4
 let sortArr = [5, 2, 1, -10, 8];


sortArr.sort((a,b)=> b- b)
 
//  // ... your code to sort it in decreasing order
 
  alert( sortArr ); // 8, 5, 2, 1, -10


//   Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

 let arr1 = ["HTML", "JavaScript", "CSS"];

 function sorted1(arr1){
  return arr1.slice().sort()
 }

 let sortedValue = sorted1(arr1);

console.log( sortedValue ); // CSS, HTML, JavaScript
console.log( arr1 ); // HTML, JavaScript, CSS (no changes)








// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:
// let calc = new Calculator;

//  console.log( calc.calculate("3 + 7") ); // 10

function Calculator(){
  
 this.methods = {
  '+' : (a,b) => a + b,
  '-': (a,b) => a -b
 }
    
  this.calculate = function(str){
    let splitString = str.split(' '),
    a = +splitString[0],
    op = splitString[1],
    b = +splitString[2]
  

  if(isNaN(a) || isNaN(b)){
    return NaN
  } 
  return this.methods[op](a,b)
  }
  this.addMethod = function (name, func){
    this.methods[name] = func
  }
}






// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

 let powerCalc = new Calculator;
 powerCalc.addMethod("*", (a, b) => a * b);
 powerCalc.addMethod("/", (a, b) => a / b);
 powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate('3 * 6')
// console.log(powerCalc.methods)

 let result = powerCalc.calculate("2 ** 3");
  console.log( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.
// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.






// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

              // let john = { name: "John", age: 25 };
              // let pete = { name: "Pete", age: 30 };
              // let mary = { name: "Mary", age: 28 };

              // let users = [ john, pete, mary ];

              // let names = users.map(item => item.name)
              // console.log(names)

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary



// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

 let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
 let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
console.log(usersMapped)
// console.log( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.