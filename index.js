// /write js porgramm to check two given numbers and return true if one of the number is 50 or their sum is 50


// const x = 25
// const y = 29

// const sum = function (x, y) {
//     const result = x === 50 || y === 50 || x + y === 50
//     return result
// }
// console.log(sum(x, y));

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same,
//  then returns triple their sum

// const x = 5
// const y = 5
// const comp = function (x, y) {
// if (x===y) {
//     return x*y*3
// } else return x*y
// }   
// console.log(comp(x,y))

// const x = 5
// const y = 5
// const proverka = function (x, y) {
//     if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
//         console.log(`one number is positive and another one is negative.`)
//     } else {
//         console.log('not at all')
//     }
// }
// proverka(x, y)

const number = 100
const check = function (number) {
    if ((number % 3 === 0) || (number % 7 === 0)) {
        console.log(`number is a multiple of 3 or a multiple of 7`)
    } else {
        console.log(`ìt is not true`)
    }
}
check(number)