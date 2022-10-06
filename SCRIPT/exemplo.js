class Lista{
    constructor(prod, valor){
        this.prod = prod;
        this.valor = valor;
    }
}

let dados = new Lista();

let resumo = document.querySelector("#resumo");

let resumo2 = document.querySelector("#resumo2");


function menu(){
    let opcoes
    while (opcoes != 1 && opcoes !=2 && opcoes !=3) {
        opcoes = parseInt(prompt(`DIGITE \n (1) Incluir Produtos \n (2) Ver Lista \n (3) Salvar e Finalizar`))
    }
    return opcoes;
}

function cadastroProdutos(){
    let recNome = prompt('Nome do Produto: ');
    let recValor = parseFloat(prompt('Valor do Produto: '));
    let armazenar = new Lista(recNome, recValor);
    return armazenar;
}

function verLista(nomes){
    let dados = ''
    nomes.forEach((nome, index) => {
        dados += (index + 1) + ' - ' + nome.prod + ' ' + 'R$ ' + nome.valor + ' \n'
    });
    alert(dados);
}

function imprimirLista(nomes){
    let dados = ''
    nomes.forEach((nome, index) => {
        dados += (index + 1) + ' - ' + nome.prod + ' ' + 'R$ ' + nome.valor + '<br>'
    });
    resumo.innerHTML += dados;
}


let lista = [];
let escolha

    do{
    escolha = menu()
    switch (escolha) {
        case 1:
            let addProdutos = cadastroProdutos();
            lista.push(addProdutos);
            break;
        case 2:
            verLista(lista);
            break
        case 3:
            imprimirLista(lista);
            break
        default:
            alert('Digite as opções do Menu 1 \ 2 \ 3')
            break;
    }
} while (escolha !=3);



const maiorValor = lista.reduce(function(acumulador, valor){
    if(acumulador.valor > valor.valor) return acumulador;
    return valor;
});


const valorTotal = lista.reduce(function(acumulador, preco){
    return Number(acumulador.valor += preco.valor);
});

resumo2.innerHTML = '<strong>Maior valor Informado </strong> <br>' + maiorValor.prod + ' R$ ' + maiorValor.valor + '<br>' +'<strong>Valor Total </strong> - R$ ' + valorTotal;

