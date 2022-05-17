require("@nomiclabs/hardhat-waffle");

const projectId='wIaQVAtmD6qXdMsvPUGvtB7kX8Odqv4w'
const fs = require('fs')
const keyData = fs.readFileSync('./p-key.txt', {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url:`https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts:[keyData]
    },
  },
  solidity: {
    version:"0.8.4",
    settings:{
      optimizer:{
        enabled: true,
        runs: 200
      }
    }
  }
};
