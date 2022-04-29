import React, { useState, useEffect } from 'react';
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


    const getLaunchDate = async () => {
        const contractABi=SALE_CONTRACT_ABI;
        try{
          const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby-light.eth.linkpool.io/"));
        const contractInstance = new web3.eth.Contract(contractABi,SALE_CONTRACT_ADDRESS);
        const startTime = await contractInstance.methods.icoStartDate().call();
        if(startTime){
          console.log('launch date is ',startTime);
        const fromFun='launchDate';
        return startTime;
        
        }
        }catch(err){
          if(err){
          // console.log('in err of launch date')
            getLaunchDate();
          }
        }
        
      
      }


      const getIcoEndDate = async () => {
        const contractABi=SALE_CONTRACT_ABI;
        try{
          const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby-light.eth.linkpool.io/"));
        const contractInstance = new web3.eth.Contract(contractABi,SALE_CONTRACT_ADDRESS);
       
        const endTime = await contractInstance.methods.icoEndDate().call();
        
        if(endTime){
        console.log('end date is ',endTime);
        const fromFun='endDate';
         
         
         return endTime;
        
        }
        }catch(err){
          if(err){
            //console.log('err from launch date ',err);
            
            getIcoEndDate();
          }
        }
        
      
      }
    const checkLaunching = async () => {
        setLoading(true);
        const launchTime = await getLaunchDate();
        const endTime = await getIcoEndDate();
        console.log('launching Date is ', launchTime, ' and ending Time is ', endTime);
        const now = new Date().getTime();
        const lTime = (launchTime*1000) - now;
        const eTime = (endTime*1000) - now;
        
        if(lTime > 0){
            alert('Please wait for launching date');
            setLoading(false);
        }else if (eTime < 0){
            alert('ICO ends, You cannot buy Tokens');
            setLoading(false);
        }else{
            clickBuyCoin();
        }
        
      }
    const clickBuyCoin = async () => {

        if(!value){
            setLoading(false);
            alert('Plz Write Amount.');
        } 
        else{
            const web3 = new Web3(Web3.givenProvider);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const id = await web3.eth.net.getId();
                console.log(id);
                if (id === 4 ) {
                  if(state?.userBalance >= convertedValue){
                  

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
                setLoading(false);
                alert('Your balance is less.');
            }
            
        }else{
            setLoading(false);
        alert('Please connect with proper network');
    }
}
    }
    
    const getRegExp = ['e', 'E', '+', '-', '.'];

    return(
        <div>
        <Modal show={show} onHide={handleClose} centered 
        backdrop="static" autoFocus={false}>
            <div className="app-flex-column justify-content-center align-items-center w-100 h-50">
                {/* <div className="text-white font-30px" style={{marginTop: '-60px'}}>Holdings</div> */}
            </div>
            <div className="px-0 py-4 bg-secondary rounded position-relative w-100"
            style={{ margin: '0px', border: '3px solid var(--primary)', outline: 'none' }}>
    
                <FaTimes className="position-absolute text-white cursor-pointer-sort" 
                    style={{ right: '10px', top: '10px' }} onClick={handleClose} />

                <div className="app-flex-column w-100 py-3 bg-secondary rounded m-0 px-0">

                    <h4 className="text-center text-white heading-font">Your Balance: { state?.userBalance } ETH</h4>

                    <div className="app-flex-row w-100 justify-content-center align-items-center my-4">
                        <table>                        
                            <tbody>
                                <tr>
                                    {/* <td><h4 className="text-center text-white mr-3 heading-font">Buy</h4></td> */}
                                    <td>
                                    <input className="buy-coin-filed heading-font" type="number" placeholder="Enter Value" min="0" value={value} onChange={(e) => {
                                                setValue(e.target.value); 
                                                setConvertedValue(e.target.value/1000);
                                            }} onKeyDown={(e) => getRegExp.includes(e.key) && e.preventDefault()}/>
                                    </td>
                                    </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td><input className="buy-coin-calculate heading-font" readOnly={true}
                                        value={`${convertedValue} ETH`} type="text" />
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                       
                    </div>
                    <p style={{color: 'white', textAlign: 'center', paddingBottom: '15px'}}>1 ETH = 1000 Sa Ra Tokens</p>

                    <button className="buy-coin-btn paragraph-font" onClick={checkLaunching}>
                        { loading ? <Spinner animation="border" size="sm" /> : 'buy now' }
                    </button>
                </div>

            </div>

        </Modal>
        </div>

    );

}
 
export default CustomModal;