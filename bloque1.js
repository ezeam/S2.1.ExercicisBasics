



                                        //Bloc 1.1: Arrow functions

/*Nivell 1 Exercici 1
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}. */
 add = (a, b) => {
  let sum = parseInt(a) + parseInt(b);
  return document.getElementById('resultado').innerHTML = `El resultado es ${sum}`;
}

/*Nivell 1 Exercici 2
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no 
necessiti paràmetres i que retorni un número aleatori entre 0 i 100.*/
 randomNumber = () => {
  let nRandom = Math.floor((Math.random() * (100 - 0 + 1)) + 0);
  return document.getElementById('resultado1').innerHTML = `El número aleatorio es: ${nRandom}`;
};

/*Nivell 1 Exercici 3
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name 
i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació 
que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.*/
class Person {
  constructor(name){
    this.name = name        
  }
  greet = () => {    
    return document.getElementById(`resultado2`).innerHTML = `Hola, ${this.name}`
  }
}
let person1 = new Person("María");

/*Nivell 2 Exercici 4
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de
números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de
fletxa.*/
miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printNumbers = (miArray) => {
  miArray.forEach((element) => console.log(element));
}

/*Nivell 3 Exercici 5
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la 
consola després d'esperar 3 segons.*/
imprimeMensaje = () => {
  return document.getElementById('resultado5').innerHTML = "Gracias por tu espera y por no haberle dado 20 veces al botón :)";
}


                                //Bloc 1.2: Operador ternari

/*Nivell 1 Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i 
utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, 
ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/
potConduir = edad => {
  return document.getElementById('resultado6').innerHTML =  edad >=18 ? "¡Puedes conducir!" : "No puedes conducir...";
}

/*Nivell 1 Exercici 2
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari 
per determinar quindels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, 
retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.*/
esMesGran = (num1, num2) => {  
  return document.getElementById('resultado7').innerHTML =  num1 > num2 ? "num1 és més gran" : "num2 és més gran";  
}

/*Nivell 2 Exercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors 
ternaris per determinar si un número és positiu, negatiu o zero.*/
categoria = (num) => {
  return document.getElementById('resultado8').innerHTML =  (num == 0) ? "Es el número 0" : ((num >= 0) ? "Es positivo" : "Es negativo");
}

/*Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres 
(a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.*/
trobarMaxim = (nu1, nu2, nu3) => {
  /*console.log("¿entras?");*/
  console.log("A", nu1);
  console.log("B", nu2);
  console.log("C", nu3);
  let maxT = (nu1 > nu2) ?  nu1 : nu2;
  let max = (nu3 > maxT) ? nu3 : maxT;

  console.log("Maximo", max);
  return document.getElementById('resultado9').innerHTML =  `El número más alto de los introducidos es: ${max}`; 
} 

/*Nivell 3 Exercici 4
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i 
utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a 
determinar si cada número és parell o imparell.*/
let  arrayNum = [12, 24, 95, 3, 54, 1256, 8954, 12, 0];

function llamaParOImpar(){
  parOImpar(arrayNum);
}

parOImpar = (miArray) => {
  for (let i = 0; i < miArray.length; i++){
  console.log (`El número ${miArray[i]} es ${(miArray[i] % 2 == 0) ? "Es par" : "Es impar"}`);
  }
}


                                //Bloc 1.3: Callbacks

/*Nivell 1 Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i 
una funció de callback. La funció processar ha d'invocar la funció de callback, passant el 
nombre com a paràmetre.*/

function myCallback(msn){
  return document.getElementById("resultado10").innerHTML = msn;
}

function processar (nombre, myCallback){
  let mensaje = `Hola ${nombre}`;
  myCallback(mensaje);
}

/*Nivell 1 Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres 
paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció 
de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que 
faci la suma dels dos nombres.*/

function callbackSuma(num1, num2){
  let result = parseInt(num1) + parseInt(num2);
  return document.getElementById("resultado11").innerHTML = result;
}

function calculadora(num1, num2, callbackSuma){
  callbackSuma(num1, num2);
}

