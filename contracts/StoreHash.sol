pragma solidity ^0.4.17;


contract Contract {
      string ipfsHash;
      address public sender;
      
    function sendHash(string x) public {
        ipfsHash = x;
    }
    function notary() {
        sender = msg.sender;
    }
    
    function getHash() public view returns (string x) {
        return ipfsHash;
    }

}
//0x2cccd6e8269f0080a094ae8ccf17db93528ca0cd contract address