let operando = "";  // Para armazenar o número que está sendo digitado
let operador = ""
let resultado = 0;  // Para armazenar o resultado final

function atualizarDisplay(valor) {
    document.getElementById('display').value = valor;
}

function adicionarNumero(numero) {
    operando += numero;  // Adiciona o número ao que já existe no display
    atualizarDisplay(operando);  // Atualiza o display
}

function limparDisplay() {
    operando = ""; 
    operador = "";
    resultado = 0;
    atualizarDisplay("");  // Limpa o display
}

// Define o operador e realiza cálculos intermediários
function operacao(novoOperador) {
    if (operando !== "") {
        // Converte o operando atual para número e acumula no resultado
        if (resultado === 0) {
            resultado = parseFloat(operando);
        } else {
            // Executa a operação anterior antes de definir o novo operador
            calcular();
        }
    }
    operador = novoOperador;  // Atualiza o operador
    operando = "";  // Prepara para o próximo número
}

function calcular() {
    if (operador && operando !== "") {
        let segundoOperando = parseFloat(operando);  // Proximo numero
        switch (operador) {
            case "+":
                resultado += segundoOperando;
                break;
            case "-":
                resultado -= segundoOperando;
                break;
            case "*":
                resultado *= segundoOperando;
                break;
            case "/":
                if (segundoOperando !== 0) {
                    resultado /= segundoOperando;
                } else {
                    atualizarDisplay(value = "Erro: Divisão por 0");
                    return;
                }
                break;
            default:
                atualizarDisplay("Erro: Operador inválido");
                limparDisplay();
                return;
        }
        operador = "";  // Reseta o operador após calcular
        operando = "";  // Prepara para o próximo número
        atualizarDisplay(resultado);  // Exibe o resultado acumulado
    }
}

function apagarNumero(){
    operando = operando.slice(0, -1);
    atualizarDisplay(operando);
}

function adicionarPontoDecimal() {
    // Verifica se o operando está vazio e adiciona '0.' caso esteja
    if (operando === "") {
        operando = "0.";  // Adiciona o '0.' ao invés de só '.'
    }
    // Verifica se já existe um ponto no operando e adiciona o ponto apenas se não existir
    else if (!operando.includes(".")) {
        operando += ".";  // Adiciona o ponto decimal se não existir um
    }
    atualizarDisplay(operando);  // Atualiza o display com o valor atualizado
}





