var estado=1;
var valor1;
var valor2;
var operacion;

function init() {

    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var dividir = document.getElementById("division");
    var resul = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //eventos

    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";

    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";

    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";

    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";

    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";

    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";

    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";

    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";

    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";

    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";

    }

    reset.onclick = function (e) {
        resultado.textContent = "";
        estado=1;

    }

    suma.onclick = function (e) {

        if (estado==1){

            if (resultado.textContent == ""){
                alert("No hay ningun valor para sumar")
                }else{
                    estado = 2;
                    valor1 = resultado.textContent;
                    operacion = "+";
                    resultado.textContent="";
                }
                
        }else{
            valor1=valor2;
            operacion = "+";
            resultado.textContent="";
        }


    }
         
    resul.onclick = function (e) {
        
        if (estado==2){
            valor2 = resultado.textContent;
            if (operacion == "+"){
            resultado.textContent=parseInt(valor1)+parseInt(valor2);
            valor2=parseInt(valor1)+parseInt(valor2);
            }else{
                if (operacion == "-"){
                    resultado.textContent=parseInt(valor1)-parseInt(valor2);
                    valor2=parseInt(valor1)-parseInt(valor2);
                    }else{
                        if (operacion == "*"){
                            resultado.textContent=parseInt(valor1)*parseInt(valor2);
                            valor2=parseInt(valor1)*parseInt(valor2);
                            }else{
                                if (operacion == "/"){
                                    resultado.textContent=parseInt(valor1)/parseInt(valor2);
                                    valor2=parseInt(valor1)/parseInt(valor2);
                                    }
                            }
                    }
            }
        }else{
            alert("Es necesario que ingrese un valor inicial y uno final para realizar alguna operación")
        } 
        
    }

    resta.onclick = function (e) {
        if (estado==1){

            if (resultado.textContent == ""){
                alert("No hay ningun valor para restar")
                }else{
                    estado = 2;
                    valor1 = resultado.textContent;
                    operacion = "-";
                    resultado.textContent="";
                }
                
        }else{
            valor1=valor2;
            operacion = "-";
            resultado.textContent="";
        }
    }

    multiplicacion.onclick = function (e) {

        if (estado==1){

            if (resultado.textContent == ""){
                alert("No hay ningun valor para multiplicar")
                }else{
                    estado = 2;
                    valor1 = resultado.textContent;
                    operacion = "*";
                    resultado.textContent="";
                }
                
        }else{
            valor1=valor2;
            operacion = "*";
            resultado.textContent="";
        }
    }

    dividir.onclick = function (e) {

        if (estado==1){

            if (resultado.textContent == ""){
                alert("No hay ningun valor para dividir")
                }else{
                    estado = 2;
                    valor1 = resultado.textContent;
                    operacion = "/";
                    resultado.textContent="";
                }
                
        }else{
            valor1=valor2;
            operacion = "/";
            resultado.textContent="";
        }
    }


   


}