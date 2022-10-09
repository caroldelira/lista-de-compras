class Produto {
  constructor() {
    this.id = 1
    this.lista = []
  }

  adicionar() {
    let listaCompras = this.lerDados()

    if (this.validaCampos(listaCompras)) {
      this.salvar(listaCompras)
    }

    this.criarTabela()
    this.somarValorTotal()
    this.cancelar()
    
  }

  criarTabela() {
    let tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.lista.length; i++) {
      let tr = tbody.insertRow()

      let td_check = tr.insertCell()
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
      td_total.innerText = (parseFloat(this.lista[i].preco) * Number(this.lista[i].qtd)).toFixed(2)
        
      td_id.style.color = 'rgb(160, 176, 247)'  
      td_qtd.classList.add('centro')
      td_acao.classList.add('centro')
      td_total.style.fontWeight = 'bold'
      td_check.classList.add('verificar')

      let imgEdt = document.createElement('img')
      imgEdt.src = './IMG/editar.png'

      let imgExc = document.createElement('img')
      imgExc.src = './IMG/excluir.png'

      let imgCheck = document.createElement('img')
      imgCheck.src = './IMG/cxvazia.png'

      td_acao.appendChild(imgEdt)
      td_acao.appendChild(imgExc)
      td_check.appendChild(imgCheck)
      

      imgExc.setAttribute('onclick', 'produto.deletar('+ this.lista[i].idProd +')')
      imgCheck.setAttribute('onclick', 'produto.alterarImg('+ this.lista[i].id +')')
      
    }

  }

  alterarImg(id){
    let verificar =  document.querySelector('.verificar')

    for(let i = 0; this.lista.length; i++){
    if(this.lista.id == id){
       this.lista.verificar.src = './IMG/cxmarcada.png'
    }
    console.log(verificar)
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

    for(let i = 0; this.lista.length; i++){
        if(this.lista[i].idProd == id){
            this.lista.splice(i, 1);
            tbody.deleteRow(i);
            this.somarValorTotal();
        }
    }
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
  }
}

var produto = new Produto()
