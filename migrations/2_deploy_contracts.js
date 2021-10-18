const SwapFactory = artifacts.require("SwapFactory");

const adminAddress = "";
const feeCollectingAddress = "";

module.exports = async (deployer) => {
  await deployer.deploy(SwapFactory, adminAddress);

  const contract = await SwapFactory.deployed();

  await contract.setFeeTo(feeCollectingAddress);
};
