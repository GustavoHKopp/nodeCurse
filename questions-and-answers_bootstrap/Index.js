const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/perguntar',(req,res) =>{
  res.render("perguntar")
})

app.listen(port,function(err){
  if(err){
    console.log(`ocorreu um erro:${err}`)
  } else{
    console.log(`server runing in http://localhost:${port}`)
  }
})