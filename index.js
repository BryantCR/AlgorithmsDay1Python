/*1. Find and Print Max
PrintMaxOfArray(arr)
Given an array, find and print its largest number. 

[10, -20, 100, 37, -13, 88] = 100
[-5, -10, -20, -23, -2, -6] = -2
*/

function maxnum (arr){
    
    let max = arr[0];

    for (let i = 0; i<arr.length; i++ ){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}


console.log("The largest number is:",maxnum ([10,-20,100,37,-13,88]))


/*2. Find if a number is prime or not
isPrime( num )
Given a number return and print true if it is prime, false otherwise
*/

function primeOrNot(num){
    if(num == 2){
        return true;
    }

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
        else{
            return true;
        }
    }
}
primeOrNot([1, 2, 3, 4, 5, 6, 7]);

/*
3. Find if a string is a palindrome
isPalindrome( string )
Given a string return and print true if it is a palindrome, return false otherwise

Example:
radar => true 
mom => true
word => false
*/
//this make the text be an array
/*let text = "word";

for(let i = 0; i < text.length; i++){
    console.log(text[i]);
}*/

function palindrome(word){
    for(let i = 0; i < word.length; i++){
        if(word[i] !== word[j]){
            return false
        }
        j--;
    }
    return true;
}
/*palindrome([civic, radar, level, rotor, kayak, reviver, racecar, madam, refer]);*/
console.log(palindrome('radar'));
console.log(palindrome('kayak'));
console.log(palindrome('level'));
console.log(palindrome('Bryan'));