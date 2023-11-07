// Write a function to remove duplicates from a array


// const array = [1,2,2,3,4,4,5,6,7]

// const mySet = [...new Set(array)]   // build in object provide unique values


// console.log(mySet);


function removeDuplicates (array){
    return [...new Set(array)];
}

const myArray = [1,2,2,3,4,4,4,5,6,7,8,8];

const uniqueArray = removeDuplicates(myArray);

console.log(uniqueArray);
