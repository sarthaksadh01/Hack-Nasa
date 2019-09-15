const blockChain = require("./blockchain").BlockChain;
var blockChainObject = new blockChain();
var sideChain = new blockChain();
const bodyParser = require('body-parser');

var createBlock = require("./util").mine


const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));



app.get('/', (req, res) => {
    res.render('pages/index');
})


app.get("/article", (req, res) => {

    var chain = blockChainObject.getChain();
    console.log(chain);
    res.render('pages/article', { chain });

});


app.get("/sidChain",(req,res)=>{
    var chain = sideChain.getChain();
    res.render('pages/article', { chain });

});




app.get("/search/:query", (req, res) => {
    var query = req.params.query;
    var chain = blockChainObject.getChain();
    var array = [];
    for(var i=0;i<chain.length;i++){
        
        if(chain[i].title.toLowerCase().contains(query.toLowerCase())){
            array.push(chain[i]);
        }
    }
    res.render("pages/article",{chain:array})
    

});


app.post("/add", (req, res) => {
    var title = req.body.title;
    var desc = req.body.desc;
    var data = req.body.data;
    var isPaid = req.body.isPaid;
    var coins = req.body.coins
    var obj=blockChainObject;
    if(isPaid)obj=sideChain;
    createBlock(obj, data, 1, title, desc, isPaid, coins).then((data)=>{
        res.json({ status: true });
    })
    

});



app.listen(3000, () => {
    console.log("app running")
})
