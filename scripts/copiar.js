function copiar(elemento){
    navigator.clipboard.writeText(elemento)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
};
