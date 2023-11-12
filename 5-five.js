// Write a function to check if a given number is prime


function primeCheck (num){
    if (num < 2){
        return "not prime";
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++)

    if(num % i === 0) return "not prime";
    
    return "prime";
    
    
}
console.log(primeCheck(6));