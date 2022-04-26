import React, { useState, useEffect} from 'react';
import './Dashboard.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import { Images } from '../../Assets/Images';
import {checkAlreadyConnectedMetaMask} from '../../redux/thunk/thunk';
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = () => {
    const connection = useSelector(state => state.connection)
    const state = useSelector(state => state);    

    const adminAddress = "";

    const [ numberField, setNumberField ] = useState();

    //function for Total Sold Tokens

    const totalSoldTokens=()=>{
        //write your logic for total sold tokens
    }

    //function for total collected tokens

    const totalCollectedTokens=()=>{
        //write your logic for total collected tokens
    }
    

    // usman change and reset state according to blockchain response
    const [data, setData] = useState(
        [
            { heading: 'ICO Start Date', date: 'Jun 2, 2021' },
            { heading: 'ICO End Date', date: 'Oct 4, 2021' },
            { heading: 'Total Tokens ETH', date: '3.0611162 DASH' },
            { heading: 'Token Holdings', date: '0xB3775fB83F7D1' },
            { heading: 'Convert Price', date: '$800.056' },
            { heading: 'Market Value', date: '$780.00' },
            { heading: 'Remaining Token', date: '25 ETH' }
        ]
    );

    const withdrawClick = (e) => {
        e.preventDefault();
        
        // here logic place
    }

    const getRegExp = ['e', 'E', '+', '-', '.'];
    const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
     
     // updateAddress(dispatch);
      dispatch(checkAlreadyConnectedMetaMask(connection));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

    return (

        <div className="w-100 h-100 app-flex-row align-align-items-start justify-content-start">
            <div className="dashboard-sidebar">
                <Sidebar />
            </div>
            <div className="w-100 h-100 bg-primary app-flex-column" style={{ padding: '50px 50px 10px 50px' }}>
                
                <div className="mx-4 mb-3 small-screen-logo">
                    <img alt="" src={Images.logo} />
                </div>
                
                {
                    // usman check this condition && reverse this.
                    state.address[0] !== adminAddress ? 
                    <>
                        <div className="w-100 app-flex-row align-items-center justify-content-start heading-wrapper">
                            <div className="app-flex-column">
                                <span className="dashboard-heading-large">Dashboard</span>
                                <span className="dashboard-heading-small mb-2">Select below assets to check token details.</span>
                            </div>
                            {/* <div className="withdraw-container">
                                <input type="number" 
                                    value={numberField} autoComplete="off" min="0" className="withdraw-input"
                                    onChange={(e) => setNumberField(e.target.value)} placeholder="Amount" 
                                    onKeyDown={(e) => getRegExp.includes(e.key) && e.preventDefault()}
                                />   
                                <button onClick={withdrawClick} className="withdraw-button">
                                    withdraw
                                </button>                     
                            </div> */}
                        </div>

                        <div className="bg-line" style={{ height: '1px', background: 'whitesmoke' }}>
                        </div>

                        <div className="mx-0 mt-5 w-100 p-0 text-white" style={{ height: '80%', overflowY: 'auto' }}>

                            {/* <div className="app-flex-row w-100 flex-wrap align-items-center justify-content-between">
                                {
                                    data?.map((coins, index) => (
                                        <div className="dashboard-conis mb-4" key={index}>
                                            <span className="paragraph-font">{coins.heading}</span>
                                            <span>{coins.date}</span>
                                        </div>
                                    ))
                                }
                            </div> */}
                            <div className="flex app-flex-col w-full flex-wrap text-center justify-content-center align-items-center dashboard-parent">
                                 
                                    
                                        <div className="dashboard-conis mb-4">
                                            <span className="paragraph-font">Total Sa Ra Tokens Sold</span>
                                            <span className="paragraph-font">500</span>
                                        </div>
                                        <div className="dashboard-conis mb-4">
                                            <span className="paragraph-font">Total Collected ETHs</span>
                                            <span className="paragraph-font">5</span>
                                        </div>
                                        <div className="dashboard-conis mb-4">
                                            <span className="paragraph-font">Rate of Token</span>
                                            <span className="paragraph-font">1 ETH = 1000 Sa Ra</span>
                                        </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="text-white">
                        Permission denied.
                    </div>
                }

            </div>

        </div>

    );

}

export default Dashboard;