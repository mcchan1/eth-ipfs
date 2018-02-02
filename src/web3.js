import Web3 from 'web3';
//overrides metamask v0.2 for our 1.0
const web3 = new Web3(window.web3.currentProvider);

export default web3;