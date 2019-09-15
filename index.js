const blockChain = require("./blockchain").BlockChain;
var blockChainObject = new  blockChain();
console.log(blockChainObject.getChain());

var createBlock = require("./util").mine


const express = require("express");
const app = express();



app.get("/",(req,res)=>{

   var chain = blockChainObject.getChain();
   res.json(chain);

});




app.get("/search/:query",(req,res)=>{
    var query = req.params.query;
    console.log(query);
    createBlock(blockChainObject,)

});





app.post("/add",(req,res)=>{
    var title = req.body.title;
    var desc = req.body.desc;
    var  data = req.body.data;
    createBlock(blockChainObject,data,3,title,desc);
    res.json({status:true});

});



app.listen(3000,()=>{
    console.log("app running")
})
