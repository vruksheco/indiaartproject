//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';

contract marketPlace is ReentrancyGuard{
    using Counters for Counters.Counter;

    Counters.Counter private token_Id;
    Counters.Counter private tokens_Sold;

    address payable owner;
    uint256 listingFee = 0.045 ether;

    constructor(){                      // to set owner of contract
        owner=payable(msg.sender);
    }

    struct tokenContent{
        uint256 itemId;
        address nftContract;
        uint256 token_Id;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => tokenContent) private tokenIdToToken;        // mapping used to store NFT information

    event tokenMinted(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed token_Id,
        address payable seller,
        address payable owner,
        uint256 price,
        bool sold
    );
    




function getListingPrice() public view returns(uint256){        //returns the price of listing on NFT
    return listingFee;
}

function createMarketSale( address nftContract, uint itemId) public payable nonReentrant{       // tranfers the NFT to the buyer and the price to seller
                                                                                                // also updates the records and transfer the listing fee to the owner
    uint price= tokenIdToToken[itemId].price;
    uint tokenId= tokenIdToToken[itemId].token_Id;
    require(msg.value == price, 'Please submit the asking price in order to continue');

    tokenIdToToken[itemId].seller.transfer(msg.value);
    IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
    tokenIdToToken[itemId].owner = payable(msg.sender);
    tokenIdToToken[itemId].sold = true;
    tokens_Sold.increment();

    payable(owner).transfer(listingFee);
}






}