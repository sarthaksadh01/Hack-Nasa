var sha256 = require("sha256")
function mine(blockChainVariable, data, difficulty,title,desc,isPaid,coins) {
  return new Promise((resolve,reject)=>{

    var nonce = 1;
    var chain = blockChainVariable.getChain();
    var index = chain.length;
    var prevBlock = chain[index - 1];
    var hash = sha256(nonce + data + index + prevBlock.hash)
    console.log("mining block -- " + index);
    while (hash.substring(0, difficulty) != '0'.repeat(difficulty)) {
        nonce += 1;
        hash = sha256(nonce + data + index + prevBlock.hash);
    }

    

    blockChainVariable.createBlock(coins,isPaid,nonce, prevBlock.hash, data,title,desc, hash);

    resolve("done")



  })


}

module.exports={
    mine
}