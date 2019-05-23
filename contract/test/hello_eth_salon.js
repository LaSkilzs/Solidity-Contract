var HelloEthSalon = artifacts.require("./HelloWorld.sol");

contract("HelloEthSalon:sayHello", function(accounts) {
  it("should return a correct string", function(done) {
    var hello_eth_salon = HelloEthSalon.deployed();
    hello_eth_salon
      .then(function(contract) {
        return contract.sayHello.call();
      })
      .then(function(result) {
        assert.isTrue(result === "Hello World");
        done();
      });
  });
});
