// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let keys= Object.keys(objeto)
  let array1=[];
  let arrayF=[];
  for(let i=0; i<=keys.length-1;i++){
    array1.push(keys[i])
    array1.push(objeto[keys[i]])
      arrayF.push(array1)
      array1=[]
    
  }
  return arrayF;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

let obj={};
for (let i=0; i<=string.length-1;i++){
  let contador=0;
	for(let j=0;j<=string.length-1;j++){
    	if(string[i]===string[j]){contador++};	
    }
		
  	obj[string[i]]=contador;
}
return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
let arrayMa=s.match(/[A-Z]/g);
let palMa=arrayMa.join('');
let arrayMi=s.match(/[a-z]/g);
let palMi=arrayMi.join('');
let palabraReverse=palMa+palMi;
return palabraReverse;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array=str.split(' ');
  let palabra='';
  let palabraReverso='';
  let palabraFinal='';
  for(let i=0;i<=array.length-1;i++){
   palabra=array[i];
   palabraReverso=palabra.split('').reverse().join('');
   palabraFinal=palabraFinal +' '+ palabraReverso;
   }
  let hola=palabraFinal.slice(1);//borro el espacio que se genera al principio
  return hola;//jajaja
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numRev=numero.toString().split('').reverse().join('');

  if(numero==numRev){return 'Es capicua'}
  else{return 'No es capicua'}
  
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevoArr=[];
  for(let i=0;i<=cadena.length-1;i++){
    if(!(cadena[i]==='a'|cadena[i]==='b'|cadena[i]==='c')){
        nuevoArr.push(cadena[i]);}
    }
    return nuevoArr.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return (arr.sort(function(a,b){
    if(a.length<b.length){
        return -1
      }else if(a.length>b.length) {
        return 1
      }
  
    return 0;}))

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

let array3=arreglo1.filter(value => arreglo2.includes(value))
return array3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

