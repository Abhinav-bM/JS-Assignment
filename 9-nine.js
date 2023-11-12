// Write a function to generate all prime numbers up to a given limit

function printPrime (limit){

    const prime = [];

    function checkPrime (number){
        if (number < 2 ){
            return false;
        }

        for (let i = 2; i<=Math.sqrt(number); i++) {
            if (number % i === 0){
                return false;
            }
        }  
        return true;
    }


    for (let i = 2; i <= limit; i++){   
        if (checkPrime(i)){
            prime.push(i);
        }
    }

    return prime;
}


console.log(printPrime(10));