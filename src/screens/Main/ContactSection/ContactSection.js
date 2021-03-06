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

        <div className="app-flex-column w-100 py-5 text-white text-center justify-content-center align-items-center contact-section" style={{marginTop: '100px'}}>
            
            <h6 className="font-36px mb-2 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>Frequently Asked Question</h6>
            <p className="font-20px heading-font" style={{marginTop: '1%'}}>
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>
            <Row className="mx-0 mt-5 p-0 w-100">

                <Col xs={12} sm={12} md={6} lg={7} xl={{ span: 6, offset: 1 }} style={{marginTop: '3%'}}>
                    
                    {
                        questions.map((ques, i) => (
                            <CustomAccordian key={i} heading={ques.question} text={ques.ans} />
                        ))
                    }

                </Col>

                <Col xs={12} sm={12} md={6} lg={5} xl={{ span: 4, offset: 1 }}>
                    <img alt="" src={Images.logoLarge} width="80%"/>
                </Col>

            </Row>

            <div className="info"id="contact-section" style={{marginTop: '100px'}}>
                <h6 className="font-36px mb-2 mt-5 pt-5 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '2px'}}>We Are Happy To Answer Any Question You Have For Us</h6>
                <p className="font-20px mb-4 heading-font" style={{marginTop: '1%'}}>
                    Simply fill up the Foam below we will Contact you.
                </p>

                <input placeholder="Name" value={name} className="info-field mt-4 heading-font" onChange={(e) => setName(e.target.value)} style={{height: '70px', border: 'solid 5px rgb(20, 20, 20)', fontSize: '23px'}}/>
                <input placeholder="Email" value={email} className="info-field heading-font" onChange={(e) => setEmail(e.target.value)} style={{height: '70px', border: 'solid 5px rgb(20, 20, 20)', fontSize: '23px'}} />
                <textarea 
                 placeholder="Message" value={msg} className="info-field heading-font" onChange={(e) => setMsg(e.target.value)} style={{border: 'solid 5px rgb(20, 20, 20)', fontSize: '23px'}}>
                </textarea>

                <button className="gradient-apply connect-wallet border-0 mt-3 mb-5 paragraph-font" style={{width: '170px', height: '60px', fontSize: '25px', color: 'white'}}>
                    Submit
                </button>
            </div>

            
        </div>

    );

}

export default ContactSection;