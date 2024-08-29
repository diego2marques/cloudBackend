const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  //res.send('vamos cadastrar!');
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

app.get('/cadastro', (req, res) => {
    //res.send('vamos cadastrar!');
    res.sendFile(path.join(__dirname, 'front', 'cadastro.html'));
});

app.post('/cadastro', async (req, res) => {
    const dados = req.body;
  
    try {
      // Enviando requisição POST para outro servidor
      const resposta = await axios.post('http://3.88.178.21:3000/clientes', dados);
  
      res.status(200).json(resposta.data);
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao enviar dados', erro: error.message });
    }
  });


app.get('/listagem', (req, res) => {
    res.send('vamos listar!');
});

app.get('/edita', (req, res) => {
    res.send('vamos editar!');
});

app.get('/exclui', (req, res) => {
    res.send('vamos excluir!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});