//CHALLENGE THREE - SOLUTION

let ownerName = "Hursit Tarcan";
let ownerAge = 20;
let carBrand = "BMW"
let motorPower = 250;

function calculateInsurance(age, power) {
    return 500 + (age < 24 ? 200 : 100) + (power < 150 ? 100 : 300);
}

console.log("User: " + ownerName + "\n" + "Car: " + carBrand + "\n" + "Total amount to pay: " + calculateInsurance(ownerAge, motorPower));