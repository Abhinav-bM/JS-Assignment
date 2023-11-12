// Write a function to calculate the factorial of a given number n

function factOfNum (number){
    
    let fact = 1;
    for ( let i = 1; i <= number; i++){
        fact = fact * i;
    }

    return fact;
}

console.log(factOfNum(5));
