import React from 'react';
import './AboutSection.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';
import { Images } from '../../../Assets/Images';

const AboutSection = (props) => {
    
    const data = [
        { time: 12, value: 'Month' },
        { time: 22, value: 'Day' },
        { time: 32, value: 'Minute' },
        { time: 42, value: 'Seconds' }
    ];

    return(

        <div className="w-100 app-flex-column">

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
                    <div className="h-100 w-100 app-flex-column justify-content-center align-items-center text-center header-right-section">
                        <BorderBox className="border-box">
                            <h6 className="pt-3 pb-2">ICO Coin Start</h6>
                            <span>Discount 70% From The Final Price</span>
                            <div className="w-100 app-flex-row justify-content-between align-items-center px-4 flex-wrap" style={{ height: '190px' }}>

                                {
                                    data?.map((time, i) => (
                                        <React.Fragment key={i}>
                                            <div className="app-flex-column">
                                                <div className="time-box">
                                                    {time.time}
                                                </div>
                                                <div className="text-center py-3" style={{ opacity: .35 }}>
                                                    {time.value}
                                                </div>
                                            </div>                                        
                                        </React.Fragment>
                                    ))
                                }

                            </div>
                        </BorderBox>
                    </div>
                </Col>

            </Row>

        </div>

    );

}
 
export default AboutSection;