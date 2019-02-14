var express=require('express');
var cors=require('cors');
var app=express();
app.use(cors());
app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    res.send('index.html');
});
app.listen(3000,function(){
    console.log("Server running in the port 3000");
});