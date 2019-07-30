//variables var para mis letras, numeros y simbolos
var cadena1;
var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");
var simbolos = document.getElementById("simbolos");

var tipo = "-ERROR-";
var nLetras = 0, nSim = 0, nNumeros = 0, nCadena = false;

//la que va a iniciar con la alerta
function practicaDaniel(){
    
    if(cadena == ""){
        alert("casilla");
    }
    else{
        identificador();
    }

}

//para comparar y analizar, e identificar si es letra, numero o simbolo
function identificador(){
    var cadena = document.getElementById("cadena").value;
    var cadena2 = new String(cadena);
    var contNum = 0;
    var contLetras = 0;
    var contSimbolo = 0;
    for(var i = 0; i < cadena2.length; i++){
        if(cadena2.charCodeAt(i)>= 65 && cadena2.charCodeAt(i) <= 90 || cadena2.charCodeAt(i)>=97 && cadena2.charCodeAt(i) <= 122){
            
            contLetras++;
        }
        else if(cadena2.charCodeAt(i)>= 48 && cadena2.charCodeAt(i) <=59   ){
           contNum++;
        }
        else if((cadena2.charCodeAt(i)>=32 && cadena2.charCodeAt(i)<=47) || (cadena2.charCodeAt(i)>=58 && cadena2.charCodeAt(i)<=64) || (cadena2.charCodeAt(i)>=91 && cadena2.charCodeAt(i)<=96) || (cadena2.charCodeAt(i)>=123 && cadena2.charCodeAt(i)<=126)) {
            contSimbolo++;
        } 
        
    }

// Me lo irá escribiendo en mi tabla que tengo en mi HTML

    if((contNum)==cadena2.length){
        console.log("NUMERO") //solo para verificar que me lo esta comparando
     
        var numero = "Numeros";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+numero+'</td><td></td></tr>';
        alert("Numeros")

    }else if((contLetras)==cadena2.length){
        
        console.log("LETRAS")
        var letra = "Letras";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+letra+'</td><td></td></tr>';
        alert("Letras")
   
    }else if((contSimbolo)==cadena2.length){

        console.log("SIMBOLO")
        var simbolo = "Letras";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+simbolo+'</td><td></td></tr>';
        alert("Simbolo")
       
    }else{

        console.log("ERROR")
        var error = "Error";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+error+'</td><td></td></tr>';
        alert("Error")
       
    }
}



















































  













