
//funcion la que va a iniciar la cadena o texto con la alerta llamando al identificador
function revisar(){
    //variables
    var cadena = document.getElementById("cadena").value; //para escribir o la referemcia del primer objeto o ID cadena
    var listado = document.getElementById("listado");
    var text1 = new String(cadena);
    if(text1.charCodeAt(0)>= 65 && text1.charCodeAt(0) <= 90 | text1.charCodeAt(0)>=97 && text1.charCodeAt(0) <= 122){
        evaluarIdentificador(text1);
    }
    if(text1.charCodeAt(0)>= 48 && text1.charCodeAt(0) <=59){
        evaluarNumero(text1);
    }
    if((text1.charCodeAt(0)>=33 && text1.charCodeAt(0)<=47)) {
        evaluarSimbolo(text1);
    } 
    }
//funcion para evaluar  la letra y error
function evaluarIdentificador(text1)
{
    var integridad=true;
    for (var index = 1; index < text1.length; index++) {
        if((text1.charCodeAt(index)>= 65 & text1.charCodeAt(index) <= 90) | 
        (text1.charCodeAt(index)>=97 & text1.charCodeAt(index) <= 122) |
        (text1.charCodeAt(index)>= 48 & text1.charCodeAt(index) <=59)){

        }else{
            alert("NO ACEPTADO"); //alerta para verificar que ha no ha sido aceptado
            integridad =false;
            break;
        }
    }
    
    if(integridad==true){
        listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+"Identificador"+"</li>";
    }
    if(integridad==false){
        listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+"Error"+"</li>";
    }


}
//funcion para mostrar numeros o error
function evaluarNumero(text1){
    var integridad=true;
    for (var index = 1; index < text1.length; index++) {
        if(text1.charCodeAt(index)>= 48 && text1.charCodeAt(index) <=59){

        }else{
            alert("NO ACEPTADO");
            integridad =false;
            break;
        }
    }
    
    if(integridad==true){
        listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+"Numero"+"</li>";
    }
    if(integridad==false){
        listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+"Error"+"</li>";
    }
}
//funcion para mostrar simbolo y error
function evaluarSimbolo(text1){
    var integridad=true;
    for (var index = 1; index < text1.length; index++) {
        if((text1.charCodeAt(index)>=33 && text1.charCodeAt(index)<=47)) {

        }else{
            alert("NO ACEPTADO");
            integridad =false;
            break;
        }
    }
    
    if(integridad==true){
        listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+"Simbolo"+"</li>";
    }if(integridad==false){
        listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+"Error"+"</li>";
    }
}
