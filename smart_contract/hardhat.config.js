// https://eth-sepolia.g.alchemy.com/v2/zzJXGJlqaoWzxstZR87xZzUVWOP37xXr

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.7',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/zzJXGJlqaoWzxstZR87xZzUVWOP37xXr',
      accounts: [ '9e07d6d7670bd02e4c672b1e04478c03a326dbb9619ce2138a7103038aca334f' ]
    }
  }
}