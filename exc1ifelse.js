/*
 
    Faça um programa que receba três inteiros e diga qual deles é o maior.
    
*/



const prompt = require("prompt-sync")()

console.log("***Olá!***\n")
console.log("Escolha três números que direi qual deles é o maior!\n\n")

let num1 = Number(prompt("Digite o primeiro número: "))

let num2 = Number(prompt("Ótimo! Agora insira o segundo: "))

let num3 = Number(prompt("Beleza! Agora pra finalizar digite o último número: "))

if (num1 > num2 && num1>num3){

    console.log("O maior número dentre os três é: " + num1)
}else if (num2 > num1 && num2>num3){
    console.log("O maior número dentre os três é: " + num2)
}else
console.log("O maior número dentre os três é: " + num3)