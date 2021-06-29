import React from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import { Images } from '../../Assets/Images';
import HeaderSection from './HeaderSection/HeaderSection';
import AboutSection from './AboutSection/AboutSection';
import FeatureSection from './Features/Features';
import TokenSaleSection from './TokenSale/TokenSale';
import RoadMapSection from './RoadMap/RoadMap';
import ContactSection from './ContactSection/ContactSection';

const Main = () => {

    return(

        <div className="app-flex-column w-100 bg-secondary position-relative">
            
            {/* <img alt="" src={Images.bgHeader} className="header-bg-img" /> */}
            
            <Topbar />

            <div className="app-flex-column w-100 text-white" 
            > 
                <div className="main-container">
                    <HeaderSection />
                </div>

                <div className="about-section-container">
                    <div className="main-container">
                        <AboutSection />                    
                    </div>
                </div>

                <div className="main-container bg-primary pt-5 position-relative">
                    <img alt="" src={Images.circleSide} className="position-absolute w-50 h-50" 
                    style={{ left: '-30%', top: '20%', zIndex: 10 }} />
                    <FeatureSection />
                </div>

                <div className="main-container pt-0 token-section-container">
                    <TokenSaleSection />
                </div>

                <div className="main-container pt-0 bg-primary">
                    <RoadMapSection />
                </div>

                <div className="main-container pt-0 bg-lightPrimary">
                    <ContactSection />
                </div>

            </div>

        </div>

    );

}

export default Main;