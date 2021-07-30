import React, { useState } from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import Web3 from "web3";
import { ethers } from "ethers";


import {
    SALE_CONTRACT_ABI,
    SALE_CONTRACT_ADDRESS,
  } from "../../Contract/CrowdsaleContract" ;

const CustomModal = (props) => {
    
    const { show, handleClose } = props;

    const [ value, setValue ] = useState('');

    const [ convertedValue, setConvertedValue ] = useState('');

    const clickBuyCoin = async () => {

        if(!value){
            alert('Plz Write Amount.');
        } 
        else{

            const web3 = new Web3(Web3.givenProvider);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                SALE_CONTRACT_ADDRESS,
                SALE_CONTRACT_ABI,
                signer
            );

            console.log(convertedValue);
            let weiamount = Web3.utils.toWei(convertedValue.toString(), 'ether');
            
            const accounts = await web3.eth.getAccounts();

            console.log(await web3.eth.getBalance(accounts[0]));
            
            const transaction = await contract.buyTokens(accounts[0], {value: weiamount})
            .then(function (txHash) {
                console.log('Transaction sent')
              })
            .catch(
                //   alert("Transaction failed")
            );
            
            
        }
    }

    const getRegExp = ['e', 'E', '+', '-', '.'];

    return(

        <Modal show={show} onHide={handleClose} centered 
        backdrop="static" autoFocus={false}>
            
            <div className="px-0 py-4 bg-secondary rounded position-relative w-100"
            style={{ margin: '0px', border: '3px solid var(--primary)', outline: 'none' }}>
    
                <FaTimes className="position-absolute text-white cursor-pointer-sort" 
                    style={{ right: '10px', top: '10px' }} onClick={handleClose} />

                <div className="app-flex-column w-100 py-3 bg-secondary rounded m-0 px-0">

                    <h4 className="text-center text-white">Total: 100 ETH</h4>

                    <div className="app-flex-row w-100 justify-content-center align-items-center my-4">
                    <table>
                            
                            <tr>
                                <td><h4 className="text-center text-white mr-3">Buy</h4></td>
                                <td>
                                   <input className="buy-coin-filed" placeholder="Enter Value" value={value} onChange={(e) => {
                                            setValue(e.target.value); 
                                            setConvertedValue(e.target.value/1000);
                                        }} onKeyDown={(e) => getRegExp.includes(e.key) && e.preventDefault()}/>
                                </td>
                                </tr>
                            <tr>
                                <td></td>
                                <td><input className="buy-coin-calculate" readOnly={true}
                                    value={`${convertedValue} ETH`} type="text" />
                                </td>
                            </tr>
                        </table>
                    </div>

                    <button className="buy-coin-btn" onClick={clickBuyCoin}>
                        buy now
                    </button>
                </div>

            </div>

        </Modal>

    );

}
 
export default CustomModal;