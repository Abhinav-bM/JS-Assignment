// Write a function to check given string is palindrome or not

function checkPalindrome (string){

    let reversed = '';
    for (let i = string.length-1; i >= 0; i--){
        reversed = reversed + string[i]
    }

    if(string === reversed){
        console.log(`It is a palindrome`);
    }
    else{
        console.log(`It is not a palindrome`);
    }
}

let check = `madam`;

checkPalindrome(check);