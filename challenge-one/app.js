//write a function that accepts an (any length) array as a parameter; the function should sum all elements in the array
//except the last index. The function than checks the last index and checks if the sum of all numbers equals this number.
//If it equals, we return a message saying it is ok. If not we return a message with the difference between the two numbers.

function checkArray(array) {
    let sum = 0;
    let billsTotal = array.slice(-1).pop();
    for (let i = 0; i < array.length - 1; i++) {
        sum += array[i];
    }

    if (sum === billsTotal) {
        return "Everything is ok!"
    }
    else if (sum < billsTotal) {
        return "You are paying €" + (billsTotal - sum) + " too much.";
    }
    else {
        return "Your calculated total is too less: " + (billsTotal - sum);
    }
}

let array = [3, 10, 70];

console.log(checkArray(array));