const botonEncriptar=document.getElementById("encriptar");
const botonDesencriptar=document.getElementById("desencriptar");
const botonCopiarTexto=document.getElementById("copiar-texto");
const areaTranscripcion=document.getElementById("contenido-transcripto");
const campoTexto = document.getElementById("texto-ingresado");

window.addEventListener("load", function(){

    resetearAreaTranscripcion();

    botonEncriptar.addEventListener("click", function(){
        areaTranscripcion.innerHTML = `<textarea id="transcripcionArea" readonly>${encriptar()}</textarea>`;
    });
    
    botonDesencriptar.addEventListener("click", function(){
        areaTranscripcion.innerHTML = `<textarea id="transcripcionArea" readonly>${desencriptar()}</textarea>`;
    });
    
    botonCopiarTexto.addEventListener("click", function(){
        copiar(areaTranscripcion.textContent);
    });
    
    campoTexto.addEventListener("blur", function(){
        if (campoTexto.value == ''){
            resetearAreaTranscripcion(); 
        }
    });

});

function resetearAreaTranscripcion(){
    areaTranscripcion.innerHTML = `
    <div id="munieco">
    <img src="./imagenes/Munieco.svg">
    </div>
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desees encriptar o desencriptar.</p>`
}

