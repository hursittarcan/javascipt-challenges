//CHALLENGE FIVE - SOLUTION

let numbersToSort = [1, 5, 50, 15, 4, 10, 6, 7, 9, 2];

function sortArray(a, b) {
    return a - b;
}

console.log(numbersToSort.sort(sortArray).toString());