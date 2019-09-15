var sha256 = require("sha256")
function mine(blockChainVariable, data, difficulty,title,desc) {
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

    blockChainVariable.createBlock(nonce, prevBlock.hash, data, hash);



}

module.exports={
    mine
}