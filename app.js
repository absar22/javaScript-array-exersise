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

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)