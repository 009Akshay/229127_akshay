var express=require("express");
var app=express();

var path=require("path");
app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'public/app.html'))
   
});
app.get('/home',function(req,resp){
    resp.sendFile(path.join(__dirname,'public/app2.html'))
});
app.get('/about',function(req,resp){
resp.send("<h1>hello</h1>");
    
});

console.log("you are on port 3000")
app.listen(3000)

