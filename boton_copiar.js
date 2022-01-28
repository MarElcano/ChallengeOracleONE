var botonCopiar= document.querySelector("#btn-copy");

function copiar(){
    var texto=document.querySelector("#msg").value;
    navigator.clipboard.writeText(texto);
    alert("copiado!");
}

botonCopiar.onclick = copiar;