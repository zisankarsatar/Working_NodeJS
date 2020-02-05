var express=require("express");

var router=express.Router();

var ctrlUser=require("../controller/userController");

router.get("/", ctrlUser.users);
router.get("/delete/:kullaniciAdi",ctrlUser.userDelete);//paramaetre alıyor
//kullanici adı controllerda kullanılacak parametre adı
module.exports=router;
