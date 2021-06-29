import React from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';
import { footerLinks } from '../../../Assets/Data';
import SocialMedia from './SocialMedia';

const Footer = (props) => {

    return(

        <div className="footer-container position-relative">
            
            <SocialMedia />

            <img alt="" src={Images.circleSideHalf} className="footer-circle-logo" />

            <Row className="m-0 p-0">

                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                    <div className="w-100 app-flex-column">
                        <img alt="" src={Images.logo} width="112px" />
                        <span className="font-16px my-3">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium cia deserunt mollitia animi.
                        </span>
                        <span className="font-14px mt-4">&copy; 2021 SARA ALL RIGHT RESERVED.</span>
                    </div>
                </Col>

                

                <Col xs={12} sm={6} md={6} lg={2} xl={2}>
                    <div className="w-100 app-flex-column mt-2">
                        <h6 className="font-20px mb-3">PRIVACY & TOS</h6>
                        { footerLinks.slice(0, 5).map((link, i) => (
                            <span className="font-16px mb-2" key={i}>{link}</span>
                        )) }
                    </div>
                </Col>

                <Col xs={12} sm={6} md={6} lg={2} xl={2}>
                    <div className="w-100 app-flex-column mt-2">
                        <h6 className="font-20px mb-3">IMPORTANT LINK</h6>
                        { footerLinks.slice(5, 10).map((link, i) => (
                            <span className="font-16px mb-2" key={i}>{link}</span>
                        )) }
                    </div>
                </Col>

                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                    <div className="w-100 app-flex-column mt-2">
                        <h6 className="font-20px mb-3">SUBSCRIB WITH US</h6>
                        <span className="font-16px mb-2">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                        </span>

                    </div>
                </Col>

            </Row>

        </div>

    );

}
 
export default Footer;