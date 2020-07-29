// // Given two integers a and b, which can be positive or negative,
// // find the sum of all the numbers between including them too and return it. 
// //If the two numbers are equal return a or b.
// // Note: a and b are not ordered!

// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }

// //  Task 3,Given 2 strings, a and b, return a string of the form short+long+short,
// //  with the shorter string on the outside and the longer string on the inside. 
// // The strings will not be the same length, but they may be empty ( length 0 ).

// function solution(a, b) {
//     return a.length < b.length ? a + b + a : b + a + b
//   }


// // task 5
// //Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.



// const quarterOf = (month) => {
//     if (month <= 3) {
//       return 1
//     } else if (month <= 6) {
//       return 2
//     } else if (month <= 9) {
//       return 3
//     } else if (month <= 12) {
//       return 4
//     }

//   }




// task 6
// function getSum(a, b) {

//     if (a === b) {
//         return a;
//     } else {
//         const start = a > b ? b : a
//         const end = start === a ? b : a
//         console.log(start, end)
//         let sum = 0
//         let currentNumber = start
//         while (currentNumber <= end) {
//             sum = sum + currentNumber
//             currentNumber++
//         }
//         return sum
//     }
// }



// getSum(0, -1);
// getSum(0, 1);


// //task 10
// // The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// // The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// // If the score < 0, return 0.

// function checkExam(array1, array2) {
//     var score = 0;

//       for (var i = 0; i < array1.length; i++){

//         if (array1[i] == array2[i]) {

//         score += 4;

//         }

//         else if (array2[i] === ""){

//           score += 0

//         }


//         else {

//         score -= 1

//         }


//       }

//       if (score < 0) {

//         score = 0

//       }  

//      return score

//     }

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4



function points(games) {

  var sum = 0;
  for (var i = 0; i < games.length; ++i) {
    if (games[i][0] > games[i][2])
      sum += 3;
    if (games[i][0] == games[i][2])
      sum += 1;
  }
  return sum;
}
points(["3:1", "2:2", "0:1", "4:2"])

//   simple, return spaces from the string and print result of it

function noSpace(x) {
  var result = ""
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
}