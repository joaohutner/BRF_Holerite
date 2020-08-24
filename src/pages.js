function pageLanding(req, res){
    return res.render("index.html") 
}

function pageGiveClasses(req,res){
    return res.render("gerar.html")
}

function pageConsultar(req,res){
    return res.render("consultar.html")
}

module.exports = {
    pageLanding,
    pageGiveClasses,
    pageConsultar
}