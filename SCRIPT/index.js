class Produto{

    constructor(){
        this.nome = '';
        this.valor = 0;
        this.quantidade = 0;
    }

    adicionar(){
        alert('Produto Adicionado');
    }

    excluir(){
        alert('Produto Excluido')
    }
}

var produto = new Produto();