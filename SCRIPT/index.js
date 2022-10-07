class Produto{

    constructor(){
        this.id = 1;
        this.lista = [];
    }

    adicionar(){
        let listaCompras = this.lerDados();

        if(this.validaCampos(listaCompras)){
            this.salvar(listaCompras);
        };

        this.criarTabela();

        this.cancelar();

    }

    criarTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.lista.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_qtd = tr.insertCell();
            let td_total = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.lista[i].idProd;
            td_produto.innerText = this.lista[i].nome;
            td_preco.innerText = this.lista[i].preco;
            td_qtd.innerText = this.lista[i].qtd;
            td_total.innerText = parseFloat(this.lista[i].preco) * Number(this.lista[i].qtd) .toFixed(2);

            td_id.classList.add('centro');
            td_qtd.classList.add('centro');
            td_acao.classList.add('centro');

            let imgEdt = document.createElement('img');
            imgEdt.src ='./IMG/editar.png'

            let imgExc = document.createElement('img');
            imgExc.src = './IMG/excluir.png'

            td_acao.appendChild(imgEdt);
            td_acao.appendChild(imgExc);
        };


    }


    lerDados(){
        let listaCompras = [];

        listaCompras.idProd = this.id;
        listaCompras.nome = document.getElementById("idProdutos").value;
        listaCompras.preco = document.getElementById("idPreco").value;
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
            msg += ' Informe o valor do produto'
        }
        if(listaCompras.qtd == ''){
            msg += ' Informe a Quantidade do Produto'
        }
        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }


    cancelar(listaCompras){
        document.getElementById('idProdutos').value = '';
        document.getElementById('idPreco').value = '';
        document.getElementById('idQtd').value = '';
    }
}

var produto = new Produto();