// MAP mathod

const arr = [5,1,3,2,6]

// Double - [10,2,6,4,12]

// Triple - [15,3,9,6,18]

// Binary - ["101","1", "11","10","110"]

// function double(x){
//     return x * 2
// }

// function binary(x){
//     return x.toString(2);
// }


// const output  = arr.map(binary)
// console.log(output);




// Filter odd mathod

// function isEven(x){
//     return x % 2 ===0;
// }
// const output = arr.filter(isEven)
// console.log(output);



// Reduce Mathods   <-- sum por max


function findsum(arr){
    let = sum = 0;
    for(i = 0; i < arr.length; i++){
        sum = sum +arr[i]

    }
    return sum;
}
console.log(findsum(arr));







const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output);