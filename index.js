// function isPalindrome(word) {
//   // Write your algorithm here
// }

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;

function isPalindrome(word) {
  // Convert the word to lowercase (optional, if case sensitivity isn't required)
  // const lowercasedWord = word.toLowerCase();

  // Reverse the word and check if it matches the original
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

module.exports = isPalindrome;
