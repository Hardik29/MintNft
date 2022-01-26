const hre = require("hardhat");

const main = async() => {
    const CoolDude = await hre.ethers.getContractFactory("MarketPlace");
    const coolDude = await CoolDude.deploy();
    await coolDude.deployed();

    const recipient = "0xfabb0ac9d68b0b445fb7357272ff202c5651694a";
    const metadataURI = 'cid/test5.png'

    let balance =  await coolDude.balanceOf(recipient);
    console.log(balance);

    const  newlyMintedToken =  await coolDude.payToMint(recipient, metadataURI, {value:ethers.utils.parseEther('0.05')});

    balance =  await coolDude.balanceOf(recipient);
    console.log(balance);

    let key = await coolDude.isContnetOwned(metadataURI);

    console.log(key);


} 
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  runMain();