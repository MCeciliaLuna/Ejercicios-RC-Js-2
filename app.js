//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
// const edad = parseInt(prompt('Ingrese su edad'))

// if (edad >= 18) {
//   alert('Usted es MAYOR de edad')
// } else if (edad < 18) {
//   alert('Usted NO ES MAYOR de edad')
// } else {
//   alert('Ingrese un número válido')
// }

// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
//0-2: Muy deficiente
//3-4: Insuficiente
//5-6: Suficiente
//7: Bien
//8-9: Notable
//10: Sobresaliente
//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// //BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA
// do {
// 	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
// 	var nota = prompt("Introduce tu nota");
// 	//SI SE INTRODUJO UN NÚMERO
// 	if (Number(nota) == nota) {
// 		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
// 		if (nota > 0 && nota <= 10) {
// 			if (nota < 3) {
// 				alert("Muy deficiente");
// 			}
// 			else if (nota < 5) {
// 				alert("Insuficiete");
// 			}
// 			else if (nota < 6) {
// 				alert("Suficiente");
// 			}
// 			else if (nota < 7) {
// 				alert("Bien");
// 			}
// 			else if (nota < 9) {
// 				alert("Notable"); 5
// 			}
// 			else if (nota >= 9) {
// 				alert("Sobresaliente");
// 			}
// 		}
// 		//SI LA NOTA NO ES ENTRE 0 Y 10
// 		else {
// 			alert("Nota erronea");
// 		}
// 	}
// 	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
// 	else {
// 		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
// 		if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
// 			alert("Introduce un numero valido");
// 		}
// 	}
// //EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
// } while (nota != undefined);	//Undefined es cuando se pulsa Cancelar.


// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// //DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
// var resultado = "";
// //BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
// do {
//     //PEDIMOS LA CADENA POR TECLADO
//     var cadena = prompt("Introduce una cadena");
//     //SI LA VARIABLE RESULTADO ESTÁ VACÍA
//     if (resultado == "") {
//         //CONCATENAMOS SIN UTILIZAR GUIÓN
//         resultado = resultado + cadena;
//     }
//     //SINÓ
//     else {
//         //CONCATENAMOS CON GUIÓN
//         resultado = resultado + "-" + cadena;
//     }
//     //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
// } while (confirm("Desea seguir?"));
// //SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
// document.write(resultado);


// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// //DECLARAMOS LA VARIABLE SUMA
// var suma = 0;
// //BUCLE DO WHILE PARA INTRODUCIR VARIOS
// do {
//     //PEDIMOS EL NÚMERO POR TECLADO
//     var numero = prompt("Introduce un numero");
//     //COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
//     if (Number(numero) == numero) {
//         //CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
//         numero = Number(numero);
//         //SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
//         suma = suma + numero;
//     }
//     //SI LO INTRODUCIDO NO ES UN NÚMERO
//     else {
//     //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }
// //VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
// } while (numero != undefined);
// //SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
// document.write(suma);


// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//DECLARAMOS LAS VARIABLES QUE VAMOS A USAR
// var resto = 0;
// var letra = "";
// do {
//     var numero = prompt("Introduce tu dni");
//     if (Number(numero) == numero) {
//         numero = Number(numero);
//         if (numero >= 0 && numero <= 99999999) {
//             //CALCULAMOS EL RESTO DE DIVIDIR EL NÚMERO ENTRE 23
//             resto = numero % 23;
//             //SEGÚN SEA EL RESTO ASIGNAMOS UN VALOR A LA VARIABLE LETRA
//             switch (resto) {
//                 case 0:
//                     letra = "T";
//                     break;
//                 case 1:
//                     letra = "R";
//                     break;
//                 case 2:
//                     letra = "W";
//                     break;
//                 case 3:
//                     letra = "A";
//                     break;
//                 case 4:
//                     letra = "G";
//                     break;
//                 case 5:
//                     letra = "M";
//                     break;
//                 case 6:
//                     letra = "Y";
//                     break;
//                 case 7:
//                     letra = "F";
//                     break;
//                 case 8:
//                     letra = "P";
//                     break;
//                 case 9:
//                     letra = "D";
//                     break;
//                 case 10:
//                     letra = "X";
//                     break;
//                 case 11:
//                     letra = "B";
//                     break;
//                 case 12:
//                     letra = "N";
//                     break;
//                 case 13:
//                     letra = "J";
//                     break;
//                 case 14:
//                     letra = "Z";
//                     break;
//                 case 15:
//                     letra = "S";
//                     break;
//                 case 16:
//                     letra = "Q";
//                     break;
//                 case 17:
//                     letra = "V";
//                     break;
//                 case 18:
//                     letra = "H";
//                     break;
//                 case 19:
//                     letra = "L";
//                     break;
//                 case 20:
//                     letra = "C";
//                     break;
//                 case 21:
//                     letra = "K";
//                     break;
//                 case 22:
//                     letra = "E";
//                     break;
//                 default:
//                 //SI NO ES UN NÚMERO ENTRE 0 Y 22 MOSTRAMOS UN ERROR
//                     alert("Numero erroneo");
//             }
//         }
//         //MOSTRAMOS MENSAJE CON EL DNI Y LA LETRA OBTENIDA
//         alert("Numero: " + numero + ", Letra: " + letra);
//     }
//     //SI NO ES UN NÚMERO
//     else {
//         //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }
// //MIENTRAS NO SE PULSE CANCELAR VUELVE ARRIBA
// } while (numero != undefined);


