



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

/*Nivell 3 Exercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció 
utilitzant l'operador spread amb aquesta array.*/
function main2(){
  let arrayMiau = ["gato1", "gato2", "gato3"];
  miau(...arrayMiau);
}

function miau(arg1, arg2, arg3){
  document.getElementById("resultado27").innerHTML = arg1;
  document.getElementById("resultado28").innerHTML = arg2;
  document.getElementById("resultado29").innerHTML = arg3;
}

/*Nivell 3 Exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests 
dos objectes en un de nou.*/
function main3(){
  let vehiculo = {
    marca: 'Renault',
    matricula: 124569
  };
  let casa = {
    plantas: 3,
    nombre: `Ca' la Lola`
  };
  
  let vehiculoCasa = {...vehiculo, ...casa};
  document.getElementById("resultado30").innerHTML = `EL primer objeto es vehículo: ${vehiculo.marca}, ${vehiculo.matricula}`;
  document.getElementById("resultado31").innerHTML = `EL segundo objeto es casa: ${casa.plantas}, ${casa.nombre}`;
  document.getElementById("resultado32").innerHTML = `Este es el resultado de unir ambos objetos: ${vehiculoCasa.marca}; 
  ${vehiculoCasa.matricula}, ${vehiculoCasa.plantas}, ${vehiculoCasa.nombre}`;
}



                                                  //Bloc 1.5: Array transformations


/*Nivell 1 Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.*/
function main4(){
  let aNum = [1, 2, 3, 4];
  let cuadrados = aNum.map(function(num){
  console.log(`El cuadrado de ${num} es ${(Math.pow(num, 2))}`);
});
}

/*Nivell 1 Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.*/
function main5(){
  let aNum = [1, 2, 3, 4];
  let parells = aNum.filter(value => value % 2 === 0);
  document.getElementById("resultado33").innerHTML = `Nueva array con los valores pares de la array original: ${parells}`;
}

/*Nivell 1 Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.*/
function main6(){
  let aNum = [1, 10 , 8, 11];
  let mayorDiez = aNum.find(value => value > 10);
  document.getElementById("resultado34").innerHTML = `El primer valor mayor de 10 de la array es: ${mayorDiez}`;
}

/*Nivell 1 Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.*/
function main7(){
  let aNum = [13, 7, 8, 21];
  let sumaTotal = aNum.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
  }, 0);
  document.getElementById("resultado35").innerHTML = `La suma de todos los números de la array es: ${sumaTotal}`;
}
/*Nivell 2 Exercici 5
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
-Filtra els nombres majors o iguals a 10.
-Multiplica cada nombre filtrat per 2.
-Calcula la suma dels nombres filtrats i multiplicats per 2.
-La funció ha de retornar el resultat de la suma.*/
function main8(){
  let aNum = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
  let suma = ((aNum.filter(value => value >= 10)).map(value => value *2)).reduce(((acumulador, valorActual) => acumulador += valorActual), 0);
  console.log(suma);
  document.getElementById("resultado36").innerHTML = `El resultado de esta locura es: ${suma}`;
}
/*Nivell 3 Exercici 6
Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament.*/
function main9(){
  let aNum = [11, 12, 13, 14];
  let todos = aNum.every(value => value > 10);
  let alguno = aNum.some(value => value > 10);

  console.log(todos);
  console.log(alguno);
  document.getElementById("resultado37").innerHTML = `¿Son todos los números de la array mayores de 10?: ${todos}`;
  document.getElementById("resultado38").innerHTML = `¿Hay algún número en la array que sea mayor que 10?: ${alguno}`;
}



                                                  //Bloc 1.5: Bloc 1.6: Array loops
                                                  
/*Nivell 1 Exercici 1
forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];*/                                                  
function main10(){
  let aNoms = ['Anna', 'Bernat', 'Clara'];
  document.getElementById("resultado39").innerHTML = `Los nombre de la array aparecerán en la consola ==>`;
  aNoms.forEach(value => console.log(value));
}

