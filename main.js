//import 
import {englishWord} from "./transalor.js"

// linking HTML elements from html to js 
const userInput = document.querySelector("#inputText")

const morseOutput = document.querySelector("#output")

const userBtn = document.querySelector ("#button")

// store the value inputted by the user 


// convert the word entered by the user & display it in the output field once the button has been clicked


userBtn.addEventListener ("click", () => {
   let inputValue = userInput.value
    let result = englishWord(inputValue)

  // to get the function to display 
  morseOutput.innerHTML = result
})

// reset button
// get the element from DOM
 const resetBtn = document.querySelector("#resetButton")

 resetBtn.addEventListener("click", () => {
   // return the placeholder back to nornmal & translation
   userInput.value =  "";
   morseOutput.innerHTML = "Translation will be displayed here!" 
 })

