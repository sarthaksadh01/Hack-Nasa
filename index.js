const blockChain = require("./blockchain").BlockChain;
var blockChainObject = new blockChain();
var sideChain = new blockChain();
console.log(blockChainObject.getChain());
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




app.get("/search/:query", (req, res) => {
    var query = req.params.query;
    console.log(query);
    createBlock(blockChainObject, )

});





app.post("/add", (req, res) => {
    var title = req.body.title;
    var desc = req.body.desc;
    var data = req.body.data;
    var isPaid = req.body.isPaid;
    var coins = req.body.coins
    createBlock(blockChainObject, data, 1, title, desc, isPaid, coins).then((data)=>{
        res.json({ status: true });
    })
    

});



app.listen(3000, () => {
    console.log("app running")
})
