const express = require('express')
const app = express()

const port = 3081

app.listen(port, (err) => {
  console.log(`sever runnig in http://localhost:${port}`)
})


app.get('/', (req, res) => {
  res.send(`<h2>pagina inicial</h2>`)
})

app.get('/hello/:nome/:sobrenome?', (req, res) => {
  let nome = req.params.nome
  let sobrenome = req.params.sobrenome

  if(sobrenome){ 
    res.send(`Ola ${nome} ${sobrenome}`)
  } else{
    res.send(`Ola ${nome}`)
  }
})