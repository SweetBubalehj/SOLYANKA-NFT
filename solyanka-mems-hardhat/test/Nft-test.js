const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

// Описание тестового сценария
describe("Nft", function () {
  let nftFactory, contract, maxSupply;

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();
    nftFactory = await ethers.getContractFactory("Nft");
    contract = await nftFactory.deploy();
    maxSupply = await contract.maxSupply();
    await contract.deployed();
  });

  it("should allow buying Windows Moment NFT", async function () {
    const nftType = 0;
    await contract
      .connect(user1)
      .buyNFT(nftType, { value: ethers.utils.parseEther("0.001") });
    const balance = await contract.balanceOf(user1.address);
    expect(balance).to.equal(1);
  });

  it("should allow buying Regex Moment NFT", async function () {
    const nftType = 1;
    await contract
      .connect(user1)
      .buyNFT(nftType, { value: ethers.utils.parseEther("0.001") });
    const balance = await contract.balanceOf(user1.address);
    expect(balance).to.equal(1);
  });

  it("should allow buying Gaming Moment NFT", async function () {
    const nftType = 2;
    await contract
      .connect(user1)
      .buyNFT(nftType, { value: ethers.utils.parseEther("0.001") });
    const balance = await contract.balanceOf(user1.address);
    expect(balance).to.equal(1);
  });

  it("should allow buying File Path Moment NFT", async function () {
    const nftType = 3;
    await contract
      .connect(user1)
      .buyNFT(nftType, { value: ethers.utils.parseEther("0.001") });
    const balance = await contract.balanceOf(user1.address);
    expect(balance).to.equal(1);
  });

  it("should allow buying CPU Moment NFT", async function () {
    const nftType = 4;
    await contract
      .connect(user1)
      .buyNFT(nftType, { value: ethers.utils.parseEther("0.001") });
    const balance = await contract.balanceOf(user1.address);
    expect(balance).to.equal(1);
  });

  it("should not allow buying more than 10 NFTs of the same type", async function () {
    // Покупаем 10 NFT одного типа (0 - windowsMoment)
    for (let i = 0; i < maxSupply; i++) {
      await contract.buyNFT(0, { value: ethers.utils.parseEther("0.001") });
    }

    // Пытаемся купить еще одну NFT этого же типа
    await expect(
      contract.buyNFT(0, { value: ethers.utils.parseEther("0.001") })
    ).to.be.revertedWith("You reached max supply");
  });

  it("should withdraw contract balance", async function () {
    await contract.buyNFT(0, { value: ethers.utils.parseEther("0.001") }); // покупка одной NFT
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    await contract.connect(owner).withdraw();
    const balanceAfter = await ethers.provider.getBalance(owner.address);

    expect(balanceAfter).to.be.gt(balanceBefore);
  });

  it("should return the correct token URI", async function () {
    // Mint a new NFT with token ID 0
    await contract.buyNFT(0, { value: ethers.utils.parseEther("0.001") });

    // Get the token URI for token ID 0
    const tokenURI = await contract.tokenURI(0);

    // Verify that the token URI is correct
    expect(tokenURI).to.equal(
      "ipfs://QmPfZt37uQ46gfo2bbQCp9kDPUuzsLYunpxGfhSCvszZLq/0.json"
    );
  });

  it("should revert if not called by owner", async function () {
    await contract.buyNFT(0, { value: ethers.utils.parseEther("0.001") }); // покупка одной NFT
    await expect(contract.connect(user1).withdraw()).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("should not allow non-owners to change the base URI", async function () {
    const newBaseURI = "ipfs://QmYKJtaEEmrFYrZ9XaKctj1cZynA4Z4z4sD4sbV7iYQWbb/";
    await expect(
      contract.connect(user1).changeBaseURI(newBaseURI)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("should be changed by owner", async function () {
    const newBaseURI = "ipfs://QmYKJtaEEmrFYrZ9XaKctj1cZynA4Z4z4sD4sbV7iYQWbb/";
    await contract.buyNFT(0, { value: ethers.utils.parseEther("0.001") });
    await contract.changeBaseURI(newBaseURI);
    await contract.tokenURI(0).then((result) => {
      expect(result).to.be.eq(
        "ipfs://QmYKJtaEEmrFYrZ9XaKctj1cZynA4Z4z4sD4sbV7iYQWbb/0.json"
      );
    });
  });
});
