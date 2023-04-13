// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Totolino is ERC20, Ownable {
    address public Owner;

    constructor() ERC20("totolino", "MTK") {
        Owner = msg.sender;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 1 ether);
    }

    function transferir(address to, address from, uint256 amount) public {
        transferFrom(to, from, amount * 1 ether);
    }

    function approvar(address account, uint256 amount) public {
        approve(account, amount * 1 ether);
    }
}
