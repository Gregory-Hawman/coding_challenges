// Given an integer x, return true if x is palindrome integer. 
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

function isPalindrome(x) {
    let numStr = x.toString()
    let i = 0
    while (i < numStr.length - 1){
        let j = numStr.length - 1
        while (j > 0){
            if(numStr[i]===numStr[j]){
                i++
                j--
                continue
            }
            return false
        }
    }
    return true
};

let test1 = 121
let test2 = 123
let test3 = 1010102010101

console.log(isPalindrome(test1))
console.log(isPalindrome(test2))
console.log(isPalindrome(test3))
