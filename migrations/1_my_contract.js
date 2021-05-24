const Token = artifacts.require("Token");

const MyContract = artifacts.require("MyContract");
module.exports = function(deployer) {
    //Deploy token
    deployer.deploy(Token);
    //Deploy MyContract
    deployer.deploy(MyContract);
}