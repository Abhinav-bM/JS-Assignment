// Write a program to find the maximum and minimum  elements in an array of integers

function maxMin (arr) {

    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    let min = arr[0];
    for(let j = 0; j < arr.length; j++){
        if(min > arr[j]){
            min = arr[j]
        }
    }

    console.log("Maximum : " + max);
    console.log("Minimum : " + min);
}

const array = [1,34,52,67,3,8,99,65,43];
maxMin(array);
