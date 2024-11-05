document.getElementById('formClientes').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeCliente').value;
    const email = document.getElementById('emailCliente').value;
    const resultado = document.getElementById('clientesCadastrados');

    // Validação de campos não preenchidos
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos do formulário de clientes.');
        return;
    }

    resultado.innerHTML += `<p>Cliente: ${nome}, Email: ${email}</p>`;
    document.getElementById('formClientes').reset();
});

document.getElementById('formProdutos').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeProduto').value;
    const preco = document.getElementById('precoProduto').value;
    const resultado = document.getElementById('produtosCadastrados');

    // Validação de campos não preenchidos
    if (!nome || !preco) {
        alert('Por favor, preencha todos os campos do formulário de produtos.');
        return;
    }

    resultado.innerHTML += `<p>Produto: ${nome}, Preço: ${preco}</p>`;
    document.getElementById('formProdutos').reset();
});

document.getElementById('formVendas').addEventListener('submit', function(event) {
    event.preventDefault();
    const produto = document.getElementById('produtoVendido').value;
    const quantidade = document.getElementById('quantidadeVendida').value;
    const resultado = document.getElementById('vendasRegistradas');

    // Validação de campos não preenchidos
    if (!produto || !quantidade) {
        alert('Por favor, preencha todos os campos do formulário de vendas.');
        return;
    }

    resultado.innerHTML += `<p>Produto: ${produto}, Quantidade: ${quantidade}</p>`;
    document.getElementById('formVendas').reset();
});
