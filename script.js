'use strict';

const elForm = document.querySelector("#form");
const elEnterNumber = document.querySelector("#enter-number");
const elResult = document.querySelector("#result");

elForm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const valueNumber = parseInt(elEnterNumber.value)

    if(valueNumber % 3 === 0 && valueNumber % 5 === 0){
        elResult.textContent = "FizzBuzz"
    }else if(valueNumber % 3 === 0){
        elResult.textContent = "Fizz"
    }else if(valueNumber % 5 === 0){
        elResult.textContent = "Buzz"
    }else(
        elResult.textContent = `${valueNumber}`
    )
})

