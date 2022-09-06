export abstract class Animal {
    specie : String= ""
    name : String
    scientificname : String
    diet : String
    sex : String
    age : String
    
    constructor(
    specie : String = "",
    name : String = "",
    scientificname : String = "",
    diet : String = "",
    sex : String = "",
    age : String = ""   
    
    ){  this.specie = specie
        this.name = name
        this.scientificname = 
        this.diet = diet
        this.sex = sex
        this.age = age
    }
    
    abstract move () : void 

    abstract swim () : void

    abstract eat () : void

    abstract makesound () : void

    listdata (){
        console.log("Espécie: " + this.specie + "\nNome do exemplar: " + this.name + "\nNome científico: " + 
        this.scientificname + "\nHábitos alimentares: " + this.diet + "\nSexo do animal: " + this.sex + 
        "\nIdade: " + this.age)
    }
}
