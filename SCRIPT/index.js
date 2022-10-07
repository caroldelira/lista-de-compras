class Produto{

    constructor(){
        this.id = 1;
        this.lista = [];
    }

    adicionar(){
        let listaCompras = this.lerDados();

        if(this.validaCampos(listaCompras)){
            this.salvar(this.lista);
        };

        console.log(listaCompras);
        
    }

    lerDados(){
        let listaCompras = [];

        listaCompras.idProdutos = this.id;
        listaCompras.nome = document.getElementById("idProdutos").value;
        listaCompras.valor = document.getElementById("idValor").value;
        listaCompras.qtd = document.getElementById("idQtd").value;

        return listaCompras;
    }

    salvar(listaCompras){
        this.lista.push(listaCompras);
        this.id++;
    }

    validaCampos(listaCompras){
        let msg = '';

        if(listaCompras.nome == ''){
            msg += ' Informe o nome do Produto \n'
        }
        if(listaCompras.valor == ''){
            msg += ' Informe o valor do produto \n'
        }
        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar(){
        alert('Produto Excluido');
    }
}

var produto = new Produto();