///////////////////////////////
//// variaveis auxiliares ////
/////////////////////////////


var nomeRecebidoHtml, numeroAgenciaRecebidoHtml, senhaRecebidaHtml, loginRecebido, gerente;

///////////////
///metodos////
/////////////
function recebeNome() {

    nomeRecebidoHtml = document.getElementById("loginNome").value
    numeroAgenciaRecebidoHtml = document.getElementById("loginAgencia").value
    senhaRecebidaHtml = document.getElementById("loginSenha").value
    loginRecebido = document.getElementById("loginAdm").value

    document.getElementById("loginNome").value = ""
    document.getElementById("loginAgencia").value = ""
    document.getElementById("loginSenha").value = ""
    document.getElementById("loginAdm").value = ""

}



function checkaLoginGerente() {
    recebeNome()
    if (nomeRecebidoHtml === sessionStorage.getItem("GE_Nome_") &&
        numeroAgenciaRecebidoHtml === sessionStorage.getItem("GE_Agencia_") &&
        senhaRecebidaHtml === sessionStorage.getItem("GE_Senha_") &&
        loginRecebido === sessionStorage.getItem("GE_Login_")
    ) {
        sessionStorage.setItem("gerenteLogou", 's')
        window.location.replace("../src/gerenteLogado.html")
    } else
    if (nomeRecebidoHtml === sessionStorage.getItem("GE_Nome_") &&
        numeroAgenciaRecebidoHtml === sessionStorage.getItem("GE_Agencia_") &&
        senhaRecebidaHtml === sessionStorage.getItem("GE_Senha_")
    ) {
        alert("login incorreto!")
    } else if (nomeRecebidoHtml === sessionStorage.getItem("GE_Nome_") &&
        numeroAgenciaRecebidoHtml === sessionStorage.getItem("GE_Agencia_") &&
        loginRecebido === sessionStorage.getItem("GE_Login_")
    ) {
        alert("senha incorreta")
    } else if (numeroAgenciaRecebidoHtml === sessionStorage.getItem("GE_Agencia_") &&
        senhaRecebidaHtml === sessionStorage.getItem("GE_Senha_") &&
        loginRecebido === sessionStorage.getItem("GE_Login_")) {
        alert("nome incorreto")
    } else if (nomeRecebidoHtml === sessionStorage.getItem("GE_Nome_") &&
        senhaRecebidaHtml === sessionStorage.getItem("GE_Senha_") &&
        loginRecebido === sessionStorage.getItem("GE_Login_")
    ) {
        alert("agencia incorreta")
    } else {
        alert("Favor verificar credenciais.")
    }

}
//////////////
/// MAIN ////
////////////

if (sessionStorage.getItem("gerenteLogou")) {
    window.location.replace("../src/gerenteLogado.html")
} else if (sessionStorage.getItem("AC_Logado_Nome_")) {
    alert("Fazer logout de correntista para logar como gerente!")
    window.location.replace("../src/usuarioLogado.html")
}