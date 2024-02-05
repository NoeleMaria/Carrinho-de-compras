let total;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subtotal = valorUnitario * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">(${quantidade})</span> ${nomeProduto} <span class="texto-azul">- R$ ${subtotal},00</span>
  </section>`;

    total = total + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${total},00`;

    document.getElementById('quantidade').value = '';
}

function limpar (){
  total = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$ 0,00';
}