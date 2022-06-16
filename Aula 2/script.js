let contador;
var valorGuardado;
function valorInicial() {
    contador = parseInt(document.querySelector("#inicial").value)
    if (contador == NaN) {
        contador = 0
    }
    return contador
}
function Reiniciar() {
    document.querySelector("#contador").innerHTML = valorInicial()
    valorGuardado = parseInt(valorInicial())
}
function Aumentar() {
    valorGuardado++
    document.querySelector("#contador").innerHTML = valorGuardado
}
function Diminuir() {
    valorGuardado--
    document.querySelector("#contador").innerHTML = valorGuardado
}