const express = require('express')
const app = express()
const port = 8080

//usar EJS como engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

//renderiza o que esta dentro da pasta views
app.get('/:nome/:lang', (req, res) => {
  var name = req.params.nome
  var lang = req.params.lang
  var showMsg = false
  var produtos = [
    {nome: 'Doritos', preco: 7.15},
    {nome: 'Coca-Cola', preco: 5.29},
    {nome: 'Leite Tirol', preco: 3.12},
    {nome: '1kg de Picanha', preco: 1280.50},
    {nome: 'Ovo', preco: 2.90}
]
  res.render("index", {
    name: name,
    lang: lang,
    empresa: 'Gustavo`s Programador',
    idade: 18,
    msg: showMsg,
    produtos: produtos
  })
})


app.listen(port, (err) => {
  try{
    console.log('o site esta rodando')
  } catch {
    console.log(err)
  }
})