function pageLanding(req, res){
    return res.render("index.html") 
}

function pageGiveClasses(req,res){
    return res.render("give_classes.html")
}

module.exports = {
    pageLanding,
    pageGiveClasses
}