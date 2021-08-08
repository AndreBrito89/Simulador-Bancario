/////////////////////////////
/////objeto gerente aux/////
///////////////////////////

var gerente = new Gerente(

        sessionStorage.getItem("GE_Nome_"),
        sessionStorage.getItem("GE_Agencia_"),
        'gerente',
        sessionStorage.getItem("GE_Senha_"),
        sessionStorage.getItem("GE_Login_")
    )
    ////////////////////////
    ////// métodos ////////
    //////////////////////

function verificarUsuarios() {
    let contador = 1,
        auxiliar = '420';

    for (contador; contador < 6; contador++) {

        auxiliar += contador

        var correntista = new Acionista(
            sessionStorage.getItem(("AC_Nome_" + auxiliar)),
            sessionStorage.getItem(("AC_Agencia_" + auxiliar)),
            "acionista",
            sessionStorage.getItem(("AC_Senha_" + auxiliar)),
            auxiliar,
            new Conta(auxiliar, sessionStorage.getItem(("AC_Senha_" + auxiliar)), sessionStorage.getItem(("AC_Nome_" + auxiliar)),
                Number(sessionStorage.getItem(("AC_SaldoConta_") + auxiliar)))

        )

        listaDeCorrentistas.push(correntista)

        auxiliar = '420'

    }
}

function mostrarUsuarios() {
    verificarUsuarios()

    listaDeCorrentistas.forEach(acionista =>
        document.getElementById("informacoesAcionistas").innerHTML += (
            "<br>________________________________" +
            "<br>Nome: " + acionista.getNome() +
            "<br> Agência: " + acionista.agencia +
            "<br>Número da conta: " + acionista.conta.numeroDaConta) +
        "<br>Saldo atual da conta: " + acionista.conta.saldoDaConta +
        "<br>-----------------------------------------------------"
    )

}

function calcularSaldoAgencia() {
    var saldoAgencia = 0;
    listaDeCorrentistas.forEach(acionista =>
        // console.log(acionista.conta.saldoDaConta),
        saldoAgencia += Number(acionista.conta.saldoDaConta)
    )
    document.getElementById("informacoesAgencia").innerHTML = ("O saldo atual da agência é de R$" + saldoAgencia)
}

//////////////////
///// MAIN //////
////////////////
var listaDeCorrentistas = []
document.getElementById("areaLogado").innerHTML += ("Bem vindo, " + gerente.nome + ".")
gerente.criarBotaoLogout()
var botaoSair = document.getElementById("botaoLogout")
botaoSair.setAttribute('onclick', "gerente.fazerLogout()")
mostrarUsuarios()
calcularSaldoAgencia()