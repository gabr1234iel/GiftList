const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList.json');

// Function to calculate the Merkle root
function calculateMerkleRoot() {
  // Create Merkle tree for the nice list
  const merkleTree = new MerkleTree(niceList);

  // Obtain the Merkle root
  return merkleTree.getRoot();
}

module.exports = calculateMerkleRoot;
