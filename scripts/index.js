const botonEncriptar=document.getElementById("encriptar");
const botonDesencriptar=document.getElementById("desencriptar");
const botonCopiarTexto=document.getElementById("copiar-texto");
const areaTranscripcion=document.getElementById("contenido-transcripto");

botonEncriptar.addEventListener("click", function(){
    areaTranscripcion.innerHTML = `<textarea id="transcripcionArea" readonly>${encriptar()}</textarea>`;
});

botonDesencriptar.addEventListener("click", function(){
    areaTranscripcion.innerHTML = `<textarea id="transcripcionArea" readonly>${desencriptar()}</textarea>`;
});

botonCopiarTexto.addEventListener("click", function(){
    copiar(areaTranscripcion.textContent);
});

