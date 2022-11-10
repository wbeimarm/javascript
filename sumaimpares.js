// sumando los numeros impares del array

let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let i = numeros.length
let suma = 0

function esPar(i) {
            if (i % 2 == 0) {
              return true;
            } else {
              return false;
            }
          }      


for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i]) == false) {
          suma =  suma + numeros[i]
          console.log(suma)  
        } 
      }