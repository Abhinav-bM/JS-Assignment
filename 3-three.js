//Write a function to sort a array in ascending order

const myArray =  [99,1,10,80,20,60,45,85];

myArray.sort(
    function arraysort(a,b){
        return a-b;
    }
)

console.log(myArray);



// arrow function

myArray.sort((a,b) => a-b);

console.log(myArray);