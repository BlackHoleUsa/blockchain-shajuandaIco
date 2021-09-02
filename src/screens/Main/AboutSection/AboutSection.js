import React from 'react';
import './AboutSection.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';
import { Images } from '../../../Assets/Images';

const AboutSection = (props) => {

    return(

        <div className="w-100 app-flex-column pb-4 mt-5">

            <Row className="mx-0 p-0">

                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="m-0 p-0">
                    <img alt="" src={Images.aboutImage} className="about-image" />
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="p-0 m-0">
                    <div className="h-100 w-100 app-flex-column justify-content-center align-items-center 
                        text-left about-right-section">
                        <BorderBox className="border-box-about" adjust={true}>
                            <h6 className="pl-3 pb-3 pt-3 font-36px paragraph-font">About Block Chain Expert Solution</h6>
                            <span className="w-100 pl-3 text-justify heading-font">
                            Our company is willing to give all people in the universe to have a chance to access financial assistance that will enable them to acquire wealth. Through the rich blockchaim technology and cryptocurrency, our investors will have chances of accessing digital finances which will help them to invest and build an enabling economy to all people. We are committed to ensure that individuals have gained their financial freedom which is not provided by the traditional financial systems rather, through the current digital financing.
                            </span>
                            {/*<button className="ml-3 gradient-apply border-0 connect-wallet text-white mt-3 paragraph-font" >
                                Know About Ourself
                            </button>
    */}
                        </BorderBox>
                    </div>
                </Col>

            </Row>

        </div>

    );

}
 
export default AboutSection;