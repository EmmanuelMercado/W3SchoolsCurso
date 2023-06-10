//Los objetos sin variables con varios valores 
//dentro de si.

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);

//Se puede declarar un objeto en diferentes
//líneas.

//*Se suelen declarar los objetos 
//con const.

const persona={
    primerNombre:"Emmanuel",
    apellido: "Mercado",
    edad: "23",
    colorOjos: "Café"
}

//El conjunto de nombre:valor en Js
//son llamados propiedades.

//Para acceder a una propiedad hay 2 maneras

console.log(persona.primerNombre);
console.log(persona["primerNombre"]);

//Los objetos pueden tener tambien tener 
//acciones, a estas se les considera
//métodos.

const persona1={
    primerNombre:"Emmanuel",
    apellido: "Mercado",
    edad: "23",
    colorOjos: "Café",
    nombreCompleto: function(){
        return this.primerNombre + " " + this.apellido
    } 
}

console.log(persona1.nombreCompleto());