// Write a JavaScript function that reverses a number.
// function reverseNumber(num){
//     let temp = num
//     let newNum = 0
//     let mod = 0
//     while(temp!=0){
//         mod = temp%10
//         temp=Math.floor(temp/10)
//         newNum=newNum*10+mod
//     }
//     return newNum
// }
// console.log(`Reversed Number is ${reverseNumber(12345)}`)


// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// let palin=(str)=> {
//     const newstr=str.split('').reverse().join('')
//     if(newstr==str){
//         return true
//     }
//     return false
// }
// console.log(`Passed string is a palindrome ? ${palin("madam")}`)


// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// let longWord = (str)=>{
//     let words = str.split(' ')
//     let len = words[0].length
//     let word = words[0]
//     for (let i = 1; i < words.length; i++) {
//         if(len<words[i].length){
//             len=words[i].length
//             word=words[i]
//         }
//     }
//     return word
// }
// console.log(`The longest word is ${longWord("I love my India")}`)


// Write a JavaScript function to extract unique characters from a string.
function unique(str){
    str=str.split('')
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if(str[i]==str[j]){
                str.splice(j,1)
            }
        }
    }
    return str.join('')
}
console.log(unique("Lazy Lazy dog died"))