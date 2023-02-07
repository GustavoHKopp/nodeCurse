const express = require('express')
const app = express()
const port = 3051

app.get('/', (req, res) =>{
  res.send('testa as query param ai filho')
})

app.get('/canal/youtube', (req, res) =>{
  let canal = req.query['canal']

  if(canal){
  res.send(`<h1>${canal}</h1>`)
  } else {
    res.send(`<h1>digita algo na barra ai maninho</h1>`)
  }
})

app.listen(port, () => {
  console.log(`server is runnig in http://localhost:${port}`)
})