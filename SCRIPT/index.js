class Produto {
  constructor() {
    this.id = 1
    this.lista = []
    this.editId = null
  }

  adicionar() {
    let listaCompras = this.lerDados()

    if (this.validaCampos(listaCompras)) {
      if(this.editId == null){
      this.salvar(listaCompras)
      } else {
        this.atualizar(this.editId, listaCompras)
      }
    }

    this.criarTabela()
    this.somarValorTotal()
    this.cancelar()
    this.arrayPreco(listaCompras)
    
  }

  criarTabela() {
    let tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.lista.length; i++) {
      let tr = tbody.insertRow()

      let td_id = tr.insertCell()
      let td_produto = tr.insertCell()
      let td_preco = tr.insertCell()
      let td_qtd = tr.insertCell()
      let td_total = tr.insertCell()
      let td_acao = tr.insertCell()
     
      td_id.innerText = this.lista[i].idProd
      td_produto.innerText = this.lista[i].nome
      td_preco.innerText = 'R$ ' + this.lista[i].preco
      td_qtd.innerText = this.lista[i].qtd
      td_total.innerText = 'R$ ' + (parseFloat(this.lista[i].preco) * Number(this.lista[i].qtd)).toFixed(2)
        
      td_id.style.color = 'rgb(160, 176, 247)'  
      td_qtd.classList.add('centro')
      td_acao.classList.add('centro')
      td_total.style.fontWeight = 'bold'

      let imgEdt = document.createElement('img')
      imgEdt.src = './IMG/editar.png'

      let imgExc = document.createElement('img')
      imgExc.src = './IMG/excluir.png'

      td_acao.appendChild(imgEdt)
      td_acao.appendChild(imgExc)
            

      imgExc.setAttribute('onclick', 'produto.deletar('+ this.lista[i].idProd +')')
      imgEdt.setAttribute('onclick', 'produto.editar('+ JSON.stringify(this.lista[i].idProd) +')')
      
    }

  }

  editar(dados){
    this.editId = dados;
  
    document.getElementById('idProdutos').value = this.lista[dados - 1].nome
    document.getElementById('idPreco').value = this.lista[dados - 1].preco
    document.getElementById('idQtd').value = this.lista[dados - 1].qtd

    document.getElementById('btnAdd').innerText = 'Atualizar'
    
  }

  atualizar(id, listaCompras){
    for(let i = 0; i < this.lista.length ; i++){
      if(this.lista[i].idProd == id){
        this.lista[i].nome = listaCompras.nome
        this.lista[i].preco = listaCompras.preco
        this.lista[i].qtd = listaCompras.qtd

      }
    }
  }

  somarValorTotal(){
    let total = document.getElementById('total')
    total.innerText = ''
    
    let armazenaValor = []

    for(let i = 0; i < this.lista.length; i++){
    var soma = parseFloat(this.lista[i].preco) * Number(this.lista[i].qtd)
      
      armazenaValor.push(soma)
      
      var somarValores = armazenaValor.reduce(function(soma, total){
        return soma + total
      },0);
      
      total.innerText = 'R$ ' + somarValores.toFixed(2)
    }
      
  }

  deletar(id) {
    let tbody = document.getElementById('tbody')

    if(confirm('Deseja realmente deletar um produto?')){
    for(let i = 0; this.lista.length; i++){
        if(this.lista[i].idProd == id){
            this.lista.splice(i, 1);
            tbody.deleteRow(i);
            this.somarValorTotal();
        }
    }}
  }

  lerDados() {
    let listaCompras = []

    listaCompras.idProd = this.id
    listaCompras.nome = document.getElementById('idProdutos').value
    listaCompras.preco = document.getElementById('idPreco').value
    listaCompras.qtd = document.getElementById('idQtd').value

    return listaCompras
  }

  salvar(listaCompras) {
    this.lista.push(listaCompras)
    this.id++
  }

  validaCampos(listaCompras) {
    let msg = ''

    if (listaCompras.nome == '') {
      msg += ' Informe o nome do Produto \n'
    }
    if (listaCompras.valor == '') {
      msg += ' Informe o valor do produto'
    }
    if (listaCompras.qtd == '') {
      msg += ' Informe a Quantidade do Produto'
    }
    if (msg != '') {
      alert(msg)
      return false
    }

    return true
  }

  cancelar(listaCompras) {
    document.getElementById('idProdutos').value = ''
    document.getElementById('idPreco').value = ''
    document.getElementById('idQtd').value = ''

    document.getElementById('btnAdd').innerText = 'Adicionar ✔'
    this.editId = null
  }

  arrayPreco(listaCompras){
    let maiorValor = document.getElementById('maiorValor')
    let menorValor = document.getElementById('menorValor')
    let qtdProd = document.getElementById('qtdProd')
 
    let armazenaValor = []
    let armazenaValorTotal = []
   
    for(let i = 0; i < this.lista.length; i++){
    var listaPreco = parseFloat(this.lista[i].preco)
      armazenaValor.push(listaPreco)
    }

    for(let i = 0; i < this.lista.length; i++){
      var soma = parseFloat(this.lista[i].preco) * Number(this.lista[i].qtd)
        
        armazenaValorTotal.push(soma)
      }

    var max = Math.max(...armazenaValor)
    var min = Math.min(...armazenaValor)
    var maxT = Math.max(...armazenaValorTotal)
    maiorValor.innerText = 'Preço Unitário mais Alto ➜ R$ ' + max.toFixed(2)
    menorValor.innerText = 'Preço Unitário mais Baixo ➜ R$ ' + min.toFixed(2)
    qtdProd.innerText = 'Valor da compra mais Alta ➜ R$ ' + maxT.toFixed(2)
   
  }

}

var produto = new Produto()

/* var campo = document.getElementById('campo')
let min = Math.min(armazenaValor)
      
campo.innerText = min */