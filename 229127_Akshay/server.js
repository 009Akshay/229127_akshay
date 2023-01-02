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


// sudo yum install git


// git clone https://github.com/RaviTambade/tflstore.git


// ls


// cd tflstore/


// $ sudo yum install docker


// $ sudo systemctl start docker


// $ sudo systemctl enable docker

//go to that folder 
//by using cd 

// $ sudo docker build -t tflstore .


// $ sudo docker run -d -p 8000:8000 tflstore






// html




// npm install

// npm -y init

// npm i express

// npm i node


// git  clone 
// gi add .
// git commit -m "hello"