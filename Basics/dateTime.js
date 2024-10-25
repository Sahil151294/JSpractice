// WAP in JS to get current time
// const d = new Date();
// console.log(`The time is ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)


// WAP in JS to get area of a triangle with sides 5,6,7
// let a = 5
// let b = 6
// let c = 7
// let s = (a+b+c)/2
// let area = Math.sqrt(s*((s-a)+(s-b)+(s-c)))
// console.log(`The area is ${area}`)


// Write a JavaScript program to create another string by adding "Py" in front of a given string. 
// If the given string begins with "Py" return the original string. 
// function addPy(str){
//     if(str.slice(0,2)=="Py"){
//         return str
//     } 
//     else {
//         return "Py"+str
// }
// }
// console.log(addPy("P1ython"))


// Write a JavaScript program to remove a character 
// at the specified position in a given string and return the modified string.  
// function trimmedstr(str, n){
//     return str.slice(0,n)+str.slice(n+1,str.length)
// }
// console.log(trimmedstr("0123456789",9))



// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
// function multiple(n){
//     if(n%3==0 || n%7==0) return true
//     return false
// }
// console.log(multiple(25))



// Write a JavaScript program to find the closest value to 100 from two numerical values.
// let closest = (a,b) => {
//     if(Math.abs(100-a)<Math.abs(100-b)) return a
//     return b
// }
// console.log(closest(10, 1111))


// Write a JavaScript program that checks whether the last digit of three positive integers is the same.
// let lastDigit=(a,b,c)=>{
//     if(a%10==b%10 && b%10==c%10) return true
//     return false
// }
// console.log(lastDigit(23,343112,45632))

// Write a JavaScript program to reverse a given string.
// function reversestr(str){
//     return str.split('').reverse().join('')
// }
// console.log(reversestr("Sahil Sengupta"))


// Write a JavaScript program to count the number of vowels in a given string
// function countVowels(str){
//     temp=str.toLowerCase().split('')
//     console.log(temp)
//     let count = 0
//     for (let cha of temp) {
//             if(cha=='a' || cha=='e' || cha=='i' 
//                 || cha=='o' || cha=='u'){
//                     count+=1
//                 }
//     }
//     return count
// }
// console.log(countVowels("Sahil Sengupta"))


// Write a JavaScript program to create a new 
// string without the first and last characters of a given string. 
// function newstr(str1){
//     return str1.slice(1,str1.length-1)
// } 
// console.log(newstr("SAAS"))


// Write a JavaScript program to find the maximum difference 
// between any two adjacent elements of a given array of integers. 
const arr=[10, 15, 21,28, 39, 54, 56, 64]
let diff = 0
let pos = 0
for (let index = 0; index < arr.length-1; index++) {
    if(Math.abs(arr[index]-arr[index+1])>diff){
        diff=Math.abs(arr[index]-arr[index+1])
        pos = index
    }
    console.log(pos)
}
console.log(`The largest diff is between ${pos} and ${pos+1}`)