// //  //DECLARAMOS LAS VARIABLES    
// var i, rep;
// //BUCLE FOR PARA RECORRER DE 1 A 30
// for (i = 1; i <= 30; i++) {
//     //BUCLE INTERIOR PARA HACER LAS REPETICIONES
//     for (rep = 0; rep < i; rep++) {
//         //IMPRIMIMOS EL NÚMERO i, i VECES
//         document.write(i);
//     }
//     //IMPRIMIMOS UN SALTO DE LÍNEA
//     document.write("<br>");
// }


//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
//PEDIMOS EL NÚMERO POR TECLADO
// var numrep = prompt("Introduce numero de repeticiones");
// //SI LO INTRODUCIDO ES UN NÚMERO
// if (Number(numrep) == numrep) {
//     //SI ES UN NÚMERO ENTRE 1 Y 50
//     if (numrep > 0 && numrep <= 50) {
//         var rep,i;
//         //BUCLE QUE VA DESDE numrep HASTA 1
//         for (i = numrep; i >= 1; i--) {
//             //BUCLE DESDE i HASTA 1
//             for (rep = i; rep >= 1; rep--) {
//                 document.write(i);
//             }
//             document.write("<br>");
//         }
//     } 
//     else {
//         alert("El número introducido no es válido");
//     }
// } 
// else {
//     alert("No has introducido un número");
// }


// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// //PEDIMOS EL NÚMERO POR TECLADO
// var numrep = prompt("Introduce numero de repeticiones");
// //SI LO INTRODUCIDO ES UN NÚMERO
// if (Number(numrep) == numrep) {
//     //SI ES UN NÚMERO ENTRE 1 Y 50
//     if (numrep > 0 && numrep <= 50) {
//         var rep,i;
//         //BUCLE QUE VA DESDE 0 HASTA numrep
//         for (i = 0; i <=numrep; i++) {
//             //BUCLE DESDE 1 HASTA i
//             for (rep = 1; rep <= i; rep++) {
//                 document.write(rep);
//             }
//             document.write("<br>");
//         }
//     } 
//     else {
//         alert("El número introducido no es válido");
//     }
// } 
// else {
//     alert("No has introducido un número");
// }

//Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. 

//IMPRIMOS UNA LÍNEA HORIZONTAL   
// document.write("<hr>");
// //DECLARAMOS LAS VARIABLES
// var i;
// var j = 500;
// var rep = 0;
// //BUCLE DESDE 1 HASTA j
// for (i = 1; i <= j; i++) {
//     //IMPRIMIMOS EL NÚMERO i
//     document.write(i);
//     //SI EL RESTO DE DIVIDIR i/4 ES IGUAL A 0
//     if (i % 4 == 0) {
//         document.write(" (Multiplo de 4)");
//     }
//     //SI EL RESTO DE DIVIDIR i/9 ES IGUAL A 0
//     if (i % 9 == 0) {
//         document.write(" (Multiplo de 9)");
//     }
//     //IMPRIMIMOS UN SALTO DE LÍNEA
//     document.write("<br>");
//     //SI ES MÚLTIPLO DE 5 IMPRIMIMOS UNA LÍNEA HORIZONTAL
//     if (i % 5 == 0) {
//         document.write("<hr>");
//     }
// }


