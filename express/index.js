const express = require('express')
const app = express()
const port = 3081

app.get('/', (req, res) => {
  res.send('bom dia meu querido!<br><a href="http://localhost:3081/blog"><button>ir para o blog</button></a><br><a href="http://localhost:3081/sociais"><button>ir para as redes sociais</button></a>')
})

app.get('/blog', (req, res) =>{
  res.send('bem vindo a o meu blog<br><a href="http://localhost:3081"><button>voltar para a home page</button></a>')
})

app.get('/sociais', (req, res) =>{
  res.send('Bem vindo as minhas redes sociais<br><a href="https://www.facebook.com/gustavohenrique.kopp/" target="_blank"><button>meu facebook</button></a><br><a href="https://github.com/GustavoHKopp" target="_blank"><button>meu github</button></a><br><a href="http://localhost:3081"><button>voltar para a home page</button></a>')
})

app.listen(port,function(err){
  if(err){
    console.log(`ocorreu um erro:${err}`)
  } else{
    console.log(`server runing in http://localhost:${port}`)
  }
})