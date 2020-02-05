var routeLogin=require("./loginRouter");
var routeUser=require("./userRouter");



module.exports=function(app){
    app.use("/login",routeLogin);
    app.use("/",routeUser);
}