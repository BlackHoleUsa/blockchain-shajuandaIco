import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { NavLink, Link } from 'react-router-dom';
import { Images } from '../../Assets/Images';
import { Routes } from '../../Routes/Routes';
import { Avatar } from '../Avatar/Avatar';
import { BiChevronDown } from 'react-icons/bi';
import { Nav, Navbar } from 'react-bootstrap';
import Web3 from "web3";
import { reducer } from '../../redux/reducer/reducer';
import { initialState } from '../../redux/reducer/state';

import { useDispatch, useSelector } from 'react-redux';
import { connectMetaMask, checkAlreadyConnectedMetaMask } from 'redux/thunk/thunk';
import { Redirect } from 'react-router-dom';


const Topbar = (props) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [scroll, setScroll] = useState(false);
    const [launchTime, setLaunchTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const clientAddress = '0x6583aADad3A8B';
    const { currentState, clickLink } = props;

    const connectToMetaMask = () => {
        dispatch(connectMetaMask());
      };

    const data = [
        { id: 1, value: 'Home', sectionId: 'home-section' },
        { id: 2, value: 'About', sectionId: 'about-section' },
        { id: 3, value: 'Team', sectionId: 'team-section' },
        { id: 4, value: 'Token', sectionId: 'token-section' },
        { id: 5, value: 'Roadmap', sectionId: 'roadmap-section' },
        { id: 6, value: "FAQ's", sectionId: 'faq-section' },
        { id: 7, value: 'Contact', sectionId: 'contact-section' },
        {id: 8, value: '', sectionId: 'dashboard-section'}
    ];

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        const interval = setInterval(() => {
            dispatch(checkAlreadyConnectedMetaMask(state?.connection));
        }, 3000);
      
        return () => {
            clearInterval(interval);
        };
    }, []);

    const listenToScroll = () => {
        let i = 0;

        if (window.pageYOffset > 118) {
            i = i + 1;
            if (i === 1) {
                setScroll(true);
            }
        } else {
            setScroll(false);
        }
    }
    const checkLaunching = () => {
        const now = new Date().getTime();
        const lTime = (1651216958*1000) - now;
        const eTime = (1702252799*1000) - now;
        setLaunchTime(lTime);
        setEndTime(eTime);
        console.log('In checking launching');
        // if(lTime > 0){
        //     alert('Please wait for launching date');
        // }else if (eTime < 0){
        //     alert('ICO ends, You cannot buy Tokens');
        // }else{
        //     <Redirect to={`/${Routes.connect}`} />
        // }
        
      }
      
    return (

        <Navbar collapseOnSelect expand="lg" className={`
            navbar navbar-expand-lg navbar-light fixed-top paragraph-font padding-topbar
            ${(scroll || showMenu) ? 'bg-white' : ''}
        `}>

            <NavLink to={`/${Routes.main}`}>
                <Avatar medium src={Images.logo} />
            </NavLink>

            <Navbar.Toggle className={` ${scroll ? 'bg-yellow' : 'bg-whiteSmoke'} border-0`}
                onClick={() => setShowMenu(!showMenu)} />

            <Navbar.Collapse>
                <Nav className="navbar-nav ml-auto">

                    {
                        data.map((link, i) => (
                            <Nav.Item
                                onClick={() => link.id === 8 ? '' : clickLink({ value: link.value.toLowerCase(), sectionId: link.sectionId })}
                                className={` nav-item p-0 nav-links paragraph-font
                                    ${(currentState.toLowerCase() === link.value.toLowerCase()) ? 'gradient-apply' : 'inactive-link'} `}
                                key={i}
                            >

                                <span className={(scroll || showMenu) ? 'text-black font-weight-bold' : 'text-white'}>
                                    {link.sectionId === 'dashboard-section' && clientAddress === state?.address[0] ? <Link to={`/${Routes.dashboard}`}><span style={{color: '#F98A07', fontWeight: 'bold', marginRight: '20px'}}>Dashboard</span></Link> : link.value}
                                </span>

                            </Nav.Item>
                        ))
                    }

                    <button className="connect-wallet pb-0 gradient-apply border-0 connect-meta-mask paragraph-font"
                       
                        onClick={connectToMetaMask}
                        style={{color: 'white', fontWeight: 'bold', letterSpacing: '1px'}}
                    >
                        {
                            !state?.connection ? <>Connect Wallet <BiChevronDown className="ml-1 font-18px" /></>
                                : <div className="app-flex-row align-items-center text-white justify-content-center p-0">

                                    <div className="app-flex-column bg-lightPrimary align-items-center justify-content-center font-14px rounded-circle heading-font"
                                        style={{ width: '32px', height: '32px' }}>
                                        U
                                    </div>

                                    <span className="font-14px ml-2 heading-font"> {state?.address[0]?.substr(0, 10)} </span>

                                </div>
                        }

                    </button>

                    {
                        state?.connection &&
                        <NavLink exact to={ `/${Routes.connect}` } className={`connect-wallet gradient-apply pb-0 w-auto pl-4 pr-3 margin-buy-btn paragraph-font
                          ${(scroll || showMenu) ? 'inactive-link-dark' : 'inactive-link'} `}>

                            BUY <BiChevronDown className="ml-1 font-18px" />

                        </NavLink>
                    }

                </Nav>
            </Navbar.Collapse>

        </Navbar>

    );

}

export default Topbar;