import { Dog } from "./dog"
import { Horse } from "./horse"
import { Sloth } from "./sloth"

let dog  = new Dog(
    "Cachorro - French Bulldogue",
    "Bruce",
    "Canis Lupus Fazmiliaris",
    "Carnívoro",
    "Masculino",
    "6 anos"
)

dog.move
dog.swim
dog.makesound
dog.howl
dog.eat
dog.listdata

let horse = new Horse(
    "Cavalo Puro Sangue Inglês",
    "Scadufax",
    "Equus Caballus",
    "Herbívoro",
    "Feminino",
    "15 anos"
)

horse.move
horse.swim
horse.makesound
horse.kick
horse.eat
horse.gallop
horse.trot
horse.runaway
horse.listdata

let sloth = new Sloth(
    "Bicho-Preguiça",
    "Cid",
    "Folívora",
    "Herbívoro",
    "Masculino",
    "2 anos"
)

sloth.move
sloth.makesound
sloth.swim
sloth.climbtree
sloth.eat
sloth.listdata
