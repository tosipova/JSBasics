// write js porgramm to check two given numbers and return true if one of the number is 50 or their sum is 50




// const sumTwoNumbers = (x, y) => {
//     const result = x === 50 || y === 50 || x + y === 50;
//     return result;
// }
// console.log(sumTwoNumbers(25, 25));




// // Write a JavaScript program to compute the sum of the two given integers. If the two values are same,
// //  then returns triple their sum


// const comp = (x, y) => {
//     const sum = x + y
//     if (x === y) {
//         return sum * 3
//     }
//     return sum
// }
// console.log(comp(2, 5))

// // Task 3

// const checkPositiveNegative = (x, y) => {
//     if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
//         console.log(`one number is positive and another one is negative.`)
//     } else {
//         console.log('not at all')
//     }
// }
// checkPositiveNegative(5, -5)

// //  task 4


// const checkIsDevided = (number) => {
//    return (number % 3 === 0) || (number % 7 === 0)
// } 
// console.log(checkIsDevided(22))

//task 5

const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
    
  }




