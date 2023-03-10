require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// mumbai: {
//   url: process.env.URL,
//   accounts: [process.env.PRIVATE_KEY],
// },
// "mantle-testnet": {
//   url: "https://rpc.testnet.mantle.xyz/",
//   accounts: [process.env.PRIVATE_KEY],
// },
