import React, { useState } from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';
import { footerLinks } from '../../../Assets/Data';
import SocialMedia from './SocialMedia';
import { validateEmail } from '../../../utilities/CommonMethods';

const Footer = (props) => {

    const [email, setEmail] = useState('');

    const goToLink = ({ link, value, id }) => {
        if(id > 5 && id < 9){
            props.gotoSection({ link, value });
        }
    }

    const submitEmail = () => {
        if(!email){
            alert('Please write your email.');
        } 
        else if(!validateEmail(email)){
            alert('Please enter your valid email.');
        } 
        else{
            const templateId = 'template_0k6bfgd';
        sendFeedback(templateId, { message_html: email, reply_to: email})
        }
    }
    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'service_o0cz1gk', templateId,
          variables
          ).then(res => {
            alert('Thanks for subscribing');
            setEmail('');
          })
          .catch(err => {
            console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
            alert('Something went wrong.');
          });
      }
    return(

        <div className="footer-container position-relative">
            
            <SocialMedia />

            <img alt="" src={Images.circleSideHalf} className="footer-circle-logo"/>

            <Row className="m-0 p-0">

                <Col xs={12} sm={6} md={5} lg={5} xl={5}>
                    <div className="w-100 app-flex-column">
                        <img alt="" src={Images.logo} width="130px" />
                        {/*<span className="font-18px my-3 heading-font" style={{marginRight: '10%'}}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium cia deserunt mollitia animi.
    </span>*/}
                        <span className="font-18px mt-4 heading-font">&copy; 2021 SARA ALL RIGHTS RESERVED.</span>
                    </div>
                </Col>

                

               {/*<Col xs={12} sm={6} md={6} lg={2} xl={2}>
                    <div className="w-100 app-flex-column mt-2">
                        <h6 className="font-20px mb-3 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>PRIVACY & TOS</h6>
                        { footerLinks.slice(0, 5).map((link, i) => (
                            <span className="font-20px mb-2 heading-font cursor-pointer-sort" 
                                key={i} onClick={() => goToLink(link)}
                            >{link?.text}</span>
                        )) }
                    </div>
                </Col>
                        */}

                <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                    <div className="w-100 app-flex-column mt-2">
                        <h6 className="font-20px mb-3 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>IMPORTANT LINK</h6>
                        { footerLinks.slice(5, 10).map((link, i) => (
                            <span className="font-20px mb-2 heading-font cursor-pointer-sort" 
                                key={i} onClick={() => goToLink(link)}
                            >{link?.text}</span>
                        )) }
                    </div>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="w-100 app-flex-column mt-2">
                        <h6 className="font-20px mb-3 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>SUBSCRIBE WITH US</h6>
                        <span className="font-18px mb-2 heading-font" style={{marginRight: '10%'}}>
                        You are invited to subscribe for the updates from our Team.
                        </span>
                        
                        <div className="footer-subscribe">
                            <input placeholder="Your Email..." value={email} onChange={(e) => setEmail(e.target.value)} 
                            className="footer-subscribe-input heading-font" style={{height: '60px', backgroundColor: 'darkGray', color: 'black', fontSize: '20px'}}/>

                            <button
                                onClick={submitEmail} 
                                className="ml-2 gradient-apply border-0 footer-subscribe-btn paragraph-font" style={{height: '60px', fontSize: '25px'}}>
                                Submit
                            </button>

                        </div>    

                    </div>
                </Col>

            </Row>

        </div>

    );

}
 
export default Footer;