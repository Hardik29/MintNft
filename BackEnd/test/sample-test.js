const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MarketPlace", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const CoolDude = await ethers.getContractFactory("MarketPlace");
    const coolDude = await CoolDude.deploy();
    await coolDude.deployed();

    const recipient = "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec";
    const metadataURI = 'cid/test5.png'

    let balance =  await coolDude.balanceOf(recipient);
    expect(balance).to.equal(0);

    const  newlyMintedToken =  await coolDude.payToMint(recipient, metadataURI, {value:ethers.utils.parseEther('0.05')});

    balance =  await coolDude.balanceOf(recipient);
    expect(balance).to.equal(1);
    

    expect(await coolDude.isContnetOwned(metadataURI)).to.equal(true);

  });
});
