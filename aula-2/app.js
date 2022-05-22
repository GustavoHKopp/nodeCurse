// let sum = require('./modulos/sum')
// let sub = require('./modulos/sub')
// let div = require('./modulos/div')
// let mult = require('./modulos/mult')

let calculadora = require('./modulos/calculadora'
)
let numbers = require('./numMock/dadosMock')


let resultMult = calculadora.mult(numbers.numA, numbers.numC)
let resultDiv = calculadora.div(numbers.numD, 3)
let resultSub = calculadora.sub(10, 5)
let resultSum = calculadora.sum(numbers.numA, numbers.numB)
console.log(`resultado mult: ${resultMult}`)
console.log(`resultado div: ${resultDiv}`)
console.log(`resultado sub: ${resultSub}`)
console.log(`resultado sum: ${resultSum}`)

