// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    'gramas': 0,
    'mililitros': 0
  }
}
// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos) {
  let pedidos = (minhaListaDeProdutos)
  for (let i = 0; i < pedidos.length; i++) {
    pedido.nomes.push(pedidos[i].nome)
  }

  return pedido.nomes
}

// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos) {
  let pedidos = (minhaListaDeProdutos)
  for (let i = 0; i < pedidos.length; i++) {
    pedido.precoTotal += pedidos[i].preco
  }
  return pedido.precoTotal
}

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros(minhaListaDeProdutos) {
  for (let i = 0; i < minhaListaDeProdutos.length; i++) {
    let meusPesos = []
    meusPesos.push(minhaListaDeProdutos[i].peso)
    for (let j = 0; j < meusPesos.length; j++) {
      for (let u = 0; u < meusPesos[j].length; u++) {
        if (meusPesos[j][u] == "g") {
          pedido.pesos.gramas += parseInt(meusPesos[j])

        } else if (meusPesos[j][u] == "m") {
          pedido.pesos.mililitros += parseInt(meusPesos[j])

        }
      }
    }
  }

  return { gramas: pedido.pesos.gramas,
           mililitros: pedido.pesos.mililitros}
}

// Função será responsavel por atualizar a variavel minhaListaDeProdutos 
function encontrarItensPeloId(idList) {
  let listatotal = []
  for (let i = 0; i < idList.length; i++) {
    let meuCardapio = idList[i]
    for (let j = 0; j < cardapio.length; j++) {
      let minhalista = cardapio[j]
      if (minhalista.id == meuCardapio) {
        listatotal.push(minhalista)
      }
    }
  }
  return listatotal
}

// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {
  console.log(`O seu pedido é:${pedido.nomes} de ${pedido.pesos.mililitros}ml. O valor total foi de ${pedido.precoTotal}. O peso total do seu pedido foi de ${pedido.pesos.gramas} gramas`)
}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados) {
  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);
  // atualizar nomes
  definirNome(minhaListaDeProdutos);
  // atualiar pesos
 definirGramasEMililitros(minhaListaDeProdutos);
  // atualizar precoTotal
 definirPrecoTotal(minhaListaDeProdutos);
  // apresentação do pedido
  apresentacao()
}

principal([1, 3, 7])
