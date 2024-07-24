const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bot = require('./bot');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/download', async (req, res) => {
  const { categoryUrl, categoryName } = req.body;
  await bot(categoryUrl, categoryName);
  res.send('Download iniciado! Verifique a pasta de downloads.');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
