/*  Basic bank application
    demonstrate the use of async functions
    should be able to check balance
    withdraw and deposit funds

    Greet user
    check if they enter the correct pin
    if pin correct, check withdraw or deposit
    if incorrect end program
    if withdraw, withdraw amount must be <= balance
    if deposit,  add deposit amount to balance 
*/

let balance = 1000;
let pin = 1111;

async function bankApp(choice, amount) {
  console.log("Hello Welcome to the atm. Please enter a pin");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === 1111) {
        resolve(console.log("Lets get your balance"));
      } else {
        reject();
      }
    }, 2000);
  })
    .then(async () => {
      await new Promise((resolve, reject) => {
        setTimeout(async () => {
          await getBalance();
          await withdrawOrDeposit(choice, amount);
        }, 2000);
      });
    })
    .catch(() => {
      console.log("Looks like you have the wrong pin.");
    }).finally(() => {
        console.log('Goodbye');
    });
}

function getBalance() {
  console.log(`Your balance is ${balance}`);
}

function withdrawOrDeposit(choice, amount) {
  if (choice === 1) {
    console.log("How much would you like to withdraw");
    if (amount <= balance) {
        balance -= amount;
        getBalance();
    }
  } else if (choice === 2) {
    console.log("How much would you like to deposit");
    balance += amount;
    getBalance();
  }
}

bankApp(2, 100);