//Ejercicio 1

/*function saludo(){
    console.log("Hola mundo");
    return;
}

saludo();*/

//Ejercicio 2

/*function mostrarNombre(nombre) {
    document.getElementById('nombreUsuario');
    console.log(`Hola ${nombre}`);
    return;
}
mostrarNombre("Leandro");*/

//Ejercicio 3

/*function dobleDeNumero(numero) {
    return numero*2;
}
let resultadoDoble = dobleDeNumero(5)
console.log(resultadoDoble);*/

//Ejercicio 4

/*function promedioTresNumeros(numero1,numero2,numero3){
    return (numero1+numero2+numero3)/3
}

let resultadoPromedio = promedioTresNumeros(1, 5, 3);
console.log(resultadoPromedio);*/

//Ejercicio 5

/*function encontrarNumeroMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
  }
  let numeroMayor = encontrarNumeroMayor(12, 11);
  console.log(numeroMayor);*/

//Ejercicio 6

/*function cuadradoDeUnNumero(numeroUsuario){
    return numeroUsuario*numeroUsuario;
}
let devuelveCuadrado= cuadradoDeUnNumero(8);
console.log(devuelveCuadrado);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AULA3

//Ejercicio 1
function indiceMasaCorporal(peso,estatura) {
    let estaturaMetros=estatura*100;
    return(peso/(estaturaMetros*estaturaMetros))
}

//Ejercicio 2
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//Ejercicio 3
function convertirAReales(dolares) {
    var cotizaciónDolar=4.83;
    var reales=dolares*cotizaciónDolar;
    return reales;
}  
//Ejemplo
let valorEndolar=100;
let valorEnReales=convertirAReales(valorEndolar);
console.log(`${valorEndolar} Dólares equivalen a ${valorEnReales} Reales`)

//Ejercicio 4
function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);

  //Ejercicio 5
  function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);

nombreDelArreglo[nombreDelArreglo.length-1]