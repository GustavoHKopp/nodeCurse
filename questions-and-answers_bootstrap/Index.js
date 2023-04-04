const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

//database
connection
    .authenticate()
    .then(() => console.log('conexao com o mysql ocorreu conforme o esperado'))
    .catch((err) => console.log(`algo de errado nao esta certo. <br> erro: ${err}`))

//Informando para o Express usar o EJS como View Engine
app.set('view engine', 'ejs')
app.use(express.static('public'))
//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Rotas
app.get('/', (req, res) => {
  Pergunta.findAll({raw: true, 
    order: [
      ['id','desc'] //ordena a busca para trazer os ID de forma "Desc"
    ]
  }).then(perguntas => {
    res.render('index',{
      perguntas: perguntas
    })
  })
  
})

app.get('/perguntar',(req,res) =>{
  res.render("perguntar")
})


app.get('/pergunta/:id',(req, res) =>{
  let id = req.params.id
  Pergunta.findOne({
    where: {id: id}
  }).then(pergunta =>{
    if(pergunta != undefined){
        Resposta.findAll(
          {where: {perguntaID: pergunta.id},
          order: [['id', 'desc']]
        }).then(respostas => {
          res.render('pergunta', {
            pergunta: pergunta,
            respostas: respostas
          })
        })
    }else{
      res.redirect('/')
    }
  })

})

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo
  let descricao = req.body.descricao
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/')
  }).catch((err) => console.log(err))
})

app.post('/salvarResposta', (req, res) => {
  let corpo = req.body.corpo
  let perguntaId = req.body.perguntaId
  Resposta.create({
    corpo: corpo,
    perguntaID: perguntaId
  }).then(() => {
    res.redirect('/pergunta/'+perguntaId)
    alert('muito obrigado pela sua resposta')
  }).catch((err) => console.log(err))
})

//listen
app.listen(port,function(err){
  if(err){
    console.log(`ocorreu um erro:${err}`)
  } else{
    console.log(`server runing in http://localhost:${port}`)
  }
})