// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract Transactions {
    uint256 transactionCount;

    // Think of it like a function we are going to emit or call later...
    event Transfer( address from, address receiver, uint amount, string message, uint256 timestamp, string keyword );

    // This is like an object
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Define an array for storing all transactions
    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    // Is going to get from the memory the TransferStruct array
    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionCount;
    }
}
