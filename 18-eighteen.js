// Write a program to find the union of two arrays of integers.

function unionOfTwoArrays (array1, array2){
        let mergedArr = [...array1, ...array2]
        
        const unionSet = new Set(mergedArr)
    
        // const unionArray = Array.from(unionSet) // Array.from() method returns an array from any iterable object.
        const unionArray = [...unionSet]

    
        return unionArray;
    
}

const array1 = [1, 2, 3, 4, 5,5,5,5];
const array2 = [3, 4, 5, 6, 7];
console.log(unionOfTwoArrays(array1, array2));


