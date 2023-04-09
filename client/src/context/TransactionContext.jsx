import React, { useEffect, useState } from 'react';
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
    const [currentAccount, setCurrentAccount] = useState('');

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask")

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if(accounts.length) {
            setCurrentAccount(accounts[0]);

            // getAllTransactions();
        } else {
            console.log('No accounts found');
        }

        console.log(accounts)
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask")
            
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected(); // it is going to start only at the start of the application
    }, [])
    
    return (
        <TransactionContext.Provider value={{ connectWallet: connectWallet, currentAccount }}>
            {children}
        </TransactionContext.Provider>
    )    
}