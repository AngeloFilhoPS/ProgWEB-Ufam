//npm init
// cat package.jason
//
const  express = require('express');

const app= express();

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});


app.listen(8000,function(){
    console.log("ouvindo porta 800");
});