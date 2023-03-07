

function calcular(){

    let val01 = document.getElementById('val01').value ;
    let val02 = document.getElementById('val02').value ;
    let int01 = parseInt(val01);
    let int02 = parseInt(val02);
    let operador = document.getElementById('operador').value ;
    let resultado = 0 ;

    if (operador == '+' ){
       resultado = int01 + int02 ;
       alert('O resultado: ' + resultado); 
    } else if (operador == '-'){
        resultado = int01 - int02 ;
       alert('O resultado: ' + resultado);
    } else if (operador == '*'){
        resultado = int01 * int02 ;
       alert('O resultado: '+ resultado);
    } else if (operador == '/'){
        resultado = int01 / int02 ;
       alert('O resultado: '+ resultado);
    } else{
        alert('Erro inesperado');
    };
}