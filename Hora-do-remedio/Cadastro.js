document.getElementById('medicamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const validade = document.getElementById('validade').value;
    const quantidade = document.getElementById('quantidade').value;
    const frequencia = document.getElementById('frequencia').value;
    const dosagem1 = document.getElementById('dosagem1').value;
    const frequencia1horario1 = document.getElementById('frequencia1horario1').value;
    const dosagem2 = document.getElementById('dosagem2').value;
    const frequencia2horario1 = document.getElementById('frequencia2horario1').value;
    const frequencia2horario2 = document.getElementById('frequencia2horario2').value;
    const dosagem3 = document.getElementById('dosagem3').value;
    const frequencia3horario1 = document.getElementById('frequencia3horario1').value;
    const frequencia3horario2 = document.getElementById('frequencia3horario2').value;
    const frequencia3horario3 = document.getElementById('frequencia3horario3').value;
    const descricao = document.getElementById('descricao').value;


    // Enviar os dados para o servidor
    fetch('http://localhost:3000/api/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, validade, quantidade, frequencia, dosagem1, frequencia1horario1, dosagem2, frequencia2horario1, frequencia2horario2, dosagem3, frequencia3horario1, frequencia3horario2, frequencia3horario3, descricao })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Exibe uma mensagem de sucesso
        document.getElementById('medicamentoForm').reset(); // Limpa o formulário
    })
    .catch(error => console.error('Erro:', error));
});

document.getElementById('frequencia').addEventListener('click', function() {
    var container1horario = document.getElementById('container1horario');
    if (this.value === 'Uma vez ao dia') {
        container1horario.style.display = 'block';
    } else {
        container1horario.style.display = 'none';
    }
});

document.getElementById('frequencia').addEventListener('click', function() {
    var container2horario = document.getElementById('container2horario');
    if (this.value === 'Duas vezes ao dia') {
        container2horario.style.display = 'block';
    } else {
        container2horario.style.display = 'none';
    }
});

document.getElementById('frequencia').addEventListener('click', function() {
    var container3horario = document.getElementById('container3horario');
    if (this.value === 'Três vezes ao dia') {
        container3horario.style.display = 'block';
    } else {
        container3horario.style.display = 'none';
    }
});

document.getElementById('frequencia').addEventListener('click', function() {
    var personalizado = document.getElementById('personalizado');
    if (this.value === 'Personalizado') {
        personalizado.style.display = 'block';
    } else {
        personalizado.style.display = 'none';
    }
});