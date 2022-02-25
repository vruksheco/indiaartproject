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






}