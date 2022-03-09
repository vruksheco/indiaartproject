//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';

contract marketPlace is ReentrancyGuard{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _tokensSold;

    address payable owner;
    uint256 listingPrice = 0.045 ether;

    constructor(){                      // to set owner of contract
        owner=payable(msg.sender);
    }

    struct MarketToken{
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketToken) private idToMarketToken;        // mapping used to store NFT information

    event MarketTokenMinted(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );
    




function getListingPrice() public view returns(uint256){        //returns the price of listing on NFT
    return listingPrice;
}

function createMarketSale( address nftContract, uint itemId) public payable nonReentrant{       // tranfers the NFT to the buyer and the price to seller
                                                                                                // also updates the records and transfer the listing fee to the owner
    uint price= idToMarketToken[itemId].price;
    uint tokenId= idToMarketToken[itemId].tokenId;
    require(msg.value == price, 'Please submit the asking price in order to continue');

    idToMarketToken[itemId].seller.transfer(msg.value);
    IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
    idToMarketToken[itemId].owner = payable(msg.sender);
    idToMarketToken[itemId].sold = true;
    _tokensSold.increment();

    payable(owner).transfer(listingPrice);
}

// funtion to fetchMarketItems -minitng, buying and selling
// returnt the number of unsold items

function fetchMarketTokens() public view returns(MarketToken[] memory) {
    uint itemCount = _tokenIds.current();
    uint unsoldItemCount = _tokenIds.current() - _tokensSold.current();
    uint currentIndex = 0;

    //looping over the number of items created(if number has not been sold populated the array)
    MarketToken[] memory items = new MarketToken[](unsoldItemCount);
    for(uint i = 0; i < itemCount; i++) {
        if(idToMarketToken[i + 1].owner == address(0)) {
            uint currentId = i + 1;
            MarketToken storage currentItem = idToMarketToken[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;

        }
    }
    return items;

}

function mintMarketItem(
    address nftContract,
    uint tokenId,
    uint price
)
public payable nonReentrant {

require(price > 0, 'Price must be atleast one wei');
require(msg.value == listingPrice, 'Price must be equal to lisiting price');

_tokenIds.increment();
uint itemId = _tokenIds.current();

idToMarketToken[itemId] = MarketToken(
    itemId,
    nftContract,
    tokenId,
    payable(msg.sender),
    payable(address(0)), 
    price,
    false
);

//NFT transaction
IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

emit MarketTokenMinted(
    itemId, 
    nftContract, 
    tokenId, 
    msg.sender, 
    address(0), 
    price, 
    false
    );

//funtions to conduct transactions and market sales

//function to fetchMarketItems

}

function fetchMyNFTs () public view returns(MarketToken[] memory)
{
    uint totalItemCount= _tokenIds.current();
    //a second counter for each individual user
    uint itemCount=0;
    uint currentIndex=0;

    for(uint i=0; i<totalItemCount;i++)
    {
        if(idToMarketToken[i+1].owner==msg.sender)
        {
            itemCount += 1;

        }
    }
    //second loop to loop through the amount you have purchased with Itemcount
    //check to see if the owner address is equal to  msg.sender
MarketToken[] memory items=new MarketToken[](itemCount);
for(uint i=0;i< totalItemCount;i++)
{
    if(idToMarketToken[i+1].owner==msg.sender)
    {
        uint currentId= idToMarketToken[i+1].itemId;
        //current array
        MarketToken storage currentItem= idToMarketToken[currentId];
        items[currentIndex]=currentItem;
        currentIndex +=1;
    }
}
return items;

}

        // function for returning an array of minted nfts
        function fetchItemsCreated() public view returns(MarketToken[] memory) {
            // instead of .owner it will be the .seller
            uint totalItemCount = _tokenIds.current();
            uint itemCount = 0;
            uint currentIndex = 0;

      for(uint i = 0; i < totalItemCount; i++) {
                if(idToMarketToken[i + 1].seller == msg.sender) {
                    itemCount += 1;
                }
            }

            // second loop to loop through the amount you have purchased with itemcount
            // check to see if the owner address is equal to msg.sender

            MarketToken[] memory items = new MarketToken[](itemCount);
            for(uint i = 0; i < totalItemCount; i++) {
                if(idToMarketToken[i +1].seller == msg.sender) {
                    uint currentId = idToMarketToken[i + 1].itemId;
                    MarketToken storage currentItem = idToMarketToken[currentId];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;
                }
        }
        return items;
    }







}