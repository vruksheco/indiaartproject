//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract mintNFT is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private token_Id;

    address marketAddress;          //address of NFT marketPlace contract

    constructor(address _marketAddress) ERC721('KryptoBirdz','KBIRDZ'){      // to set marketplace address
        marketAddress=_marketAddress;
    }

    function mintToken(string memory newTokenUri) public returns(uint) {    // to mint tokens
        token_Id.increment();
        uint256 newId = token_Id.current();

        _mint(msg.sender,newId);
        _setTokenURI(newId, newTokenUri);
        setApprovalForAll(marketAddress,true);

        return newId;
    }
}
