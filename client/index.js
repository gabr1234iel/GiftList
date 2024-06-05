const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const name = 'Gabriel Yong'; // Name to check against the nice list

  // Calculate Merkle root for the nice list
  const merkleTree = new MerkleTree(niceList);
  const root = merkleTree.getRoot();

  // Find proof for the given name
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);

  // Send proof and name to the server
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof
  });

  console.log({ gift });
}

main();
