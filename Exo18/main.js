function estPalindrome(chaine) {
    return chaine === chaine.split('').reverse().join('');
}

console.log(estPalindrome("non"));
console.log(estPalindrome("touot"));
console.log(estPalindrome("1234321"));
console.log(estPalindrome("pierre"));
console.log(estPalindrome("palindrome"));