pragma solidity ^0.5.16;

import "./ERC20.sol";

contract Mintable is ERC20{
    
    mapping (address => bool) internal minterList;
    
    modifier onlyMinter() {
        require( minterList[msg.sender] ,"ERC20: Mint and Burn rights missing!");
        _;
    }
    
    function mint(address account, uint256 amount)public onlyMinter returns(bool){
        _mint(account, amount);
        return true;
    }
    
    function burnfrom(address account, uint256 amount)public onlyMinter returns(bool){
        burnfrom(account, amount);
        return true;
    }
    
}
