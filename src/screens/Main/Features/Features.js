import React, { useEffect, useState } from 'react';
import './Features.css';
import { Row, Col, Spinner } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';
import { Images } from '../../../Assets/Images';
import { featureData } from '../../../Assets/Data';
import {getCoinsRates} from '../../../redux/thunk/thunk';

const FeatureSection = (props) => {

    const [loading, setLoading] = useState(true);

    const [rates, setRates] = useState(
        [
            { coin: 'USD', rate: 283.55 },
            { coin: 'EUR', rate: 244.89 },
            { coin: 'GBP', rate: 221.03 },
            { coin: '%1h', rate: 283.55 },
            { coin: '%24h', rate: 283.55 },
            { coin: '%7d', rate: -3.55 }
        ]
    );

    useEffect(() => {
        
        const interval = setInterval(() => {
            getLiveCoinPrice();
        }, 3000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    const getLiveCoinPrice = () => {

        getCoinsRates((res) => {
            const { status, data } = res;

            if(status){
                const { USD, EUR, GBP } = data;

                rates[0]['rate'] = USD.PRICE;
                rates[1]['rate'] = EUR.PRICE;
                rates[2]['rate'] = GBP.PRICE;
                rates[3]['rate'] = parseFloat(USD.CHANGEPCTHOUR).toFixed(2);
                rates[4]['rate'] = parseFloat(EUR.CHANGEPCT24HOUR).toFixed(2);
                rates[5]['rate'] = (parseFloat(GBP.CHANGEPCTDAY) * 7).toFixed(2);
    
                setRates(rates);
                setLoading(false);

            } else{
                setLoading(false);
                setRates(rates);
            }
        });

    }

    return(

        <Row className="mx-0 pb-4 px-0">

            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 p-0">
                
                <div className="w-100 app-flex-column align-items-center justify-content-center exchange-section text-white" style={{marginTop: '100px'}}>

                    <h6 className="font-28px mb-5 paragraph-font" style={{fontWeight: 'bold'}}>Coin Exchange Rates</h6>

                    <BorderBox className="border-box-exchange" feature={true}>
                        <div className="w-100 app-flex-column align-items-center justify-content-center pb-3 pt-4 border-box-exchange-inner">
                            <div className="w-100 app-flex-row align-items-center justify-content-center">
                                <img alt="" src={Images.ctn} />
                                <h6 className="font-30px ml-3 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>Ethereum (ETH)</h6>
                            </div>
                            <Row className="mx-0 mt-2 p-0">
                                {
                                    loading ? <Spinner border="white" animation="border" size="md" className="mt-4" /> :
                                    rates.length ? rates.map((data, i) => (
                                        <React.Fragment key={i}>
                                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                                <div className="w-100 app-flex-column px-4 mb-4 align-items-center text-center justify-content-center" 
                                                >
                                                    <h6 className="font-28px pt-4 pb-2 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>{data.coin}</h6>
                                                    <p className="font-16px paragraph-font" >{data.rate}</p>
                                                </div>
                                            </Col>
                                            { i === 2 && <Col xs={12}>
                                                <div style={{ height: '1px' }} className="bg-black mx-4 "></div>
                                            </Col> }
                                        </React.Fragment>
                                    )) : null
                                }
                                </Row>
                        </div>
                    </BorderBox>

                </div>

                <div className="w-100 app-flex-column align-items-center justify-content-center feature-section text-white" style={{marginTop: '100px'}}>

                    <h6 className="font-36px mb-1 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>Features</h6>
                    <p className="font-20px d-block text-center features-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <Row className="mx-0 mt-5 p-0">
                        {
                            featureData.map((data, i) => (
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                                    <div className="w-100 app-flex-column px-4 mb-4 align-items-center text-center justify-content-center" 
                                    style={{ height: '380px', border: '3px solid black' }}>
                                        <img alt="" width="80px" src={data.image} />
                                        <h6 className="font-28px pt-4 pb-2 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>{data.heading}</h6>
                                        <p className="font-16px heading-font" style={{marginLeft: '5%', marginRight: '5%'}}>{data.text}</p>
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