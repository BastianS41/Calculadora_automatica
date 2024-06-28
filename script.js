//agrega a la pantalla el valor del boton de la calculadora a lo que se toque
function agregarALaPantalla(valor){
    document.getElementById('pantalla').value += valor
}

// Vacia la pantalla
function borrar(){
    document.getElementById('pantalla'). value = ''
}

//Toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}