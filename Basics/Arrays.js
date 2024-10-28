// Write a JavaScript function to get the first element of an array. 
// Passing the parameter 'n' will return the first 'n' elements of the array.
// const arrreturn = (arr,n=1)=>{
//     return arr.slice(0,n)
// }
// console.log(arrreturn([2,3,0,-9,6,0,2],5))



// Write a JavaScript function to get the last element of an array. 
// Passing the parameter 'n' will return the last 'n' elements of the array.
// const last = (arr,n=arr.length-1)=>{
//     return arr.slice(n, arr.length)
// }
// console.log(last([2,3,0,-9,6,0,2]))



// Write a JavaScript program to find the most frequent item in an array.
// function frequent(arr) {
//     let count = 0
//     let prev_count = 1
//     let high_freq = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if(arr[i]==arr[j]){
//                 count+=1
//             }
//         }
//         if(count>prev_count){
//             prev_count=count
//             high_freq=arr[i]
//         }
//         count=0
//     }
//     return `The highest freq is of ${high_freq} of ${prev_count}`
// }
// console.log(frequent([2,6,3,9,4,1,2,6,9,6,7,2,6,5,5]))



// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// function removeDuplicate(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1)
//             }
            
//         }
//     }
//     return arr
// }
// console.log(removeDuplicate([2,6,3,9,4,1,2,6,9,6,7,2,5,5]))
