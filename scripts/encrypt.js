function encriptar(){
    let textoIngresado = document.getElementById("texto-ingresado").value.trim();
    let nuevoTexto = '';
    for(let i=0; i < textoIngresado.length; i++){
        if(textoIngresado[i] === 'a'){
            nuevoTexto += textoIngresado[i].replace('a', 'ai');
            continue;
        }
        if(textoIngresado[i] === 'e'){
            nuevoTexto += textoIngresado[i].replace('e', 'enter');
            continue;
        }
        if(textoIngresado[i] === 'i'){
            nuevoTexto += textoIngresado[i].replace('i', 'imes');
            continue;
        }
        if(textoIngresado[i] === 'o'){
            nuevoTexto += textoIngresado[i].replace('o', 'ober');
            continue;
        }
        if(textoIngresado[i] === 'u'){
            nuevoTexto += textoIngresado[i].replace('u', 'ufat');
            continue;
        }

        nuevoTexto += textoIngresado[i];

    }

    document.getElementById("copiar-texto").classList.remove("oculto");
        
    return nuevoTexto;
};

function desencriptar(){
    let textoIngresado = document.getElementById("texto-ingresado").value.trim().split(' ');
    let nuevoTexto = ''; 
    for (let i=0; i < textoIngresado.length; i++){
        nuevoTexto += textoIngresado[i].replaceAll('ai', 'a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober', 'o').replaceAll('ufat', 'u') + ' ';
    }
    document.getElementById("copiar-texto").classList.remove("oculto");
    return nuevoTexto;
};