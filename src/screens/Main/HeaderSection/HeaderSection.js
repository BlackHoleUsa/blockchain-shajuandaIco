import React, { useState, useEffect } from 'react';
import "@fontsource/oswald";
import './HeaderSection.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';
import { goToSection } from '../../../utilities/CommonMethods';

const HeaderSection = (props) => {
    
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {

        let days, minutes, seconds;

        // Get today's date and time
        const countDownDate = new Date("Aug 6, 2022 15:37:25").getTime();
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
            setHour(days * 24);
            setDay(days);

            if (distance < 0) {
                clearInterval(timer);
            }
            
        }, 1000);

        return () => {
            setSec(seconds);
            setMin(minutes);
            setHour(days * 24);
            setDay(days);
        };

    }, []);

    const data = [
        { time: day, value: 'Days' },
        { time: hour, value: 'Hours' },
        { time: min, value: 'Minutes' },
        { time: sec, value: 'Seconds' }
    ];

    const started = () => {
        goToSection('about-section', false);
    }

    return(

        <Row className="m-0 p-0">

            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="m-0 p-0">

                <div className="app-flex-column header-left-section pr-2 pt-4">

                    <h6 className="paragraph-font">With every Sunrise, invest wise with Cryptocurrency.</h6> <br />
                    <p className="heading-font">Our token, SA RA, will give investors the opportunity to acquire and accumulate wealth through digital finance. For years, financial companies have kept ordinary people from building wealth for their communities. A bank loan aims to establish responsibility, not an investment.</p>
                    <br />
                    
                    <button className="gradient-apply border-0 paragraph-font cursor-pointer-sort" 
                        onClick={started}
                        style={{ width: '150px', height: '60px', fontSize: '25px', 
                        fontWeight: 'bold', letterSpacing: '1px', zIndex: 12 }}
                    >
                        Get Started
                    </button>
                    
                    <br />
                    <br />
                </div>

            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="m-0 p-0">
                <div className="h-100 w-100 app-flex-column justify-content-center align-items-center text-center header-right-section">
                    <BorderBox className="border-box h-auto">
                        <h6 className="pt-3 pb-2 paragraph-font" style={{fontWeight: 'bold', fontSize: '25px'}}>ICO Coin Start</h6>
                        <span className="paragraph-font">Discount 70% From The Final Price</span>
                        <div className="w-100 app-flex-row justify-content-between align-items-center px-4 flex-wrap" style={{ height: '190px' }}>

                            {
                                data?.map((time, i) => (
                                    <React.Fragment key={i}>
                                        <div className="app-flex-column">
                                            <div className="time-box paragraph-font">
                                                {time.time}
                                            </div>
                                            <div className="text-center py-3 paragraph-font" style={{ opacity: .35}}>
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