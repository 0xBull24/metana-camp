// Async code allows for enhanced interactivity by allowing multiple task to run without blocking other processes
// a function called inside of another function is a callback

function one(call_two) {
  console.log("step 1 - complete");
  call_two();
}

function two() {
  return console.log("step 2");
}

one(two);

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit]} was selected`);
    call_production();
  }, 2000);
  console.log("orders placed - now moving to production");
};

let production = () => {
  console.log("received the order now making the order");

  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}`)

        setTimeout(() => {
            console.log('machine was started')
            
            setTimeout(() => {
                console.log(`The ${stocks.holder[0]} was selected`)

                setTimeout(() => {
                    console.log(`We put on the ${stocks.toppings[0]} and ${stocks.toppings[1]}`)

                    setTimeout(() => {
                        console.log('Serving the ice cream')
                    }, 2000)
                }, 3000)
            }, 2000)
        }, 1000)
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
// Above is callback hell and should be moved to promises for cleaner code
// Below is still some callback hell but promises are a bit easier to read through
// Refactored the code to take 2 args that get used by each step [time, work].

let isShopOpen = true;
let promiseOrder = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log('our shop is closed'))
        }
    })
}

promiseOrder(2000, () => console.log(`${stocks.fruits[1]} was selected`)).then(() => {
    return promiseOrder(0, () => {
        console.log('production has started')
    }).then(() => {
        return promiseOrder(2000, () => {
            console.log('We are cutting the fruit')
        }).then(() => {
            return promiseOrder(1000, () => {
                console.log(`We have added the ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
            }).then(() => {
                return promiseOrder(1000, () =>{
                    console.log('We have started the machine')
                }).then(() => {
                    return promiseOrder(2000, () => {
                        console.log(`We have picked the ${stocks.holder[0]}`)
                    }).then(() => {
                        return promiseOrder(3000, () => {
                            console.log(`We put on the ${stocks.toppings[0]} and ${stocks.toppings[1]}`)
                        }).then(() => {
                            return promiseOrder(2000, () => {
                                console.log('We will now serve the ice cream')
                            }).catch(() => {
                                console.log('Customer left')
                            }).finally(() => {
                                console.log('we are closing for the day')
                            })
                        })
                    })
                })
            })
        })
    })
})

// Below is one more refactor using the async/await method. Makes the code a little easier to folow
// since its not so nested. The key to remember is resolve/reject are functions and promises need to be returned

let time = (ms) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout((resolve, ms))
        } else {
            reject(console.log('Sorry we are done for the day'))
        }
    })
}

async function asyncOrder() {
    try {
        await time(2000)
        console.log(`The ${stocks.fruits[2]} was selected`);
        console.log('We received the order and are now making it in production');

        await time(2000);
        console.log('The fruit has been chopped');

        await time(1000)
        console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

        await time(1000)
        console.log("machine was started");

        await time(2000)
        console.log(`The ${stocks.holder[0]} was selected`);

        await time(3000)
        console.log(
          `We put on the ${stocks.toppings[0]} and ${stocks.toppings[1]}`
        );

        await time(2000)
        console.log("Serving the ice cream");
    } catch (error) {
        console.log('Sorry we do not have the ice cream', error)
    } finally {
        console.log('we are closing down for the day')
    }
}