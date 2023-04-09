import React, { useEffetct, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

// fetch ethereum contract
const getEthereumContract = () => {
    const provider = new ethers.provider.Web3Provider(ethereum.window);
    const signer = provider.getSigner();
    const TransactionContract = new etehers.contract(contractAddress, contractABI, signer); // these are 3 ingredients we need to fetch our contract

    console.log( { provider, signer, TransactionContract } )
}

export const TransactionProvider = ({ children }) => {
    return (
        <TransactionContext.Provider value={{ value: 'test' }}>
            {children}
        </TransactionContext.Provider>
    )    
}