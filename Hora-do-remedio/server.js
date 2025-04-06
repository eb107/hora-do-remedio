const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve arquivos estáticos da pasta public

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: '', // Substitua pela sua senha do MySQL
    database: 'horaDoRemedio' // Substitua pelo seu banco de dados
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota para cadastrar medicamentos
app.post('/api/cadastrar', (req, res) => {
    const { nome, validade, quantidade, horario1, horario2, descricao } = req.body;

    const sql = 'INSERT INTO cadastromedicamentos (nome, validade, quantidade, horario1, horario2, descricao) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nome, validade, quantidade, horario1, horario2, descricao], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar medicamento:', err);
            return res.status(500).json({ message: 'Erro ao cadastrar medicamento' });
        }
        res.status(200).json({ message: 'Medicamento cadastrado com sucesso!' });
    });
});


// Rota para obter medicamentos e horarios cadastrados (GET)
app.get('/api/medicamentos', (req, res) => {
    const sql = 'SELECT nome, horario1, horario2 FROM cadastromedicamentos';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao buscar medicamentos:', err);
            return res.status(500).json({ message: 'Erro ao buscar medicamentos' });
        }
        res.status(200).json(result); // Retorna os resultados
    });
});


// Rota para obter descrição cadastrados (GET)
app.get('/api/descricao', (req, res) => {
    const sql = 'SELECT nome, descricao FROM cadastromedicamentos';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao buscar medicamentos:', err);
            return res.status(500).json({ message: 'Erro ao buscar medicamentos' });
        }
        res.status(200).json(result); // Retorna os resultados
    });
});

// Rota deletar medicamentos cadastrados
app.get('/api/deletar/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM cadastromedicamentos WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if(err) {
            return res.status(500).json({ message: 'Erro ao excluir o medicamento'});
        }
        return res.status(200).json({ message: 'Medicamento excluído com sucesso' });
    });
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});