// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let waterStock = 400;
let milkStock = 540;
let coffeeBeansStock = 120;
let disposableCups = 9;
let money = 550;
userChoice();
function showInventory(){
    console.log(`The coffee machine has:
${waterStock} ml of water
${milkStock} ml of milk
${coffeeBeansStock} g of coffee beans
${disposableCups} disposable cups
$${money} of money\n`);
    userChoice();
}

function userChoice(){    // menu option for user
    let userType = input("Write action (buy, fill, take, remaining, exit): \n");
    console.log();
    if(userType=="buy"){
        buy();
    }
    if(userType=="fill"){
        fill();
    }
    if(userType=="take"){
        take();
    }
    if(userType=="remaining"){
        showInventory();
    }
    if(userType=="exit"){
        return;
    }
}


function buy(){      //to buy the coffee from the machine
    let coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: \n");
    if(coffeeType==1){
        let waterQuantity = 250;
        let coffeeBeansQuantity = 16;
        let flag = checkStock(waterQuantity,coffeeBeansQuantity);
        if(flag){
            waterStock-=waterQuantity;
            coffeeBeansStock-=coffeeBeansQuantity;
            disposableCups--;
            money+=4;
        }
    }
    if(coffeeType==2){
        let waterQuantity = 350;
        let milkQuantity = 75;
        let coffeeBeansQuantity = 20;
        let flag =checkStock(waterQuantity,milkQuantity,coffeeBeansQuantity);
        if(flag){
            waterStock-=waterQuantity;
            milkStock-=milkQuantity;
            coffeeBeansStock-=coffeeBeansQuantity;
            disposableCups--;
            money+=7;
        }
    }
    if(coffeeType==3){
        let waterQuantity = 200;
        let milkQuantity = 100;
        let coffeeBeansQuantity = 12;
        let flag = checkStock(waterQuantity, milkQuantity, coffeeBeansQuantity);
        if(flag){
            waterStock-=200;
            milkStock-=100;
            coffeeBeansStock-=12;
            disposableCups--;
            money+=6;
        }
    }

    userChoice();
}

function checkStock(water,milk,coffee){
    if(water > waterStock || milk > milkStock || coffee > coffeeBeansStock || disposableCups < 1){
        let shouldFill;
        if(water > waterStock){
            shouldFill = "water";
        }
        if(milk > milkStock){
            shouldFill = "milk";
        }
        if(coffee > coffeeBeansStock){
            shouldFill = "coffee beans";
        }
        if(disposableCups<1){
            shouldFill = "disposable cups";
        }

        console.log("Sorry, not enough " + shouldFill + "!\n");
        return false;
    }
    console.log("I have enough resources, making you a coffee!\n");
    return true;
}

function fill(){    // to refill the stock
    waterStock+=parseInt(input("Write how many ml of water you want to add: \n"));
    milkStock+=parseInt(input("Write how many ml of milk you want to add: \n"));
    coffeeBeansStock+=parseInt(input("Write how many grams of coffee beans you want to add: \n"));
    disposableCups+=parseInt(input("Write how many disposable cups you want to add: \n"));

    console.log();
    userChoice();
}


function take(){        // to take the money from machine
    console.log(`I gave you $${money}`);
    money=0;
    console.log();
    userChoice();
}