/*Nivell 1 Exercici 2
for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];*/ 
function main11(){
  let aNoms = ['Anna', 'Bernat', 'Clara'];
  document.getElementById("resultado40").innerHTML = `Los nombre de la array aparecerán en la consola ==>`;
  for(let value of aNoms){
    console.log(value);
  }
}

/*Nivell 1 Exercici 3
filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];*/ 
function main12(){
  let aNums = [1, 2, 3, 4, 5, 6];
  let parells = aNums.filter(value => value % 2 === 0);
  document.getElementById("resultado41").innerHTML = `Nueva array con los valores pares de la array original: ${parells}`;
}

/*Nivell 2 Exercici 4
for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a 
imprimir a la consola cada clau i el seu valor corresponent.*/ 
function main13(){
  let persona = {nom: "Ona", edat: 25, ciutat: 'Barcelona'};
  for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
  }
}

/*Nivell 2 Exercici 5
for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5,
llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];*/ 
function main14(){
  let arrayNums = [1, 2, 3, 4, 5, 6];
  for (const value of arrayNums) {
    if(value === 6){
      break;
    }
  console.log(value);
  }
}

/*Nivell 3 Exercici 6
for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index):
 let noms = ['Anna', 'Bernat', 'Clara']*/ 
 function main15(){
  let arrayNoms = ['Anna', 'Bernat', 'Clara'];
  for (const [indice, nom] of arrayNoms.entries()) {    
    console.log(`Índice: ${indice}, Nom: ${nom}`);
  }
}


                                                //Bloc 1.7: Promises & Async/Await

/*Nivell 1 Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.*/ 
function main16(){
  const promesa = new Promise((resuelve, rechaza) => {
    setTimeout(() => {
      resuelve('Hola, mundo');
    }, 2000); 
  });
}

/*Nivell 1 Exercici 2
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.*/ 
function main17(){
  const promesa = new Promise((resuelve, rechaza) => {
    setTimeout(() => {
      resuelve('Hola, mundo');
    }, 2000); 
  });
  
  promesa.then((resultado) => {
    console.log(resultado);
  });
}

/*Nivell 1 Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si 
l'input és qualsevol altra cosa.*/ 
function main18(){
  let palabraUsuario = document.getElementById("hola").value;
  let diHola = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(palabraUsuario === "Hola" || palabraUsuario === "hola"){
          resolve("La promesa se ha resuelto correctamente");
        }
        else{
          reject(new Error("La palabra introducida no es correcta"));
        }
      }, 2000);
    })
  }
  diHola(palabraUsuario)
  .then(result => console.log(result))
  .catch(error => console.log(error));
}

/*Nivell 2 Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1,
i que després imprimeixi aquest resultat a la consola.*/ 
function main19(){
  const promesa = () => {
    return new Promise((resuelve, rechaza) => {
      setTimeout(() => {
        resuelve('Hola, mundo');
      }, 2000); 
    });
  } 

  async function fetchingData(){
    const mensaje = await promesa();
    console.log(mensaje);
  }
  fetchingData();
}

/*Nivell 2 Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.*/ 
function main20(){
  let bollPruebas = true; //CAMBIAR A FALSE PARA VER LAS DOS OPCIONES DEL TRY CATCH
  const promesa = () => {
    return new Promise((resuelve, rechaza) => {
      if(bollPruebas){
        rechaza(new Error("ERROR NO MUY INTUITIVO"));
      }
      else{
        setTimeout(() => {
          resuelve('Hola, mundo');
        }, 2000);
      }      
    });
  } 

  async function fetchingData(){
    try{
      const mensaje = await promesa();
      console.log(mensaje);
    } catch (error){
      console.log(error.message);
    }   
  }
  fetchingData();
}

/*Nivell 3 Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar 
que ambdues promeses es resolguin, i imprimeix els resultats a la consola.*/ 
function main21 (){        
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
const promesa1 = esperar(2000).then(() => "Hola, soy la promesa 1");
const promesa2 = esperar(3000).then(() => "Hola, soy la promesa 2");

Promise.all([promesa1, promesa2])
  .then(resultats => {
    console.log("Resultados:", resultats);
  })
  .catch(error => {
    console.error("Ha habido un error:", error);
  });
}