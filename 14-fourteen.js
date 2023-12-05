// A program to print the Fibonacci series
// 0,1,1,2,3,5,8

function printFibonacciSeries(limit) {

    let fibonacciSeries = [0, 1];
   

    for (let i = 2; i < limit; i++) {
    
        let nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextNumber);

        
    }

    return fibonacciSeries;
}

console.log(printFibonacciSeries(7));