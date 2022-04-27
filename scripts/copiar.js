function copiar(elemento){
    navigator.clipboard.writeText(elemento)
        .then(() => {
        let mensaje = document.getElementById("confirmacion");
        mensaje.innerText = 'Texto copiado'; 
        mensaje.classList.remove("oculto");
        setTimeout(function(){
            mensaje.classList.add("oculto");
        },3000);
        
    })
        .catch(err => {
        let mensaje = document.getElementById("confirmacion");
        mensaje.innerText = 'El texto no se copió: ' + err; 
        mensaje.classList.remove("oculto");
        setTimeout(function(){
            mensaje.classList.add("oculto");
        },5000);
    });

};
