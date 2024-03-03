console.log('Hola Mundo.');

//Aqui se definen las variables necesarias en el challenge.
const desencriptado = document.querySelector('#textDesencriptado')
const mensaje_encriptado= document.querySelector('#textEncriptado')
let copiar= document.querySelector("#copiar");
let repeticiones= 1;

//Función de texto para el text area deencriptado.
function asignarTextoElemento(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = (texto);
    return;
}

//(vocales) que se encriptan y desencriptan, (matriz de dos entradas).
const matriz_code = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
]

//Función de texto para el textarea 'deencriptado'.
{asignarTextoElemento('textarea','Ingresa un texto sin acento(´) ni mayusculas.')}
    desencriptado.addEventListener("click", (event) => {
        desencriptado.textContent = '';
    });
    
//Aqui se definen las funciones de estilo en el boton 'copiar' y 'texareaEncriptado'.
function copiarVista(){
    if(btnencriptar=true){
        copiar.style.opacity='1';
    }else{
        if(btndesencriptar=true){
        copiar.style.opacity='1';  
        }
    }return copiarVista;
}
function copiarOpacity(){
    copiar.style.transition='3s';
    copiar.style.opacity='0';
}
function textareaEncriptado(){
    if(btnencriptar=true){
        mensaje_encriptado.style.backgroundImage="url(imagenes/BackgroundEcrt.png)";
        copiar.textContent='Copiar'; 
    }else{
        if(btndesencriptar=true){
            mensaje_encriptado.style.backgroundImage="url(imagenes/BackgroundEcrt.png)";
            copiar.textContent='Copiar';
        }
    }
}

//Funciones de encriptado y desenciptado (codificación del texto). 
function encriptarMensaje(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
           }
        } return fraseEncriptada;
}
function desencriptarMensaje(msjDesencriptado){
    const matriz_codeReversed = [...matriz_code].reverse();
    for(let i = 0; i < matriz_codeReversed.length; i++) {
        if(msjDesencriptado.includes(matriz_codeReversed[i][0])){
            msjDesencriptado = msjDesencriptado.replaceAll(
                matriz_codeReversed[i][1],
                matriz_codeReversed[i][0]
            )
           }
        }return msjDesencriptado;
}

//Funciones de los botones 'Encriptar', 'Desencriptar' y 'Encriptar'.
function btnEncriptar(){
    const textoEncrt = encriptarMensaje(desencriptado.value);
        mensaje_encriptado.value = textoEncrt;
        copiarVista();
        textareaEncriptado();
}
function btnDesencriptar(){
    const texto = desencriptarMensaje(desencriptado.value);
        mensaje_encriptado.value = texto;
        copiarVista();
        textareaEncriptado();
} 
function copiarTexto(){
    navigator.clipboard.writeText(mensaje_encriptado.value);
    copiar.style.transition='1s';
    copiar.textContent='Copiado';
    copiarOpacity();
}  