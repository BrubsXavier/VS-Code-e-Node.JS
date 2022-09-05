  /*
	  Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.
	 */


const prompt = require("prompt-sync")()

console.log("***Olá!***\n")

let soma = 0
let valores = 0
let num = 0

while(num >= 0){

    num = Number(prompt("Digite algum número: "))

    if(num >= 0){
        soma += num
        valores += 1
    }
}

console.log("\nO somatório final é de: " + soma + "\n")
console.log("A média final dos valores é de: " + soma/valores + "\n")
console.log("O total de valores processados foi de: " + valores + "\n")