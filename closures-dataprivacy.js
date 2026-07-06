function createBankAccount(initialBalance){
    let balance = initialBalance;
    
    return {
        deposit(amout){
            balance += amount;
        },
        getBalance(){
        return balance;
        }
    };
}

const account = createBankAccount(100);

account.deposit(50);
console.log(account.getBalance()); //150

// console.log(balance); // Error: balance is not defined