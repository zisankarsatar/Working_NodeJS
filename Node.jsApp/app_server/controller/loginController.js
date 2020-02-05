var Kullanici=require("../models/users");

module.exports.indexGet=function(req,res){
    res.render("login");
    console.log("login");
}

module.exports.indexPost=function(req,res){
    console.log(req.body);
    res.render("login",{
        username:req.body.username,
        password:req.body.password
    });
}

module.exports.signupGet=function(req,res){
    res.render("signup");
    console.log("signup");
   
}

module.exports.signupPost=function(req,res){
    var yeniKullanici= new Kullanici({
        ad:req.body.ad,
        soyad:req.body.soyad,
        kullaniciAdi:req.body.kullaniciAdi,
        sifre:req.body.sifre
    });
    
    yeniKullanici.save(function(err){
        if(err){
            console.log("hata:"+ err);
        }else{
            console.log("kullanici kaydedildi");
            res.redirect("/");
        }
    });
    
    
};


