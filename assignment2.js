let bankAccount=100

function deposit(num) {
    bankAccount = bankAccount+num;
    return "$"+num+" deposited to bank account.";
}

console.log(deposit(30))

function withdraw(num) {
    bankAccount = bankAccount-num;
    return "$"+num+" withdrawn from bank account.";
}

console.log(withdraw(20))

function checkBalance() {
    return "Balance: $"+bankAccount
}

console.log(checkBalance())