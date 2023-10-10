function calcularValores() {
    let valorTotalInput = parseFloat(document.getElementById("valorTotalInput").value);
    let valorHorasInput = parseFloat(document.getElementById("valorHorasInput").value);
    let valorDiasInput = parseFloat(document.getElementById("valorDiasInput").value);
    let valorFeriasInput = parseFloat(document.getElementById("valorFeriasInput").value);

    let resultado = (valorTotalInput / (valorDiasInput * 4 * valorHorasInput)) + ((valorFeriasInput * valorDiasInput * valorHorasInput));
    resultado = Math.floor(resultado); // Arredonda para o número inteiro mais próximo

    let resultadoDiv = document.getElementById("Resultado");
    resultadoDiv.textContent =  + resultado;
}
