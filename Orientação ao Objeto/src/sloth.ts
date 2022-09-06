import { Animal } from "./excabstractclass"

export class Sloth extends Animal {
    move(): void {
        console.log("A preguiça se move lentamente entre as árvores!")
    }
    swim(): void {
        console.log("Lá vem a preguiça nadando de boas!")
    }
    eat(): void {
        console.log("Comendo seus matinhos tranquila!")
    }
    makesound(): void {
        console.log("Insira aqui o efeito sonoro do r2d2 gritando")
    }

    climbtree () {
            console.log("Escalando uma árvore centenária")
    }
        
    
}