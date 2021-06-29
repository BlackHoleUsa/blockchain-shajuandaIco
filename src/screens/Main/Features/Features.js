import React from 'react';
import './Features.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';
import { Images } from '../../../Assets/Images';
import { featureData } from '../../../Assets/Data';

const FeatureSection = (props) => {

    return(

        <Row className="mx-0 mt-5 pb-4 px-0">

            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 p-0">
                
                <div className="w-100 pt-2 app-flex-column align-items-center justify-content-center exchange-section text-white">

                    <h6 className="font-28px mb-5">Coin Exchange Rates</h6>

                    <BorderBox className="border-box-exchange" feature>
 
                    </BorderBox>

                </div>

                <div className="w-100 app-flex-column align-items-center justify-content-center feature-section text-white">

                    <h6 className="font-28px mb-1">Features</h6>
                    <p className="font-16px">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <Row className="mx-0 mt-5 p-0">
                        {
                            featureData.map((data, i) => (
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                                    <div className="w-100 app-flex-column px-4 mb-4 align-items-center text-center justify-content-center" 
                                    style={{ height: '380px', border: '3px solid black' }}>
                                        <img alt="" width="80px" src={data.image} />
                                        <h6 className="font-20px pt-4 pb-2">{data.heading}</h6>
                                        <p className="font-16px">{data.text}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>

                </div>

            </Col>

        </Row>

    );

}
 
export default FeatureSection;