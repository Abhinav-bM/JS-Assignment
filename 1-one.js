//Write a function to find the maximum element in a array

let arr = [20,50,35,1,21,5,7,2,89]

function maxElement(arr){
    arr.sort(
        function maxElemArray(a,b){
    
            return b-a;
        }
    )

    return arr[0];

}
console.log(maxElement(arr));


// arrow

let x = (arr) => {arr.sort((a,b)=>(b-a)); return arr[0]};
console.log(x(arr));

// reduce

const a = arr.reduce((acc, curr)=>{
    if(curr > acc ){
        acc = curr;
    }
    return acc;
},0);

console.log(a);



