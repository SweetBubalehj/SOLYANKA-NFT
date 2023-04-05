require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const BNBT_PRIVATE_KEY = process.env.BNBT_PRIVATE_KEY;
const BNBT_RPC_URL = process.env.BNBT_RPC_URL;
module.exports = {
  solidity: "0.8.18",
  gasReporter: {
    enabled: true,
    outputFile: "gasreporter.txt",
    noColors: true,
  },
  defaultNetwork: "hardhat",
  networks: {
    bnbt: {
      url: BNBT_RPC_URL,
      accounts: [BNBT_PRIVATE_KEY],
      chainId: 97,
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: "6J3INCD8WK2UZHS9VAQCAY8XCIPQVF9SII",
    },
  },
};
