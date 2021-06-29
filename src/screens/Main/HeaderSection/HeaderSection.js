import React from 'react';
import './HeaderSection.css';
import { Row, Col } from 'react-bootstrap'; 

const HeaderSection = (props) => {
    
    return(

        <Row className="m-0 p-0">

            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="m-0 p-0">

                <div className="app-flex-column header-left-section pr-2 pt-4">

                    <h6>With every Sunrise, invest wise with Cryptocurrency.</h6> <br />
                    <p>Our token, SA RA, will give investors the opportunity to acquire and accumulate wealth through digital finance.</p>
                    <br />
                    <button className="gradient-apply border-0">
                        Get Started
                    </button>
                    <br />
                    <br />
                </div>

            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="m-0 p-0">

            </Col>

        </Row>

    );

}
 
export default HeaderSection;