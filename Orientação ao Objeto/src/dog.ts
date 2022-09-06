import { Animal } from "./excabstractclass"

export class Dog extends Animal {
    move(): void {
        console.log("O doguinho é quadrúpede e corre feliz!")
    }
    swim(): void {
        console.log("O doguinho está brincando na piscina!")
    }
    eat(): void {
        console.log("O doguinho está comendo tudo sem mastigar enquanto planeja roubar sua comida!")
    }
    makesound(): void {
        console.log("Auauau")
    }

    howl () {
            console.log("Auuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu!")
        }
        
    
}