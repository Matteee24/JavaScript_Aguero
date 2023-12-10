// let pedido = prompt("¿Cual es su pedido?").toLowerCase()

// if(pedido === "milanesa"){
//     alert("Toma su milanesa")
//     console.log("Milanesa comprada")
// }
// else if(pedido ==="jugo de naranja"){
//     alert("Tome su jugo de naranja")
//     console.log("Jugo de naranja comprado")
// }

// else{
//     alert("No tenemos nada de eso")
//     console.log("Nada comprado")
// }


// const bebida = prompt("Ingrese su bebida")
// if( bebida === "coca" || bebida === "agua" || bebida === "fanta"){
//     const hielo = confirm(`¿Desea hielo con su ${bebida}?`)
//     if(hielo){
//         alert(`Aca tiene su ${bebida} con hielo`)
//         console.log(`${bebida} comprada`)
//     } else{
//         alert(`Aca tiene su ${bebida} sin hielo`)
//         console.log(`${bebida} comprada`)
//     }

// } else{
//     alert("No tenemos esa bebida")
//     console.log("Bebida no comprada")
// }


// let nombre = prompt("Su nombre").toLowerCase()

// switch (nombre){

//       case "matteo":
//         alert("1a")
//          break

//       case "diana":
//          alert("1b")
//          break

//       case "gustavo":
//          alert("2a")
//          break

//       case "carina":
//       case "titos":
//          alert("3a")
//         break

//       default:
//          alert("Usted no vive en esta propiedad")
    




// for(let i=0; i<5; i=i+1){
//    console.log("Este es i:" , i)
// }

// let saludo = true

// while(saludo){
//     alert("¡Hola! 😊")
//     saludo = confirm("¿Otro saludo?")
// }



// do{
//     alert("¡Chao! 😔")
//     despedida = confirm("¿Otra despedida?")
// }while(despedida)
// const pass = "qwerty"
// let intentos = 0
// let datoIngresado = ""

// do{
//     datoIngresado = prompt(`Ingrese su contraseña. Le quedan ${3-intentos} intentos`)
//     intentos++
// }while(pass !== datoIngresado && intentos <3)

// if(datoIngresado === "qwerty"){
//     alert("Bienvenido")

// }else{
//     alert("Ha  fallado demadiados intentos, prueba más tarde")
// }




// let cantidad = prompt(`INGRESE CANTIDAD DE REPETICIONES`)
// let texto = prompt(`INGRESE TEXTO A REPETIR`)

// for(let index = 0; index < cantidad; index++){
//     console.log(texto)
// }

// function saludar(){
//     alert("Hola manin")
// }

// saludar()


// function calcularFactorial(numero){
//     let factorial = 1
//     if (numero === 0){
//         return 0
//     }
//     for(let i=1; i<numero;i++){
//         factorial = factorial*i
//     }
//     alert(`El factorial de ${numero} és ${factorial}`)
// }

// calcularFactorial(20)

// function ingresarDatos(nombre, anios, genero){
//     alert(`Se agrego la base de datos a ${nombre}, tiene ${anios} y és de genero ${genero}`)
// }



// ingresarDatos( "Matteo", 17, "masculino")



// function despedida(){
//     let despedirse = "¡Chao nos vemos pronto!"
//     return despedirse
// }


// console.log(despedida())

// function sumar(primerNumero, segundoNumero){
//     return primerNumero + segundoNumero
// }



// const sumarAnonima = function (primerNumero, segundoNumero){
//     return primerNumero + segundoNumero
// }




// const moduloDeDos = numero => numero%2

// console.log(moduloDeDos(3))
// console.log(moduloDeDos(5))

// // ejemplo modulo

// const parImpar = (numero)=>{
//     const moduloDos = numero%2
//     if(moduloDos === 1){
//         console.log(`${numero} es impar`)
//     } else if (moduloDos === 0){
//         console.log(`${numero} és par`)
//     } else{
//         console.warn("Se ingreso un dato incorrecto")
//     }
// }

// parImpar(2091837)



