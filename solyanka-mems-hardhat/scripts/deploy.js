const { ethers } = require("hardhat");

async function main() {
  const nftFactory = await ethers.getContractFactory("Nft");
  const contract = await nftFactory.deploy();
  await contract.deployed();
  console.log("NFT contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
