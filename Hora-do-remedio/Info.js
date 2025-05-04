function fetchMedicamentos() {
    fetch('http://localhost:3000/api/descricao')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede');
            }
            return response.json();
        })
        .then(data => {
            const descricaoContainer = document.getElementById('descricaoContainer');

            // Limpa o contêiner antes de adicionar novos medicamentos
            descricaoContainer.innerHTML = '';

            document.getElementById('back').addEventListener('click', function() {
                window.location.href = 'Home.html'
            })

            if (data.length === 0) {
                const mensagem = document.createElement('p');
                mensagem.textContent = 'Nenhum remédio cadastrado';
                descricaoContainer.appendChild(mensagem);
            } else {
                data.forEach(medicamento => {
                    // Cria um nova div para cada medicamento
                    const descricaoDiv = document.createElement('div');
                    descricaoDiv.className = 'descricao';

                    // Adiciona a descrição do medicamento
                    const descricaoMedicamento = document.createElement('span');
                    descricaoMedicamento.className = 'descricaoRemedio';
                    descricaoMedicamento.textContent = `${medicamento.nome} - ${medicamento.descricao}`;

                    // Adiciona a descricao a nova div
                    descricaoDiv.appendChild(descricaoMedicamento);

                    // Adiciona a nova div
                    descricaoContainer.appendChild(descricaoDiv);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao buscar medicamentos:', error);
            const mensagemErro = document.createElement('p');
            mensagemErro.textContent = 'Erro ao carregar medicamentos'; // Mensagem de erro
            descricaoContainer.appendChild(mensagemErro);
        });
}

// Chama a função para buscar medicamentos ao carregar a página
window.onload = fetchMedicamentos;