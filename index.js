const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/enviar', async (req, res) => {
  const dados = req.body;

  try {
    const resposta = await axios.post('https://pipa-n8n-webhook.kzj9s2.easypanel.host/webhook/teste-mcp', dados);
    res.json({ status: 'ok', dadosEnviados: dados });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao enviar pro N8N', detalhe: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('MCP online!');
});
app.listen(3000, () => {
  console.log('Painel rodando na porta 3000');
});
