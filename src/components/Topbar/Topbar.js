import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { NavLink } from 'react-router-dom';
import { Images } from '../../Assets/Images';
import { Routes } from '../../Routes/Routes';
import { Avatar } from '../Avatar/Avatar';
import { BiChevronDown } from 'react-icons/bi';
import { Nav, Navbar} from 'react-bootstrap';


const Topbar = (props) => {
    
    const [ scroll, setScroll ] = useState(false);

    const data = [
        { id: 1, value: 'Home' },
        { id: 2, value: 'About' },
        { id: 3, value: 'Team' },
        { id: 4, value: 'Token' },
        { id: 5, value: 'Roadmap' },
        { id: 6, value: 'FAQs' },
        { id: 7, value: 'Contact' }
    ];

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, []);

    const listenToScroll = () => {
        let i = 0;

        if(window.pageYOffset > 118){
            i = i+1;
            if(i === 1){
                setScroll(true);
            }
        } else{
            setScroll(false);
        }
    }

    return(

        <Navbar collapseOnSelect expand="lg" className={`
            navbar navbar-expand-lg navbar-light fixed-top padding-topbar
            ${ scroll ? 'bg-whiteSmoke' : '' }
        `}>
        
            <NavLink to={`/${Routes.main}`}>
                <Avatar medium src={Images.logo} />
            </NavLink>
        
            <Navbar.Toggle className="bg-yellow border-0" />

            <Navbar.Collapse>
                <Nav className="navbar-nav ml-auto">

                    {
                        data.map((link, i) => (
                            <Nav.Item 
                                className={` nav-item p-0 nav-links ${ (i === 0) ? 'gradient-apply' : 'inactive-link' } `} 
                                key={i}>
                                <Nav.Link eventKey={link.id} as={NavLink} to="" 
                                className={ scroll ? 'text-black font-weight-bold' : 'text-white' }>
                                { link.value }
                                </Nav.Link>
                            </Nav.Item>
                        ))
                    }

                    <NavLink exact to={`/${Routes.connect}`} className={`connect-wallet pb-1 
                        ${ scroll ? 'inactive-link-dark' : 'inactive-link' } `} 
                        activeClassName="gradient-apply pt-1">
                        
                        Connect Wallet <BiChevronDown className="ml-1" style={{ fontSize: '18px' }} />
                    
                    </NavLink>

                </Nav>
            </Navbar.Collapse>

        </Navbar>

    );

}
 
export default Topbar;