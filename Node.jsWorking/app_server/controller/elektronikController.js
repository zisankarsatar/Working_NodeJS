
module.exports.index=function(req,res){
    res.render("elektronik");
}
module.exports.bilgisayar=function(req,res){
    var kisiler=["ahmet","mehmet","abdullah","fatih"];

    res.render("bilgisayar",{mesaj:"merhaba ben json",adlar:kisiler});//bilgisayar.ejs

    //res.sendFile(path.join(__dirname, "../../login.html"));
};


/*
var path=require("path");
module.exports.index=function(req,res){
    console.log(req.deneme);
    res.sendFile(path.join(__dirname,"../../index.html"))
};
module.exports.bilgisayar=function(req,res){
    res.sendFile(path.join(__dirname, "../../login.html"));
};

*/

/*module.exports=function(yazi){
    console.log("Elektornik kontrol cagrildi"+yazi);
}*/ 