// Write a function to remove duplicates from a array


const array = [1,2,2,3,4,4,5,6,7]

function findUnique (arr){
    let uniquearray = new Set(arr);
    let newArray = [...uniquearray];
    return newArray;
}

console.log(findUnique(array));