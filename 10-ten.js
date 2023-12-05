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



// reduce

function minMax (arr){
    let max = arr.reduce(function(acc, curr){
        if(curr > acc){
          return  acc = curr
        }
        return acc
    },0)

    let min = arr.reduce(function(acc, curr){
        if(curr < acc){
          acc = curr
        }
        return acc
    },)

    console.log(`max : ${max}, min : ${min}`);
}

minMax(array)