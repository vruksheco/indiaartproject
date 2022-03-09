const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("marketPlace", function () {
  it("should log addresses of contracts", async function () {
    const Market = await ethers.getContractFactory("marketPlace");
    const market = await Market.deploy();
    await market.deployed();
    const Marketadd = market.address
    console.log('maket add: ',Marketadd)

    const NFTcont = await ethers.getContractFactory("mintNFT");
    const nftcont = await NFTcont.deploy(Marketadd);
    await nftcont.deployed();

    const NFTadd = nftcont.address
    console.log('NFT add: ',NFTadd)

    let listingPrice =  await market.getListingPrice()
    listingPrice = listingPrice.toString()
    console.log('listing price: ',listingPrice)

    const auctionPrice = ethers.utils.parseUnits('100', 'ether')

    await nftcont.mintToken('https-h1')
    await nftcont.mintToken('https-h2')

    await market.mintMarketItem(NFTadd,1,auctionPrice,{value: listingPrice})
    await market.mintMarketItem(NFTadd,2,auctionPrice,{value: listingPrice})

    const[_,buyerAddress] = await ethers.getSigners()

    await market.connect(buyerAddress).createMarketSale(NFTadd,1,{
      value: auctionPrice
    })

    let items = await market.fetchMarketTokens()

    items =  await Promise.all(items.map(async i=>{
      const tokenUri =await nftcont.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item;
    }))

    console.log('items: ',items)

  });
});
