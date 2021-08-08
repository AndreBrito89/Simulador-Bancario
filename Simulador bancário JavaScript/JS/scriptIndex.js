let acionistaLogado = null;

/////////////
////MAIN////
///////////
//-TESTES
//confere se é a primeira vez carregando a página/projeto
if (sessionStorage.getItem("AC_Nome_4201")) {
    //-confere se correntista está logado
    if (sessionStorage.getItem("AC_Logado_Nome_")) {
        acionistaLogado = new Acionista(sessionStorage.getItem('AC_Logado_Nome_'),
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
        document.getElementById("areaLogado").innerHTML += ("Bem vindo, " + acionistaLogado.getNome() + ".")
        acionistaLogado.criarBotaoLogout()
        var botaoSair = document.getElementById("botaoLogout")
        botaoSair.setAttribute('onclick', "acionistaLogado.fazerLogout()")
    }
    //-confere se o gerente está logado
    if (sessionStorage.getItem("gerenteLogou")) {
        var gerente = new Gerente(

            sessionStorage.getItem("GE_Nome_"),
            sessionStorage.getItem("GE_Agencia_"),
            'gerente',
            sessionStorage.getItem("GE_Senha_"),
            sessionStorage.getItem("GE_Login_")
        )

        document.getElementById("areaLogado").innerHTML += ("Bem vindo, " + gerente.nome + ".")
        gerente.criarBotaoLogout()
        var botaoSair = document.getElementById("botaoLogout")
        botaoSair.setAttribute('onclick', "gerente.fazerLogout()")
    }

}
//-instancia objetos/guarda no sessionStorage 
else {
    let joca = new Gerente("joca", '2042', 'gerente', '1234', 'admin')
    joca.salvarGerente()

    let trump = new Acionista("trump", '2042', 'acionista', '1234', '4201', new Conta('4201', '1234', "trump", 9878991))
    let george = new Acionista("george", '2042', 'acionista', '1234', '4202', new Conta('4202', '1234', "george", 9878232))
    let jeff = new Acionista("jeff", '2042', 'acionista', '1234', '4203', new Conta('4203', '1234', "jeff", 98784433))
    let whiterose = new Acionista("whiterose", '2042', 'acionista', '1234', '4204', new Conta('4204', '1234', "whiterose", 987727433))
    let tyrrel = new Acionista("tyrrel", '2042', 'acionista', '1234', '4205', new Conta('4205', '1234', "tyrrel", 123784433))

    trump.salvarAcionista()
    george.salvarAcionista()
    jeff.salvarAcionista()
    whiterose.salvarAcionista()
    tyrrel.salvarAcionista()

}