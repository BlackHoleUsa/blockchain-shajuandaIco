import React, { useState } from 'react';
import './ContactSection.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';
import { questions, teamMembers } from '../../../Assets/Data';
import CustomAccordian from '../../../components/Accordian/Accordian';

const ContactSection = (props) => {

    const arr = [1, 2];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return(

        <div className="app-flex-column w-100 py-5 text-white text-center justify-content-center align-items-center contact-section">
            
            <h6 className="font-36px mb-2">Frequently Asked Question</h6>
            <p className="font-16px">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>
            <Row className="mx-0 mt-5 p-0 w-100">

                <Col xs={12} sm={12} md={6} lg={7} xl={{ span: 6, offset: 1 }}>
                    
                    {
                        questions.map((ques, i) => (
                            <CustomAccordian key={i} heading={ques.question} text={ques.ans} />
                        ))
                    }

                </Col>

                <Col xs={12} sm={12} md={6} lg={5} xl={{ span: 4, offset: 1 }}>
                    <img alt="" src={Images.logoLarge} width="100%" />
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

                <button className="gradient-apply connect-wallet border-0 mt-3 mb-5">
                    Submit
                </button>
            </div>

            
        </div>

    );

}

export default ContactSection;