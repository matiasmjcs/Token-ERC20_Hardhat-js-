# Token-ERC20 with TypeScript and Hardhat

This repository contains the implementation of an ERC20 token using javaScript and Hardhat. The token follows the Ethereum ERC20 standard and provides basic functionalities for transferring and managing tokens.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js 
- Hardhat (v2.13.1)

## Setup

1. Clone this repository to your local machine: ``git clone https://github.com/matiasmjcs/Token-ERC20_Hardhat-js-.git``
2.  Navigate to the project directory: ``cd token-erc20-ts-hardhat``
3. Install the dependencies: ``npm install``
4. Configure your `.env` file with your private keys and the Ethereum network URL you wish to use. You can use the `.env.example` file as a base.

## Usage

### Compilation

To compile the ERC20 token contract, run the following command: ``npx hardhat compile``

### Contract Deployment

Before deploying the contract to an Ethereum network, make sure to configure the network in the `hardhat.config.js` file. Then, execute the following command to deploy the contract:``npx hardhat run scripts/deploy.js --network <network-name>``

### Interacting with the Contract

You can interact with the contract using the example scripts provided in the `scripts` directory. These scripts demonstrate operations such as token transfers and balance queries.

To execute a script, use the following command: ``npx hardhat run scripts/<script-name>.js --network <network-name>``

Remember to replace `<script-name>` with the name of the script you want to execute and `<network-name>` with the name of the Ethereum network where you deployed the contract.

## Contributions

If you would like to contribute to this project, we welcome your suggestions and improvements! Always make sure to follow development best practices and thoroughly test your changes before submitting.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.



