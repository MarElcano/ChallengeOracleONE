

function desencriptar(mensaje){
    var frase=mensaje.split('')
    for(var i=0; i< frase.length ; i++){
        letra=frase[i];
        letra2=frase[i+1]
        letra3=frase[i+2]
        letra4=frase[i+3]
        letra5=frase[i+4]
        var coincidencia=false
        if(letra=="a"|letra=="e"|letra=="i"|letra=="o"|letra=="u"){
            coincidencia=true
        }
        if(coincidencia==true){
            if(letra=="a" && letra2=="i"){
                frase.splice(i, 2, "a")
            }
            if(letra=="e" && letra2=="n" && letra3=="t" && letra4=="e" && letra5=="r"){
                frase.splice(i, 5, "e")
            }
            if(letra=="i" && letra2=="m" && letra3=="e" && letra4=="s"){
                frase.splice(i, 4, "i")
            }
            if(letra=="o" && letra2=="b" && letra3=="e" && letra4=="r"){
                frase.splice(i, 4, "o")
            }
            if(letra=="u" && letra2=="f" && letra3=="a" && letra4=="t"){
                frase.splice(i, 4, "u")
            }
        }
    }
    var desencriptacion=""
    for(i=0; i<frase.length; i++){
        letra=frase[i]
        desencriptacion=desencriptacion+letra
    }
    console.log(desencriptacion)
    return desencriptacion
}

function solucion2(){
    frase=""
    document.querySelector("#msg").value= "";
    var input = capturarInput()
    var solucion=desencriptar(input)
    document.querySelector("#msg").value = solucion;
    document.querySelector("#input").focus()
}
