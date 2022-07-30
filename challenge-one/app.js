//CHALLENGE ONE

function checkBills(bills) {
    let sum = 0;
    let billsTotal = bills.slice(-1).pop();
    for (let i = 0; i < bills.length - 1; i++) {
        sum += bills[i];
    }

    if (sum === billsTotal) {
        return "Your calculations are correct!"
    }
    else if (sum < billsTotal) {
        return "Your calculated total is " + (billsTotal - sum) + "$ higher then expected.";
    }
    else if (sum > billsTotal) {
        return "Your calculated total is " + (billsTotal - sum) + "$ lower then expected.";
    }
    else {
        return "ERROR, please check input array!";
    }
}

let bills = [30, 24, 65, 12, 124, 78, 85, 65, 650];
console.log(checkBills(bills));