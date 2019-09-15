var sha256 = require("sha256")
class BlockChain {

    constructor() {
        this.chain = [];
        this.createBlock()
    }

    getPrevBlock() {
        return this.chain[this.chain.length - 1];
    }

    getChain() {
        return this.chain;
    }


    isChainValid() {
        var list = [1];
        var faultIndex = -1;
        console.log(this.chain.length)
        for (var i = 1; i < this.chain.length; i++) {
            if (this.chain[i].prevHash != this.chain[i - 1].hash) {
                return i;
            }
        }
        return faultIndex;
    }

    createBlock(coins=0,isPaid=false,nonce = 1, prevHash = '0'.repeat(64), data = "Genesis Block",title="",desc="", hash = sha256('1' + "randomData" + '0' + '0')) {

        this.chain.push({
            nonce,
            index: this.chain.length,
            data,
            title,
            desc,
            prevHash,
            hash,
            timeStamp: Date().toString(),
            isPaid,
            coins

        })

    }

 

}

module.exports={
    BlockChain
}