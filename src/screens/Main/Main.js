import React from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import { Images } from '../../Assets/Images';
import HeaderSection from './HeaderSection/HeaderSection';
import AboutSection from './AboutSection/AboutSection';

const Main = () => {

    return(

        <div className="app-flex-column w-100 bg-secondary position-relative">
            
            <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-25%', top: '-20%', zIndex: 10 }} />
            
            {/* <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-18%' }} /> */}
            
            <Topbar />

            <div className="app-flex-column w-100 bg-secondary text-white" 
            > 
                <div className="main-container">
                    <HeaderSection />
                </div>

                <div className="about-section-container">
                    <div className="main-container">
                        <AboutSection />
                    </div>
                </div>

            </div>

        </div>

    );

}

export default Main;