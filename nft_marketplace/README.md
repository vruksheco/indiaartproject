ManiacNFT Marketplace for NFTs

This project is a NFT Marketplace that allows the users to:
    - buy NFTs
    - mint and sell NFTs
    - keep track of bougth NFTs
    - keep track of minted NFTs

The technologies used for this project are:
    - Polygon Blockchain
    - IPFS
    - Solidity 
    - ERC721 smartcontract standards
    - Metamask
    - Hardhat
    - NextJS
    - Tailwind CSS


To install the project and dependencies:

1) clone the repository and change the directory to nft_marketplace.

2) install dependencies by using:
    npm install

To run the project on localhost:

1) start the local blockchain using:
    npx hardhat node

2) deploy the smartcontracts of the local blockchain using:
    npx hardhat run .\scripts\deploy.js --network localhost

3) start project using:
    npm run dev

4) go to chrome and install the metamask extension and configure hardhat local blockchain.


Configuring Metamask for hardhat:

1) Goto add networks.

2) Set a network name.

3) Set the new RPC URL to:
    http://127.0.0.1:8545/

4) Set chain id to 1337

5) Set currency symbol to ETH

6) Click save.