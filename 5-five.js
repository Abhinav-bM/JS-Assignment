// Write a function to check if a given number is prime

function primeCheck(num){
    if(num % 2 === 0){
        return "prime";
    }
    else{
        return "not-prime";
    }
}

console.log(primeCheck(3));