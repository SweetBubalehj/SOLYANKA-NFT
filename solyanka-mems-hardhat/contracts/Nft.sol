// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Nft is ERC721Enumerable, Ownable {
    //int => string
    using Strings for uint256;

    uint public maxSupply = 10;
    uint cost = 0.001 ether; //0.001 BNB

    enum Collection {
        windowsMoment,
        regexMoment,
        gamingMoment,
        filePathMoment,
        cpuMoment
    }

    mapping(Collection => uint) public nftToSupply;

    string ipfsBaseURI =
        "ipfs://QmPfZt37uQ46gfo2bbQCp9kDPUuzsLYunpxGfhSCvszZLq/";

    constructor() ERC721("SOLYANKA-MEMES", "SM") {}

    function _baseURI() internal view override returns (string memory) {
        return ipfsBaseURI;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        _requireMinted(tokenId);
        return
            bytes(_baseURI()).length > 0
                ? string(
                    abi.encodePacked(_baseURI(), tokenId.toString(), ".json")
                )
                : "";
    }

    function changeBaseURI(string memory _newBaseURI) public onlyOwner {
        ipfsBaseURI = _newBaseURI;
    }

    function buyNFT(Collection _nftType) public payable {
        require(nftToSupply[_nftType] < maxSupply, "You reached max supply");
        require(msg.value == cost, "Please, add valid amount in BNB");
        address _to = msg.sender;
        if (_nftType == Collection.windowsMoment) {
            _safeMint(_to, nftToSupply[_nftType]);
        } else if (_nftType == Collection.regexMoment) {
            _safeMint(_to, nftToSupply[_nftType] + 10);
        } else if (_nftType == Collection.gamingMoment) {
            _safeMint(_to, nftToSupply[_nftType] + 20);
        } else if (_nftType == Collection.filePathMoment) {
            _safeMint(_to, nftToSupply[_nftType] + 30);
        } else if (_nftType == Collection.cpuMoment) {
            _safeMint(_to, nftToSupply[_nftType] + 40);
        }
        nftToSupply[_nftType]++;
    }

    function withdraw() public onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }
}
