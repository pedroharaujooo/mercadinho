// Array para armazenar os produtos cadastrados
let produtos = [];

// Cadastro de Produto
document.getElementById('formCadastroProduto').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores do formulário de cadastro de produto
    const nome = document.getElementById('nomeProduto').value;
    const preco = document.getElementById('precoProduto').value;
    const quantidade = document.getElementById('quantidadeProduto').value;
    const resultado = document.getElementById('produtosCadastrados');

    // Verificação se todos os campos estão preenchidos
    if (!nome || !preco || !quantidade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Criação do objeto produto
    const produto = { nome, preco, quantidade: parseInt(quantidade) };
    
    // Adiciona o produto no array de produtos
    produtos.push(produto);

    // Exibe o produto cadastrado na área de produtos
    resultado.innerHTML += `<p>Produto: ${nome}, Preço: R$ ${preco}, Quantidade: ${quantidade}</p>`;
    
    // Atualiza o select para a área de vendas
    const selectProduto = document.getElementById('produtoEscolhido');
    const option = document.createElement('option');
    option.value = nome;
    option.innerText = nome;
    selectProduto.appendChild(option);

    // Limpa o formulário de cadastro de produto
    document.getElementById('formCadastroProduto').reset();
});

// Área de Vendas (Para Clientes)
document.getElementById('formVenda').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores do formulário de vendas
    const produtoEscolhido = document.getElementById('produtoEscolhido').value;
    const quantidadeVenda = parseInt(document.getElementById('quantidadeVenda').value);
    const resultado = document.getElementById('vendasRegistradas');

    // Verifica se o produto e a quantidade foram selecionados
    if (!produtoEscolhido || !quantidadeVenda) {
        alert('Por favor, escolha um produto e uma quantidade.');
        return;
    }

    // Encontra o produto escolhido no array de produtos
    const produto = produtos.find(p => p.nome === produtoEscolhido);

    // Verifica se o produto existe
    if (!produto) {
        alert('Produto não encontrado.');
        return;
    }

    // Verifica se há estoque suficiente
    if (produto.quantidade < quantidadeVenda) {
        alert('Quantidade insuficiente em estoque.');
        return;
    }

    // Subtrai a quantidade vendida do estoque
    produto.quantidade -= quantidadeVenda;

    // Registra a venda
    resultado.innerHTML += `<p>Venda Registrada: ${quantidadeVenda} de ${produtoEscolhido}</p>`;
    
    // Atualiza a exibição do estoque de produtos
    document.getElementById('produtosCadastrados').innerHTML = '';
    produtos.forEach(p => {
        document.getElementById('produtosCadastrados').innerHTML += `<p>Produto: ${p.nome}, Preço: R$ ${p.preco}, Quantidade: ${p.quantidade}</p>`;
    });

    // Limpa o formulário de vendas
    document.getElementById('formVenda').reset();
});
