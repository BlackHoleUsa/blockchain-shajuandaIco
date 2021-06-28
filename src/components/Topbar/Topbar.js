import React from 'react';
import './Topbar.css';
import { NavLink } from 'react-router-dom';
import { Images } from '../../Assets/Images';
import { Routes } from '../../Routes/Routes';
import { Avatar } from '../Avatar/Avatar';
import { BiChevronDown, BsJustify } from 'react-icons/all';
import { Nav, Navbar} from 'react-bootstrap';


const Topbar = (props) => {
    
    const data = [
        { id: 1, value: 'Home' },
        { id: 2, value: 'About' },
        { id: 3, value: 'Team' },
        { id: 4, value: 'Token' },
        { id: 5, value: 'Roadmap' },
        { id: 6, value: 'FAQs' },
        { id: 7, value: 'Contact' }
    ];

    return(

        <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-light fixed-top padding-topbar">
        
            <NavLink to={`/${Routes.main}`}>
                <Avatar medium src={Images.logo} />
            </NavLink>
        
            <Navbar.Toggle className="bg-yellow border-0" />

            <Navbar.Collapse>
                <Nav className="navbar-nav ml-auto">

                    {
                        data.map((link, i) => (
                            <Nav.Item className={`nav-item p-0 nav-links ${ i === 0 ? 'gradient-apply' : 'inactive-link' }`} key={i}>
                                <Nav.Link eventKey={link.id} as={NavLink} to="" className="text-white">
                                { link.value }
                                </Nav.Link>
                            </Nav.Item>
                        ))
                    }

                    <NavLink exact to={`/${Routes.connect}`} className="connect-wallet inactive-link pb-1" 
                    activeClassName="gradient-apply pt-1">
                        Connect Wallet <BiChevronDown className="ml-1" style={{ fontSize: '18px' }} />
                    </NavLink>

                </Nav>
            </Navbar.Collapse>

        </Navbar>

    );

}
 
export default Topbar;