//using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server.
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default ipfs; 
