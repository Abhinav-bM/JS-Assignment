// Write a program to count the number of vowels in a given string.

function countVowels (strr){

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let x of strr){
        if(vowels.includes(x)){
            count++;
        }
    }
    return count;
}   

console.log(countVowels("aeioulz"));