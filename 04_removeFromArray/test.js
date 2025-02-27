let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = [2, 4, 6, 8, 10];
let newArray1 = [];


for (num of myArray1) {
    if (!myArray2.includes(num)) {
        newArray1.push(num);
    }
}

console.log(newArray1);