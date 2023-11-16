// Write a function to check if a given number is an Armstrong number.

function checkAmstrong(num){
    const toNum = num.toString();
    const numDigits = toNum.length;

    let sum = 0;
    for (let i = 0; i < numDigits; i++){
        const digit = parseInt(toNum[i]);
        sum = sum + digit ** numDigits;
    }
    
    if(sum === num){
        return `${num} is an Amstrong Number`;
    }
    else{
        return `${num} is not an Amstrong Number`
    }

}

console.log(checkAmstrong(153));