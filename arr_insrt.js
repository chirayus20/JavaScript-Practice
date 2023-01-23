// let arr = [12,1,213,234,23,345,34]

// let insrt = 100

// let indx = 2

// for(let i = arr.length -1; i>=0; i--)
// {
//     console.log(arr[i]);
// }

// 0  1   2   3   4   5   6
// |  |   |   |   |   |   |
let arr = [12, 100, 213, 200, 600, 700, 900];

let store = 5000;

let position = 4;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];

    if (i == position) {
      arr[i] = store;
    }
  }
}
console.log(arr);
