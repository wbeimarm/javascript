 // para sacar los multiplos de 3 de el arreglo

 let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let i = numeros.length
let suma = 0   
    
    
      function esPar(i) {
        if (i % 3 == 0) {
          return true;
        } else {
          return false;
        }
      }
    
           for (let i = 0; i < numeros.length; i++) {
            if (esPar(numeros[i]) == true) {
               //console.log(numeros[i]); 
               
              } 
           }

           // para sacar los multiplos de 5 del array

           function esPar(i) {
                if (i % 5 == 0) {
                  return true;
                } else {
                  return false;
                }
              }
            
            for (let i = 0; i < numeros.length; i++) {
                 if (esPar(numeros[i]) == true) {
                //console.log(numeros[i]); 
                       
             } 
        }


        // para sacar los multiplos de 7

        function esPar(i) {
          if (i % 7 == 0) {
            return true;
          } else {
            return false;
          }
        }
      
      for (let i = 0; i < numeros.length; i++) {
           if (esPar(numeros[i]) == true) {
          //console.log(numeros[i]); 
                 
       } 
  }

// para sacar los multiplos de 9

function esPar(i) {
  if (i % 9 == 0) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < numeros.length; i++) {
   if (esPar(numeros[i]) == true) {
  console.log(numeros[i]); 
         
} 
}



