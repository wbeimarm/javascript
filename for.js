let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let cantidadNumeros = 0
let contador = numeros.length
let valordei = "aja"
let suma = 3
let cantidad = 0
let numeroPar = 0
//console.log(suma)
suma = 15 + 3
//console.log(suma)
suma = suma + 30
console.log(suma)
suma = suma + 65
console.log(suma)
suma += 20
console.log(suma)
console.log(cantidad)
cantidad = suma
console.log("soy el ultimo valor que tiene la suma", cantidad)
numeroPar = cantidad % 2 
console.log("si el residuo es cero es par si no es impar", numeroPar)
if (numeroPar === 0) {
    console.log("el numero es par", cantidad)
} else {
    console.log("el numero es impar", cantidad)
}
numeroPar = cantidad % 2 === 0 ? "es par" : "es impar"
console.log(numeroPar)

for (let i = 0; i <=contador; i++) {
  console.log(numeros[i])
}
// console.log(valordei)
// console.log(diasDeLaSemana)
// console.log(i)
// i = 5 cuantos = 0 i++
// i = 5 cuantos = 0 5+1
// i = 6 cuantos = 1 6+1
// i = 7 cunatos = 2 7+1
// i = 8 cuantos = 3 8+1
// i = 9 cuantos = 4 9+1
// i = 10 cuantos = 5 10+1
// i 0 11 
// console.log(numeros[i]);
    // cantidadNumeros = cantidadNumeros + numeros[i]
    // console.log(cantidadNumeros)
    // if (numeros[i] % 2 === 0) {
    //     console.log("el numero es par", numeros[i])
    // }
    // else{
    //     console.log("el numero es impar", numeros[i])
    // }
     //valordei = i
    //console.log(numeros[i])
    //console.log(valordei)