//CHALLENGE FOUR - SOLUTION

let fruits = ["Apple", "Kiwi", "Pineapple", "Pear", "Banana", "Orange", "Lemon", "Watermelon"];
let fruitToSearch = "Kiwi";

function findFruit(fruitsArray, fruitToSearch) {
    return fruits.includes(fruitToSearch);
}

console.log(findFruit(fruits, fruitToSearch));