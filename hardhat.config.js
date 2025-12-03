require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer");
require("@typechain/hardhat");

// Load environment variables from env.json if it exists
let envConfig = {};
try {
  envConfig = require("./env.json");
} catch (e) {
  console.warn("Warning: env.json not found. Some network configurations may be unavailable.");
}

const {
  BSC_URL,
  BSC_DEPLOY_KEY,
  BSCSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  SNOWTRACE_API_KEY,
  ARBISCAN_API_KEY,
  ETHERSCAN_API_KEY,
  BSC_TESTNET_URL,
  BSC_TESTNET_DEPLOY_KEY,
  ARBITRUM_TESTNET_DEPLOY_KEY,
  ARBITRUM_TESTNET_URL,
  ARBITRUM_DEPLOY_KEY,
  ARBITRUM_URL,
  AVAX_DEPLOY_KEY,
  AVAX_URL,
  POLYGON_DEPLOY_KEY,
  POLYGON_URL,
  MAINNET_URL,
  MAINNET_DEPLOY_KEY
} = envConfig;

/**
 * Hardhat task to print all available accounts
 */
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode", "evm.deployedBytecode", "evm.methodIdentifiers"],
        },
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      chainId: 1337,
      accounts: {
        count: 20,
        accountsBalance: "10000000000000000000000", // 10000 ETH
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
    },
    ...(BSC_URL && {
      bsc: {
        url: BSC_URL,
        chainId: 56,
        gasPrice: 10000000000,
        accounts: BSC_DEPLOY_KEY ? [BSC_DEPLOY_KEY] : [],
      },
    }),
    ...(BSC_TESTNET_URL && {
      bscTestnet: {
        url: BSC_TESTNET_URL,
        chainId: 97,
        gasPrice: 20000000000,
        accounts: BSC_TESTNET_DEPLOY_KEY ? [BSC_TESTNET_DEPLOY_KEY] : [],
      },
    }),
    ...(ARBITRUM_TESTNET_URL && {
      arbitrumTestnet: {
        url: ARBITRUM_TESTNET_URL,
        gasPrice: 10000000000,
        chainId: 421611,
        accounts: ARBITRUM_TESTNET_DEPLOY_KEY ? [ARBITRUM_TESTNET_DEPLOY_KEY] : [],
      },
    }),
    ...(ARBITRUM_URL && {
      arbitrum: {
        url: ARBITRUM_URL,
        gasPrice: 30000000000,
        chainId: 42161,
        accounts: ARBITRUM_DEPLOY_KEY ? [ARBITRUM_DEPLOY_KEY] : [],
      },
    }),
    ...(AVAX_URL && {
      avalanche: {
        url: AVAX_URL,
        gasPrice: 200000000000,
        chainId: 43114,
        accounts: AVAX_DEPLOY_KEY ? [AVAX_DEPLOY_KEY] : [],
      },
    }),
    ...(POLYGON_URL && {
      polygon: {
        url: POLYGON_URL,
        gasPrice: 100000000000,
        chainId: 137,
        accounts: POLYGON_DEPLOY_KEY ? [POLYGON_DEPLOY_KEY] : [],
      },
    }),
    ...(MAINNET_URL && {
      mainnet: {
        url: MAINNET_URL,
        gasPrice: 50000000000,
        chainId: 1,
        accounts: MAINNET_DEPLOY_KEY ? [MAINNET_DEPLOY_KEY] : [],
      },
    }),
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY || "",
      arbitrumOne: ARBISCAN_API_KEY || "",
      avalanche: SNOWTRACE_API_KEY || "",
      bsc: BSCSCAN_API_KEY || "",
      polygon: POLYGONSCAN_API_KEY || "",
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
    externalArtifacts: ["externalArtifacts/*.json"],
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: true,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
