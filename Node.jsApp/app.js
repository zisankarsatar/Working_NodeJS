var express=require("express");
var path=require("path");
var app =express();
var ejsLayouts=require("express-ejs-layouts");
var bodyParser=require("body-parser");
var db=require("./app_server/models/db");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/app_server/views"));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(ejsLayouts);
app.use("/public",express.static(path.join(__dirname,"public")));

//yönlendiriciler eklendi
require("./app_server/routers/routeManager")(app);

app.listen(8000); 



/*
var routeLogin=require("./app_server/routers/loginRouter");
var routeHome=require("./app_server/routers/homeRouter");

app.use('/login',routeLogin);
app.use("/", routeHome);
routeManager a taşındı
*/

 