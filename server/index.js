const express = require('express');
const verifyProof = require('../utils/verifyProof');
const calculateMerkleRoot = require('../utils/calculateRoot');

const port = 1225;

const app = express();
app.use(express.json());

// Hardcoded Merkle root representing the whole nice list
const MERKLE_ROOT = calculateMerkleRoot(); // Use calculated Merkle root

app.post('/gift', (req, res) => {
  const { name, proof } = req.body;

  // Verify if the name is in the list using the proof and Merkle root
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);

  if (isInTheList) {
    res.send("You got a toy robot!");
  } else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
