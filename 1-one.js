//Write a function to find the maximum element in a array

let arr = [20,50,35,1,21,5,7,2,89]

arr.sort(
    function maxElemArray(a,b){

        return b-a;
    }
)
console.log(arr);       // descending  order

console.log(arr[0]);    // max element