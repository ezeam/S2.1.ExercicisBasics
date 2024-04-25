



                                        //BLOC 1 ARROW FUNCTIONS

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
  console.log(nRandom);
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
números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.*/
miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printNumbers = (miArray) => {
  miArray.forEach((element) => console.log(element));
}

/*Nivell 3 Exercici 5
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la 
consola després d'esperar 3 segons.*/
imprimeMensaje = () => {
  return document.getElementById('resultado5').innerHTML = "Buenos días nos de Dios";
}


                                //BLOC 2 OPERADOR TERNARI

/*Nivell 1 Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i 
utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, 
ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/
potConduir = edad => {
  return document.getElementById('resultado6').innerHTML =  edad >=18 ? "¡Puedes conducir!" : "No puedes conducir...";
}




