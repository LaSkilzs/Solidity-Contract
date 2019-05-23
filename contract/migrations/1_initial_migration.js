const Migrations = artifacts.require("./Migrations.sol");
const HelloEthSalon = artifacts.require("./HelloWorld.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloEthSalon);
};
