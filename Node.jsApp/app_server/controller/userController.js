var Kullanici=require("../models/users");

module.exports.users=function(req,res){
    Kullanici.find(function(err,results){
        res.render("userList",{userList:results});
    });       
}

module.exports.userDelete=function(req,res){
    console.log(req.params.kullaniciAdi);
    Kullanici.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){
        if(err){
            console.log("silmede hata var");
        }else{
            res.redirect("/");
        }
    }); 
}