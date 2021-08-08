////////////////////////////////
/////objeto acionista aux//////
//////////////////////////////

let acionistaLogado = new Acionista(sessionStorage.getItem('AC_Logado_Nome_'),
    sessionStorage.getItem('AC_Logado_Agencia_'),
    sessionStorage.getItem('AC_Logado_TipoDeUsuario_'),
    sessionStorage.getItem('AC_Logado_Senha_'),
    Number(sessionStorage.getItem('AC_Logado_NumeroDaConta_')),


    conta = new Conta(Number(sessionStorage.getItem('AC_Logado_NumeroDaConta_')),
        sessionStorage.getItem('AC_Logado_Senha_'),
        sessionStorage.getItem('AC_Logado_Nome_'),
        Number(sessionStorage.getItem('AC_Logado_SaldoConta_'))
    )

)


///////////////
///metodos////
/////////////
//-plotar informaçoes
function plottarInformaçõesCliente() {
    document.getElementById("informacoesUsuario").innerHTML +=
        (
            "Nome: " + acionistaLogado.getNome() +
            "<br> Agência: " + acionistaLogado.agencia +
            "<br>Número da conta: " + acionistaLogado.conta.numeroDaConta


        )
    atualizaSaldo()

}
//-atualiza saldo
function atualizaSaldo() {
    document.getElementById("valorSaldoAtual").innerHTML = ("R$ " + acionistaLogado.conta.saldoDaConta)
    sessionStorage.setItem(("AC_SaldoConta_" + acionistaLogado.conta.numeroDaConta), acionistaLogado.conta.saldoDaConta)
    sessionStorage.setItem('AC_Logado_SaldoConta_', acionistaLogado.conta.saldoDaConta)
}
//-inicia saque
function acionistaIniciarSaque() {

    //criar input
    var inputSaque = null;
    inputSaque = document.createElement("input")
    inputSaque.setAttribute('id', "inputValorSaque")
    inputSaque.setAttribute('class', "inputValorSaque")


    document.getElementById("saque").innerHTML = "<br>Digite quanto gostaria de sacar R$ "
    document.getElementById("saque").appendChild(inputSaque)
        //criar botao
    var botaoConfirmaSaque = document.createElement("button")
    botaoConfirmaSaque.setAttribute('id', "botaoConfirmaSaque")
    botaoConfirmaSaque.setAttribute('class', "botaoConfirmaSaque")
    botaoConfirmaSaque.setAttribute('onclick', 'acionistaConfirmaSaque()')
    document.getElementById("saque").appendChild(botaoConfirmaSaque)
    document.getElementById("botaoConfirmaSaque").innerHTML = "Confirmar saque."

}

//-confirma saque
function acionistaConfirmaSaque() {

    var valorSacado = Number(document.getElementById("inputValorSaque").value)
    document.getElementById("inputValorSaque").value = ""
    acionistaLogado.conta.saque(valorSacado)
    var apagaInput = document.getElementById("inputValorSaque")
    apagaInput.remove()
    var apagaBotaoConfirmarSaque = document.getElementById("botaoConfirmaSaque")
    apagaBotaoConfirmarSaque.remove()
    document.getElementById("saque").innerHTML = ""
    atualizaSaldo()
}


//-inicia deposito
function acionistaIniciarDeposito() {

    //criar input
    var inputDeposito = null;
    inputDeposito = document.createElement("input")
    inputDeposito.setAttribute('id', "inputValorDeposito")
    inputDeposito.setAttribute('class', "inputValorDeposito")

    document.getElementById("deposito").innerHTML = "<br>Digite quanto gostaria de depositar R$ "
    document.getElementById("deposito").appendChild(inputDeposito)
        //criar botao
    var botaoConfirmaDeposito = document.createElement("button")
    botaoConfirmaDeposito.setAttribute('id', "botaoConfirmaDeposito")
    botaoConfirmaDeposito.setAttribute('class', "botaoConfirmaDeposito")
    botaoConfirmaDeposito.setAttribute('onclick', 'acionistaConfirmaDeposito()')
    document.getElementById("deposito").appendChild(botaoConfirmaDeposito)
    document.getElementById("botaoConfirmaDeposito").innerHTML = "Confirmar deposito."

}
//-confirma deposito
function acionistaConfirmaDeposito() {
    var valorDepositado = Number(document.getElementById("inputValorDeposito").value)
    document.getElementById("inputValorDeposito").value = ""
    acionistaLogado.conta.deposito(valorDepositado)

    var apagaInput = document.getElementById("inputValorDeposito")
    apagaInput.remove()
    var apagaBotaoConfirmarDeposito = document.getElementById("botaoConfirmaDeposito")
    apagaBotaoConfirmarDeposito.remove()
    document.getElementById("deposito").innerHTML = ""
    atualizaSaldo()

}

//////////////
/// MAIN ////
////////////
document.getElementById("areaLogado").innerHTML += ("Bem vindo, " + acionistaLogado.getNome() + ".")
acionistaLogado.criarBotaoLogout()
var botaoSair = document.getElementById("botaoLogout")
botaoSair.setAttribute('onclick', "acionistaLogado.fazerLogout()")
plottarInformaçõesCliente()