//CHALLENGE FOUR - SOLUTION

let fruits = ["Apple", "Kiwi", "Pineapple", "Pear", "Banana", "Orange", "Lemon", "Watermelon"];

function findFruit(fruitsArray, fruitToSearch) {
    return fruits.includes(fruitToSearch);
}

console.log(findFruit(fruits, "Kiwi"));