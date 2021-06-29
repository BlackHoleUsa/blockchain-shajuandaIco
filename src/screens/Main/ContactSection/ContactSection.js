import React, { useState } from 'react';
import './ContactSection.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';
import { teamMembers } from '../../../Assets/Data';

const ContactSection = (props) => {

    const arr = [1, 2];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return(

        <div className="app-flex-column w-100 py-5 text-white justify-content-center align-items-center contact-section">
            
            <h6 className="font-36px mb-2">Frequently Asked Question</h6>
            <p className="font-16px">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>
            <Row className="mx-0 mt-5 p-0">

                <Col xs={12} sm={12} md={6} lg={7} xl={7}>
                    d
                </Col>

                <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                    <img alt="" src={Images.logoLarge} />
                </Col>

            </Row>

            <div className="info">
                <h6 className="font-36px mb-2 mt-5 pt-5">We Are Happy To Answer Any Question You Have For Us</h6>
                <p className="font-16px mb-4">
                    Simply fill up the Foam below we will Contact you.
                </p>

                <input placeholder="Name" value={name} className="info-field mt-4" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Email" value={email} className="info-field" onChange={(e) => setEmail(e.target.value)} />
                <textarea 
                 placeholder="Message" value={msg} className="info-field" onChange={(e) => setMsg(e.target.value)}>
                </textarea>

                <button className="gradient-apply connect-wallet border-0 mt-3">
                    Submit
                </button>
            </div>

            
        </div>

    );

}

export default ContactSection;