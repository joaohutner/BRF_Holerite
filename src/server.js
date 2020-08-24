//servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//importando de pages.js
const {
    pageLanding,
    pageGiveClasses,
    pageConsultar
} = require('./pages')

//configurar nunjucks, usaremos ele para enviar os arquivos.
//.configure(ONDE ESTAO OS HTMLS, OBJETOS{QUAL SERVIDOR, DEVE TER CACHE?})
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
/*Arquivos estáticos são as imagens, os script do front, o CSS do front, tudo da pasta public basicamente*/
.use(express.static("public")) /*Tudo aqui dentro é uma configuração do servidor */
// rotas da aplicação
.get("/", pageLanding)
.get("/gerar", pageGiveClasses)
.post("/consultar", pageConsultar)
/*Esse parametro vai iniciar nosso server na porta que está dentro de listen */
.listen(5500)