import React, { useState, useEffect } from 'react';
import './HeaderSection.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';

const HeaderSection = (props) => {
    
    const [day, setDay] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {

        let days, minutes, seconds;

        // Get today's date and time
        const countDownDate = new Date("Dec 30, 2021 15:37:25").getTime();
        const timer = setInterval(() => {

            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;
            
            // Time calculations for days, month, minutes and seconds
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setSec(seconds);
            setMin(minutes);
            setDay(days);

            if (distance < 0) {
                clearInterval(timer);
            }
            
        }, 1000);

    }, []);

    const data = [
        { time: (new Date("Dec 30, 2021 15:37:25").getMonth()+1) - (new Date().getMonth()+1), value: 'Month' },
        { time: day, value: 'Day' },
        { time: min, value: 'Minute' },
        { time: sec, value: 'Seconds' }
    ];

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

    );

}
 
export default HeaderSection;