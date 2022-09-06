import { Animal } from "./excabstractclass";

export class Horse extends Animal {
    move(): void {
        console.log("O cavalo é quadrúpede e caminha ao passo felizmente!")
    }
    swim(): void {
        console.log("Olha, um cavalo nadando enquanto atravessa sua tela. Go pocotó!")
    }
    eat(): void {
        console.log("O cavalo come paciente seus matinhos, pensando que um torrão de açúcar seria bem mais gostoso...")
    }
    makesound(): void {
        console.log("Neeeeeeeeeeeeeeeeeeeeigh")
    }

    kick () {
            console.log("A pessoa assustou o cavalo e levou um coice sem querer. Toma distraído!")
        }
        
    runaway() {
            console.log("O cavalo abriu a baia mais uma vez! Corra para encontrar o bicho fujão!")
        }
    
    gallop() {
            console.log("O cavalo dispara a toda velocidade enquanto a música tema de spirit toca!" +
            "\nPo-co-tó, po-co-tó, po-co-tó...")
        }
    
    trot() {
            console.log("O cavalo marcha em um trote alongado \nPo-tó, po-tó, po-tó...")
        }
}