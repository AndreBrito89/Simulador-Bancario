///////////////////////////////
//// variaveis auxiliares ////
/////////////////////////////

var nomeRecebidoHtml, numeroContaRecebidoHtml, senhaRecebidaHtml, acionista;


///////////////
///metodos////
/////////////
function recebeNome() {

    nomeRecebidoHtml = document.getElementById("loginNome").value
    numeroContaRecebidoHtml = document.getElementById("loginNumeroDaConta").value
    senhaRecebidaHtml = document.getElementById("loginSenha").value

    document.getElementById("loginNome").value = ""
    document.getElementById("loginNumeroDaConta").value = ""
    document.getElementById("loginSenha").value = ""
}

function remontaCliente() {
    recebeNome()
    if (nomeRecebidoHtml === sessionStorage.getItem(('AC_Nome_' + numeroContaRecebidoHtml)) &&
        numeroContaRecebidoHtml === sessionStorage.getItem(('AC_NumeroDaConta_' + numeroContaRecebidoHtml)) &&
        senhaRecebidaHtml === sessionStorage.getItem(('AC_Senha_' + numeroContaRecebidoHtml))
    ) {
        // reinstancia cliente como logado

        acionista = new Acionista(sessionStorage.getItem(('AC_Nome_' + numeroContaRecebidoHtml)),
            sessionStorage.getItem(('AC_Agencia_' + numeroContaRecebidoHtml)),
            sessionStorage.getItem(('AC_TipoDeUsuario_' + numeroContaRecebidoHtml)),
            sessionStorage.getItem(('AC_Senha_' + numeroContaRecebidoHtml)),
            Number(sessionStorage.getItem(('AC_NumConta_' + numeroContaRecebidoHtml))),
            conta = new Conta(numeroContaRecebidoHtml, sessionStorage.getItem(('AC_Senha_' + numeroContaRecebidoHtml)), sessionStorage.getItem(('AC_Nome_' + numeroContaRecebidoHtml)), Number(sessionStorage.getItem(('AC_SaldoConta_' + numeroContaRecebidoHtml))))

        )
        acionista.salvarAcionistaLogado()
        window.location.replace("../src/usuarioLogado.html")
    } else if (nomeRecebidoHtml === sessionStorage.getItem(('AC_Nome_' + numeroContaRecebidoHtml)) &&
        numeroContaRecebidoHtml === sessionStorage.getItem(('AC_NumeroDaConta_' + numeroContaRecebidoHtml)) &&
        senhaRecebidaHtml != sessionStorage.getItem(('AC_Senha_' + numeroContaRecebidoHtml))) {
        alert("Senha incorreta.")
    } else if (
        numeroContaRecebidoHtml === sessionStorage.getItem(('AC_NumeroDaConta_' + numeroContaRecebidoHtml)) &&
        senhaRecebidaHtml === sessionStorage.getItem(('AC_Senha_' + numeroContaRecebidoHtml)) &&
        nomeRecebidoHtml != sessionStorage.getItem(('AC_Nome_' + numeroContaRecebidoHtml))) {
        alert("Nome incorreto.")
    } else if (nomeRecebidoHtml === sessionStorage.getItem(('AC_Nome_' + numeroContaRecebidoHtml)) &&
        senhaRecebidaHtml === sessionStorage.getItem(('AC_Senha_' + numeroContaRecebidoHtml)) &&
        numeroContaRecebidoHtml != sessionStorage.getItem(('AC_NumeroDaConta_' + numeroContaRecebidoHtml))) {
        alert("Número da conta incorreto.")
    } else {
        alert("Verifique suas informações e tente novamente.")
    }
}
//////////////
/// MAIN ////
////////////
if (sessionStorage.getItem("AC_Logado_Nome_")) {
    window.location.replace("../src/usuarioLogado.html")

} else if (sessionStorage.getItem("gerenteLogou")) {
    alert("Fazer logout de gerente para entrar como correntista.")
    window.location.replace("../src/gerenteLogado.html")

}