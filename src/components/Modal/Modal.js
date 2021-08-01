import React, { useState } from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import { Modal, Spinner } from 'react-bootstrap';
import Web3 from "web3";
import { ethers } from "ethers";

import { useSelector, useDispatch } from 'react-redux';

import {
    SALE_CONTRACT_ABI,
    SALE_CONTRACT_ADDRESS,
} from "Contract/CrowdsaleContract" ;
import { setUserBalance } from 'redux/actions/action';

const CustomModal = (props) => {
    
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { show, handleClose } = props;

    const [ value, setValue ] = useState('');

    const [ loading, setLoading ] = useState(false);

    const [ convertedValue, setConvertedValue ] = useState('');

    const clickBuyCoin = async () => {

        if(!value){
            alert('Plz Write Amount.');
        } 
        else{
            
            if(state?.userBalance >= convertedValue){
                setLoading(true);

                const web3 = new Web3(Web3.givenProvider);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
    
                const contract = new ethers.Contract(
                    SALE_CONTRACT_ADDRESS,
                    SALE_CONTRACT_ABI,
                    signer
                );
    
                const weightAmount = Web3.utils.toWei(convertedValue.toString(), 'ether');
                
                await contract.buyTokens(state?.address[0], { value: weightAmount })
                .then((remainingBalance) => {
                    setLoading(false);
                    setValue('');
                    setConvertedValue('');
                    alert("Transaction Complete", remainingBalance);
                    dispatch(setUserBalance({ flag: false, balance: state?.userBalance - convertedValue }));
                    handleClose();
                })
                .catch((err) => {
                    setLoading(false);
                    alert("Transaction failed");
                });

            }
            else {
                alert('Your balance is less.');
            }
            
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

                    <h4 className="text-center text-white heading-font">Total: { state?.userBalance } ETH</h4>

                    <div className="app-flex-row w-100 justify-content-center align-items-center my-4">
                        <table>                        
                            <tbody>
                                <tr>
                                    <td><h4 className="text-center text-white mr-3 heading-font">Buy</h4></td>
                                    <td>
                                    <input className="buy-coin-filed heading-font" type="number" placeholder="Enter Value" value={value} onChange={(e) => {
                                                setValue(e.target.value); 
                                                setConvertedValue(e.target.value/1000);
                                            }} onKeyDown={(e) => getRegExp.includes(e.key) && e.preventDefault()}/>
                                    </td>
                                    </tr>
                                <tr>
                                    <td></td>
                                    <td><input className="buy-coin-calculate heading-font" readOnly={true}
                                        value={`${convertedValue} ETH`} type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button className="buy-coin-btn paragraph-font" onClick={clickBuyCoin}>
                        { loading ? <Spinner animation="border" size="sm" /> : 'buy now' }
                    </button>
                </div>

            </div>

        </Modal>

    );

}
 
export default CustomModal;