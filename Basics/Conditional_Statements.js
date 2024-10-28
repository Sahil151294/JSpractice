// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
let chr = ""
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        chr+="* "
    }
    console.log(chr)
    chr=""
}



// Write a JavaScript program to sum 3 and 5 multiples under 1000.
// let sum = 0
// for (let index = 0; index < 1000; index++) {
//     if (index%3==0 && index%5==0) {
//         sum+=index
//     }
// }
// console.log(`The sum of multiples of 3 and 5 below 1000 is ${sum}`)