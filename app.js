const express = require('express');

const app = express();

app.get('/', (req, res) =>{
  res.send('<h1>Olá, mundo hahahha gay</h1>')
})

app.get('/worker', (req, res) => {
  res.json({name:'Maria', salary: 3000, department: 'Marketing' })
})

app.listen(3000, () => {
  console.log('Servidor iniciado :)')
})