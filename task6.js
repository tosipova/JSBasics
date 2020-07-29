

//Given a sequence of numbers, find the largest pair sum in the sequence.

//  let arr =[1,35,2,40,32]
//  arr.sort()
//  const sum = arr[arr.length-1]+arr[arr.length-2]

//  console.log(sum) 


function largestPairSum(numbers) {
    numbers.sort(function (a, b) { return b - a });
    return numbers[0] + numbers[1];
}

//   
// In this Kata, you will remove the left-most duplicates 
// from a list of integers and return the result.

// Count how often sign changes in array.

// const catchSignChange = arr => 0
// let signChanges = 0

// function mySort(arr) {
//     arr.sort()
//     arr.sort((a, b) => {
//         if (a < 0 && b > 0)
//             signChanges++
//     });
//     return signChanges
// };

// mySort([1, -3, -4, 0, 5])
// console.log(signChanges)


const catchSignChange = function(arr){
    var count=0;
    for (i=0; i<arr.length; i++){
      if ((arr[i]<0 && arr[i+1]>=0) || (arr[i]>=0 && arr[i+1]<0)){
      count++;
      }
    };
    return count;
  };
