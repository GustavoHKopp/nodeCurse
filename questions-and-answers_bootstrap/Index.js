const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

//Informando para o Express usar o EJS como View Engine
app.set('view engine', 'ejs')
app.use(express.static('public'))
//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Rotas
app.get('/', (req, res) => {
  res.render("index")
})

app.get('/perguntar',(req,res) =>{
  res.render("perguntar")
})

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo
  let descricao = req.body.descricao
  res.send(`Formulario recebido! titulo: ${titulo}, descricao: ${descricao}`)
})

app.listen(port,function(err){
  if(err){
    console.log(`ocorreu um erro:${err}`)
  } else{
    console.log(`server runing in http://localhost:${port}`)
  }
})