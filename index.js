
function suma(a,b){
    return a + b ;
}

function resta(a,b){
    return a - b;
}

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function concatenar (a,b){
    return a+b;
}

function sumaConcatena(a,b,c){
    return a+b+c;
}


function btnSumar(){
    num1  = Number(document.getElementById('num1').value)
    num2  = Number(document.getElementById('num2').value)

    
    document.getElementById('resultado').innerHTML = suma(num1,num2)

}


function esPar(num){
    return num % 2 == 0
}

// realizar una funcion  donde se 
// ingrese dos puntos y hallar la distancia entre ellos

function distanciaP1P2(x1,y1,x2,y2){
    return distancia
}