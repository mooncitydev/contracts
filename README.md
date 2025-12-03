# Gambit Protocol Contracts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-0.6.12-blue.svg)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Hardhat-2.19.0-orange.svg)](https://hardhat.org/)

> Decentralized perpetual trading platform with low fees, zero price impact, and up to 50x leverage.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

Gambit Protocol is a decentralized perpetual trading platform that enables users to trade perpetual futures with leverage up to 50x. The protocol features a unique AMM-based liquidity model that provides zero price impact trades and low fees.

### Key Components

- **Vault**: Core contract managing positions, collateral, and liquidity
- **Position Manager**: Handles position creation, modification, and liquidation
- **Order Book**: Manages limit orders and stop-loss orders
- **Oracle System**: Fast price feeds with Chainlink integration
- **GMT Token**: Native governance and utility token
- **Staking & Rewards**: Staking mechanisms for GMT and GLP tokens
- **GLP Manager**: Manages GLP (Gambit Liquidity Provider) token minting and burning

## ✨ Features

- 🚀 **High Leverage**: Trade with up to 50x leverage
- 💰 **Low Fees**: Competitive trading and funding fees
- 🔒 **Zero Price Impact**: AMM-based liquidity model
- 📊 **Multiple Markets**: Support for various trading pairs
- 🎯 **Limit Orders**: Advanced order types including stop-loss
- 💎 **Staking Rewards**: Earn rewards by staking GMT and GLP
- 🌐 **Multi-Chain**: Deployable on multiple EVM-compatible chains
- 🔐 **Security**: Audited smart contracts with comprehensive test coverage

## 🏗️ Architecture

```
contracts/
├── core/              # Core trading logic
│   ├── Vault.sol      # Main vault contract
│   ├── PositionManager.sol
│   ├── PositionRouter.sol
│   ├── OrderBook.sol
│   └── Router.sol
├── gambit-token/      # GMT token implementation
│   ├── GMT.sol
│   └── Treasury.sol
├── staking/           # Staking and rewards
│   ├── RewardTracker.sol
│   ├── RewardRouter.sol
│   └── Vester.sol
├── oracle/            # Price feed system
│   ├── PriceFeed.sol
│   └── FastPriceFeed.sol
├── amm/               # AMM integrations
│   ├── PancakeRouter.sol
│   └── UniRouter.sol
└── libraries/         # Shared libraries
    ├── math/
    └── token/
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gambit-protocol/contracts.git
   cd contracts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create an `env.json` file in the root directory (see `env.json.example` for reference):
   ```json
   {
     "BSC_URL": "https://bsc-dataseed.binance.org/",
     "BSC_DEPLOY_KEY": "your-private-key",
     "BSCSCAN_API_KEY": "your-api-key"
   }
   ```

## 📖 Usage

### Compile Contracts

```bash
npm run compile
```

### Run Tests

```bash
npm test
```

### Generate TypeScript Types

```bash
npm run typechain
```

### Check Contract Sizes

```bash
npm run size
```

### Clean Build Artifacts

```bash
npm run clean
```

## 🧪 Testing

The project includes comprehensive test suites covering:

- Vault operations (deposit, withdraw, swap)
- Position management (open, close, liquidate)
- Order book functionality
- Staking and rewards
- Token operations

Run all tests:
```bash
npm test
```

Run specific test file:
```bash
npx hardhat test test/core/Vault/depositCollateral.js
```

## 🚢 Deployment

### Local Development

1. Start a local Hardhat node:
   ```bash
   npx hardhat node
   ```

2. Deploy contracts to local network:
   ```bash
   npx hardhat run scripts/core/deployVault.js --network localhost
   ```

### Testnet Deployment

Deploy to BSC Testnet:
```bash
npx hardhat run scripts/core/deployVault.js --network bscTestnet
```

### Mainnet Deployment

⚠️ **Warning**: Always verify contracts and test thoroughly before mainnet deployment.

```bash
npx hardhat run scripts/core/deployVault.js --network bsc
```

## 🔒 Security

### Audits

This codebase has been audited by:
- ABDK Consulting (see `audits/` directory)

### Best Practices

- Always verify contracts on block explorers after deployment
- Use timelock contracts for critical parameter changes
- Implement multi-sig wallets for governance
- Regular security reviews and updates

### Known Considerations

- Solidity version 0.6.12 is used for compatibility
- Contracts use SafeMath for arithmetic operations
- ReentrancyGuard is implemented where necessary

## 📝 Scripts

The `scripts/` directory contains deployment and management scripts:

- **Core Contracts**: `scripts/core/`
- **Token Deployment**: `scripts/gambit-token/`
- **Staking Setup**: `scripts/staking/`
- **Peripherals**: `scripts/peripherals/`

Example usage:
```bash
npx hardhat run scripts/core/deployVault.js --network bscTestnet
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Solidity style guide
- Write comprehensive tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Telegram**: [@moooncity](https://t.me/moooncity)
- **Project**: Gambit Protocol

## 🙏 Acknowledgments

- Built on the foundation of decentralized finance principles
- Inspired by innovative DeFi protocols in the ecosystem
- Community-driven development and feedback

---

**⚠️ Disclaimer**: This software is provided "as is" without warranty. Use at your own risk. Always conduct thorough testing and audits before deploying to mainnet.
