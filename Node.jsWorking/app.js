var express=require("express");
var path=require("path");
var app =express();
var ejsLayouts=require("express-ejs-layouts");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/app_server/views"));

var routeElektronik=require("../Node.js&MongoDB/app_server/routes/elektronikRouter");

app.use(ejsLayouts);

app.use("/public",express.static(path.join(__dirname,"/public")));
app.use(function(req,res,next){
    console.log("url "+req.originalUrl);
    console.log("time "+Date.now());
    next();
});

app.use("/elektronik",routeElektronik);

/*
var ctrlElektronik=require("./elektronikController");
app.get("/elektronik",ctrlElektronik.index);
app.get("/elektronik/bilgisayar",ctrlElektronik.bilgisayar);
*/
/*
var ctrlElektronik=ctrlElektronik("merhaba");
var indexController=function(req,res){
    res.sendFile(path.join(__dirname,"index.html"))
};
var loginController=function(req,res){
    res.sendFile(path.join(__dirname,"login.html"));
};

app.get("/",indexController);
app.get("/login",loginController);
*/
/*
app.use('/public', express.static(path.join(__dirname,"public")));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname,"login.html"));
});
*/
/*
var fs=require("fs");
app.get('/',function(req,res){
    fs.readFile("index.html",function(err,data){
        res.write(data);
        res.end("mesaj bitti");
    });
});

app.get('/login', function(req,res){
    fs.readFile("login.html",function(err,data){
        res.write(data);
        res.write("deneme");
        res.write("deneme2");
        res.end("mesaj bitti");
    });
});
*/
app.listen(8000);
/*
//var http=require("http");
//var yonlendirici = new Object();
var homeController=function(req,res){
    fs.readFile("index.html",function(err,data){
        res.write(data);
        res.end("mesaj bitti");
    });
}
var loginController=function(req,res){
    fs.readFile("login.html",function(err,data){
        res.write(data);
        res.write("deneme");
        res.write("deneme2");
        res.end("mesaj bitti");
    });
}

yonlendirici['/']=homeController;
yonlendirici['/login']=loginController;

var server=http.createServer(function(req,res){
    
    console.log(req.url);
    
    if(req.url=="/")
    {
        homeController(req,res);
    }
    if(req.url=="/login"){
       loginController(req,res); 
    }

    if(req.url in yonlendirici){
        yonlendirici[req.url](req,res);
    }
        
});*/
//server.listen(8000);
