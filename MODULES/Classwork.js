//IMPORT ALL MODULES
// const { response } = require('express')
const { response } = require('express')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, //standarded input
    output: process.stdout //standarded output
})

//GENERATE QUESTION
let num1 = Math.ceil((Math.random() * 10) + 1)
let num2 = Math.ceil((Math.random() * 10) + 1)

//CALCULATE THE QUESTION
let answer = num1 + num2
let time = 15000
//THROW QUESTION
rl.question(`what is ${num1} + ${num2}?\n`, (response) =>{
    if (response.trim() == answer){
        //correct Answer
        console.log(`Your answer "${response}" is correct!`)
        rl.close()
        //Not Correct
    }else if(response.trim() != answer, response){
        rl.setPrompt('Incorrect Answer, try again \n')
        rl.prompt()
    }else{
        console.log(`Your answer is INCORRECT!`)
        rl.close()
    }
//SETTING TIME OUT FOR THE USER
    setTimeout(() =>{
        if(response.trim() == answer){
            console.log('\n TIME OUT!!!')
        }else{
            console.log(`\n TIME OUT: \n And Your Answer was Incorrect!, the correct answer is ${answer}`)
        }
    }, time)
})

                // READLINE
// rl.on("close", () =>{
//     console.log(`Your Answer is Correct!`)
// })
// rl.on("line", (response) =>{
//     if (response.trim() == answer){
//         //correct Answer
//         // console.log(`Your answer "${response}" is correct!`)
//         rl.close()
//     }else{
//         //Not Correct
//         rl.setPrompt(`Your Answer is Incorrect, The Correct Answer is: ${answer} \n`)
//         rl.prompt()
//     }
// })
//VALIDATE ANSWER

//END PROGRAM
module.exports = rl