/*Nivell 2 Exercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: 
un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, 
passant el nom com a paràmetre.*/
function callbackSaluda(nombre){
  return document.getElementById("resultado12").innerHTML = "¡Hola, " + nombre + "!";
}

function esperarISaludar(nombre, callbackSaluda) {
  setTimeout(function() {
    callbackSaluda(nombre);
  }, 2000);
}

/*Nivell 2 Exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció 
de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function llamaAProcesa(){
  processarElements(numeros, callbackProcesa);
}

function callbackProcesa(num){
  console.log(`Este es el número ${num}`);
}

function processarElements(miArray, callbackProcesa){
  miArray.forEach((element) => callbackProcesa(element));
}

/*Nivell 3 Exercici 5
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb 
la cadena transformada.*/
function callbackMayuscula(palabra){
  return document.getElementById("resultado13").innerHTML = "Tu palabra en mayúscula: " + palabra;
}

function processarCadena(palabra, callback){
  let palabraPasar = palabra.toUpperCase();
  callback(palabraPasar);
}

                                                //Bloc 1.4: Rest & Spread operators

/*Nivell 1 Exercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera 
array que contingui tots els elements de array1 i array2.*/
function activar(){
  let array1 = [0, 1, 2, 3, 4, 5, 6];
  let array2 = [7, 8, 9, 10, 11, 12];
  let array3 = [...array1, ...array2];
  document.getElementById("resultado14").innerHTML = array3;
}

/*Nivell 1 Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat
d'arguments i retornar la seva suma.*/
function activa(){
  document.getElementById("resultado15").innerHTML = `La suma de 1 + 2 + 3 + 4 = ${suma(1, 2, 3, 4)}`;
  document.getElementById("resultado16").innerHTML = `La suma de 1 + 2 + 3 + 4 + 5 = ${suma(1, 2, 3, 4, 5)}`;
  document.getElementById("resultado17").innerHTML = `La suma de 1 + 2 + 3 + 4 + 5 + 6 = ${suma(1, 2, 3, 4, 5, 6)}`;
  document.getElementById("resultado18").innerHTML = `La suma de 1 + 2 + 3 + 4 + 5 + 6 + 7= ${suma(1, 2, 3, 4, 5, 6, 7)}`;
}
function suma(...num){
  let acumulador = 0;
  for(let i = 0; i < num.length; i++){
    acumulador += num[i];    
  }
  return acumulador;
}

/*Nivell 2 Exercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia 
de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.*/

function main(){
  let objecte1 = {
    nombre: 'cama',
    cantidad: 12
  };
  let objecte2 = { ...objecte1 };
  document.getElementById("resultado19").innerHTML = `Objecte 1: ${objecte1.nombre}, ${objecte1.cantidad}`;
  document.getElementById("resultado20").innerHTML = `Objecte 2 (copia de Objecte 1): ${objecte2.nombre}, ${objecte2.cantidad}`;
  
  
  objecte2.nombre = 'silla';
  document.getElementById("resultado21").innerHTML = `Objecte 1 (no debería haber cambiado): ${objecte1.nombre}, ${objecte1.cantidad}`;
  document.getElementById("resultado22").innerHTML = `Objecte 2 (ha cambiado): ${objecte2.nombre}, ${objecte2.cantidad}`;
}

/*Nivell 2 Exercici 4
Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers
dos elements a variables, i després assignar la resta dels elements a una tercera variable.*/
function main1 (){
  let cosas = ["bolis", "hojas", "calculadora", "chicles", "bocadillo"];
  document.getElementById("resultado23").innerHTML = `Voy a ordenar las cosas que tengo dentro la mochila: ${cosas}`;

  let [estuche, carpeta, ...elResto] = cosas;
  document.getElementById("resultado24").innerHTML = `Dentro del estuche pongo: ${estuche}`;
  document.getElementById("resultado25").innerHTML = `Dentro de la carpeta pongo: ${carpeta}`;
  document.getElementById("resultado26").innerHTML = `El resto de cosas las dejaré en la mochila: ${elResto}`
}



















