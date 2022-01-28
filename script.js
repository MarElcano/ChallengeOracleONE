function capturarInput(){
    var input=document.querySelector("#input")
    return input.value
}

var fraseencriptada=""

function encriptar(mensaje){
    var frase = mensaje.split('')
    for(var i=0; i< frase.length ; i++){
        letra=frase[i];
        var coincidencia=false
        if(letra=="a"|letra=="e"|letra=="i"|letra=="o"|letra=="u"){
            coincidencia=true
        }
        if(coincidencia==true){
            if(letra=="a"){
                fraseencriptada=fraseencriptada + "ai";
            }
            if(letra=="e"){
                fraseencriptada=fraseencriptada + "enter";
            }
            if(letra=="i"){
                fraseencriptada=fraseencriptada + "imes";
            }
            if(letra=="o"){
                fraseencriptada=fraseencriptada + "ober";
            }
            if(letra=="u"){
                fraseencriptada=fraseencriptada + "ufat";
            }
        }   else{
            fraseencriptada=fraseencriptada + letra
        }
    }
    return fraseencriptada
}

function solucion(){
    fraseencriptada=""
    document.querySelector("#msg").value= "";
    var input = capturarInput()
    var solucion=encriptar(input)
    document.querySelector("#msg").value = solucion;
    document.querySelector("#input").focus()
}

