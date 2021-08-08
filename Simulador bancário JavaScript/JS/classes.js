//////////////////////////////
///////////CLASSES///////////
////////////////////////////
//-agencia
class Agencia {
    constructor(numAgencia, gerente = new gerente(), listaAcionistas = []) {
        this.numAgencia = numAgencia;
        this.gerente = gerente
        this.listaAcionistas = listaAcionistas;
    }
}

//-pessoa
class Pessoa {
    //////////////////
    ///construtor////
    ////////////////
    constructor(nome, agencia, tipoDeUsuario, senha) {
            this.nome = nome,
                this.agencia = agencia,
                this.tipoDeUsuario = tipoDeUsuario,
                this.senha = senha;
        }
        ////////////
        //get&set//
        //////////
        //-nome
    setNome = (nome) => { this.nome = nome }
    getNome() { return this.nome }
        //-senha
    setSenha = (senha) => { this.senha = senha }
    getSenha() { return this.senha }
        //-tipousuario
    setTipoDeUsuario = (tipoDeUsuario) => { this.tipoDeUsuario = tipoDeUsuario }
    getTipoDeUsuario() { return this.tipoDeUsuario }
        //-agencia
    setAgencia = (agencia) => { this.agencia = agencia }
    getAgencia() { return this.agencia }
        //////////////
        ///metodos///
        ////////////
        //-cria botao logout
    criarBotaoLogout() {
        var botaoLogout = document.createElement("button")
        botaoLogout.setAttribute('id', "botaoLogout")
        botaoLogout.setAttribute('class', "botaoLogout")
        document.getElementById("areaLogado").appendChild(botaoLogout)
        document.getElementById("botaoLogout").innerHTML = "Sair"

    }
}

//-acionista
class Acionista extends Pessoa {
    //////////////////
    ///construtor////
    ////////////////
    constructor(nome, agencia, tipoDeUsuario, senha, numeroDaConta, conta = new Conta(numeroDaConta, senha, nomeAcionista, saldoDaConta)) {
            super(nome, agencia, tipoDeUsuario, senha)
            this.conta = conta;
        }
        ///////////////////////
        ///metodos proprios///
        /////////////////////
        //-guardar acionista
    salvarAcionista() {
        sessionStorage.setItem(('AC_Nome_' + this.conta.numeroDaConta), this.nome)
        sessionStorage.setItem(('AC_Agencia_' + this.conta.numeroDaConta), this.agencia)
        sessionStorage.setItem(('AC_TipoDeUsuario_' + this.conta.numeroDaConta), this.tipoDeUsuario)
        sessionStorage.setItem(('AC_Senha_' + this.conta.numeroDaConta), this.senha)
        sessionStorage.setItem(('AC_NumeroDaConta_' + this.conta.numeroDaConta), this.conta.numeroDaConta)
        sessionStorage.setItem(('AC_SaldoConta_' + this.conta.numeroDaConta), this.conta.saldoDaConta)
    }
    salvarAcionistaLogado() {
        sessionStorage.setItem('AC_Logado_Nome_', this.nome)
        sessionStorage.setItem('AC_Logado_Agencia_', this.agencia)
        sessionStorage.setItem('AC_Logado_NumeroDaConta_', this.conta.numeroDaConta)
        sessionStorage.setItem('AC_Logado_TipoDeUsuario_', this.tipoDeUsuario)
        sessionStorage.setItem('AC_Logado_Senha_', this.senha)
        sessionStorage.setItem('AC_Logado_SaldoConta_', this.conta.saldoDaConta)
    }
    fazerLogout() {
        sessionStorage.removeItem("AC_Logado_Nome_")
        sessionStorage.removeItem('AC_Logado_TipoDeUsuario_')
        sessionStorage.removeItem('AC_Logado_Senha_')
        sessionStorage.removeItem('AC_Logado_NumeroDaConta_')
        sessionStorage.removeItem('AC_Logado_Agencia_')
        sessionStorage.removeItem('AC_Logado_SaldoConta_')
        window.location.replace("../src/index.html")
    }
}
//-gerente
class Gerente extends Pessoa {
    //////////////////
    ///construtor////
    ////////////////
    constructor(nome, agencia, tipoDeUsuario, senha, login) {
            super(nome, agencia, tipoDeUsuario, senha)
            this.login = login
        }
        ////////////
        //get&set//
        //////////
        //-numero da conta
    setLogin = (login) => { this.login = login }
    getLogin() { return this.login }
        ///////////////////////
        ///metodos proprios///
        /////////////////////
        //-guardar gerente
    salvarGerente() {
        sessionStorage.setItem('GE_Nome_', this.nome)
        sessionStorage.setItem('GE_Agencia_', this.agencia)
        sessionStorage.setItem('GE_TipoUsuario_', this.tipoDeUsuario)
        sessionStorage.setItem('GE_Senha_', this.senha)
        sessionStorage.setItem('GE_Login_', this.login)
    }
    fazerLogout() {
        sessionStorage.removeItem("gerenteLogou")
        window.location.replace("../src/index.html")
    }

}
//-conta
class Conta {
    //////////////////
    ///construtor////
    ////////////////
    constructor(numeroDaConta, senha, nomeAcionista, saldoDaConta) {
            this.numeroDaConta = numeroDaConta;
            this.senha = senha;
            this.nomeAcionista = nomeAcionista;
            this.saldoDaConta = saldoDaConta
        }
        ////////////
        //get&set//
        //////////
        //-numero da conta
    setNumeroDaConta = (numeroDaConta) => { this.numeroDaConta = numeroDaConta }
    getNumeroDaConta() { return this.numeroDaConta }
        //-saldo da conta
    setSaldoDaConta = (saldoDaConta) => { this.saldoDaConta = saldoDaConta }
    getSaldoDaConta() { return this.saldoDaConta }
        //////////////
        ///metodos///
        ////////////
        //-saque
    saque(valorSacado) {
            valorSacado <= this.getSaldoDaConta() ? this.setSaldoDaConta((this.getSaldoDaConta() - valorSacado)) : alert("saldo insuficiente!")
        }
        //-depósito
    deposito(valorDepositado) { this.setSaldoDaConta((this.getSaldoDaConta() + valorDepositado)) }
}