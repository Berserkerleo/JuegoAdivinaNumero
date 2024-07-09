let numeroSecreto=0;//Se usa la función para generar un número aleatorio
let intentos=0;//Se especifica el número de intentos
let listaNumerosSorteados=[];
let numeroMaximo=10;//Aquí pondremos el número de intentos que queremos que haga el usuario
//Esta función permite cambiar el valor del campo texto y lo actualiza según sea el caso
function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
//Esta función se encarga de hacer la comparación
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);//Pide y convierte el número del usuario
    console.log(numeroSecreto);
    console.log(numeroDeUsuario===numeroSecreto);    
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){//En este if se realiza la comparación
        asignarTextoElemento('p',`Acertaste el número!!, el número era ${numeroSecreto}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;//Aumenta el contador de intentos
        limpiarCampo();// Aquí llamamos la función que actualiza el campo donde el usuario digita su número.
    }
    return;
}
//Esta función genera el número secreto, para cambiar el rango de generación se debe cambiar el 10
function generarNumeroSecreto() {
    console.log(listaNumerosSorteados);
    //return Math.floor(Math.random()*numeroMaximo)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //Declaramos la variable de esta forma para agregar los elementos a la lista
    console.log(numeroGenerado);
    //Si ya se sortearon todos los números
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Todos los números fueron sorteados')
    }else{
        //Hacemos un if para cuando vayamos agregar algún elemento a la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
//Esta función se encargará de limpiar el campo para que el usuario no esté actualizando constantemente el campo.
function limpiarCampo() {
    
    document.querySelector('#valorUsuario').value='';// Es la versión resumida de las líneas de abajo
    /*let valorCaja= document.querySelector('#valorUsuario');
    valorCaja.value= '';*/
}
//Esta función guardará los mensajes iniciales
function condicionesIniciales() {
    //Aquí se cambia el mensaje en la página
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indicame un número del 1 al ${numeroMaximo}`);    
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}
//Esta función se encarga de reiniciar el juego, es decir habilita el botón limpiar y vuelve a condiciones iniciales.
function reiniciarJuego(){
    limpiarCampo();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}
/*function numeroMaximoDeIntentosF() {
    if(intentos>numeroMaximoDeIntentos){
        asignarTextoElemento('p','Llegaste al número máximo de intentos, más suerte a la próxima');
    }
    
}*/
condicionesIniciales();