//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//DECLARAMOS LAS VARIABLES
// var i,j;
// //PEDIMOS POR TECLADO EL NÚMERO DE FILAS
// //Number fuerza a que se introduzca un número
// var filas = Number(prompt("Introduce numero de filas"));
// //PEDIMOS EL NÚMERO DE COLUMNAS
// var colum = Number(prompt("Introduce numero de columnas"));
// //MULTIPLICAMOS filas * columnas Y GUARDAMOS EL RESULTADO EN res
// var res = filas * colum;
// //COMENZAMOS A IMPRIMIR LA TABLA
// document.write("<table border>");
// //BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
// for (i = 0; i < filas; i++) {
//     //EN CADA FILA ESCRIBIMOS UN <tr> PARA COMENZAR LA FILA
//     document.write("<tr>");
//     //BUCLE DESDE 0 HASTA EL NÚMERO DE COLUMNAS
//     for (j = 0; j < colum; j++) {
//         //EN CADA UNA ESCRIBIMOS UN <td> PARA COMENZAR UNA CELDA
//         document.write("<td>");
//         //LUEGO ESCRIBIMOS EL VALOR DE res
//         document.write(res);
//         //LE RESTAMOS 1 A res
//         res--;
//         //Y ESCRIBIMOS UN </td> PARA CERRAR LA CELDA
//         document.write("</td>");
//     }
//     //ESCRIBIMOS UN </tr> PORQUE SE TERMINÓ LA FILA
//     document.write("</tr>");
// }
// //Y POR ÚLTIMO CERRAMOS LA TABLA CON </table>
// document.write("</table>");


// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 

// let nombre1 = prompt('Ingrese un nombre');
// let edad1 = parseInt(prompt('Ingrese edad'));

// let nombre2 = prompt('Ingrese un nombre');
// let edad2 = parseInt(prompt('Ingrese edad'));

// let nombre3 = prompt('Ingrese un nombre');
// let edad3 = parseInt(prompt('Ingrese edad'));

// let maximo = Math.max(edad1, edad2, edad3);

//  if (maximo === edad1) {
//     document.write(`${nombre1} es el mayor`)
//  } else if (maximo === edad2) {
//     document.write(`${nombre2} es el mayor`)
//  } else {
//     document.write(`${nombre3} es el mayor`)
//  } 


// Realiza un script que genere un número aleatorio entre 1 y 99

// let num = Math.floor((Math.random()*99)+1);

// document.write(num)


//Realiza un script que pida un texto y lo muestre en mayúsculas.

// const pedido = prompt("Introduce el texto");
//     document.write(pedido.toUpperCase());


//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// var cadena = prompt("Introduce una cadena de texto:");
//     var numchar = cadena.length;    //Devuelve la longitud del string.
//     var caracter;
//     var i;
//     for (i = 0; i < numchar; i++) {
// 	caracter = cadena.charAt(i);    //recupera el caracter i del string.
// 	if (i == numchar - 1) {
// 		document.write(caracter);
// 	}
// 	else {
// 		document.write(caracter + "-");
// 	}
//     }

//Realiza un script que cuente el número de vocales que tiene un texto.

// var cadena = prompt("Introduce una cadena de texto:");
//     var numchar = cadena.length;    //Devuelve la longitud del string.
//     cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
//     var car;
//     var contador = 0;
//     var i;
//     for (i = 0; i < numchar; i++) {
//         car = cadena.charAt(i);    //recupera el caracter i del string.
//         if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
//             contador++;
//         }
//     }
//     document.write("Número de Vocales: " + contador + ".");


//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// var cadena = prompt("Introduce un Texto:");
//     var numchar = cadena.length;
//     var j;
//     var car;
//     var salida = "";
//     for (j = 0; j < numchar; j++) {
//         car = cadena.charAt(j);    //recupera el caracter i del string.
//         salida = car + salida;
//     }
//     document.write(salida);


//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

//DECLARACIÓN DEL ARRAY DE VOCALES
var vocales = ["a", "e", "i", "o", "u"];
var texto = prompt("Introduce un texto");
//PASAMOS EL TEXTO A MINÚSCULAS
var textomin = texto.toLowerCase();
//DECLARAMOS LA VARIABLE posicion DONDE GUARDAREMOS LA POSICIÓN DE LA VOCAL
var posicion = 0;
//DECLARAMOS UNA BANDERA Y LA INICIALIZAMOS A FALSE
var parar = false;
//BUCLE QUE RECORRE EL TEXTO
for (var i = 0; i < textomin.length; i++) {
    //BUCLE QUE RECORRE EL ARRAY DE VOCALES
    for (var j = 0; j < vocales.length; j++) {
        //SI LA VOCAL i ESTÁ EN EL ARRAY DE VOCALES
        if (vocales[j] == textomin.charAt(i)) {
            //GUARDAMOS LA POSICIÓN
            posicion = i;
            //PONEMOS LA BANDERA EN TRUE
            parar = true;
            //CORTAMOS LA EJECUCIÓN DEL BUCLE INTERIOR
            break;
        }
    }
    //SI LA BANDERA ESTÁ EN TRUE
    if (parar) {
        //CORTAMOS LA EJECUCIÓN DEL BUCLE EXTERIOR
        break;
    }
}
//IMPRIMIMOS EL RESULTADO
document.write("La primera vocal está en la posición " + posicion);