import React, { useState, useRef, useEffect } from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import { Images } from '../../Assets/Images';
import HeaderSection from './HeaderSection/HeaderSection';
import AboutSection from './AboutSection/AboutSection';
import FeatureSection from './Features/Features';
import TokenSaleSection from './TokenSale/TokenSale';
import RoadMapSection from './RoadMap/RoadMap';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';

const Main = () => {

    const [currentState, setCurrentState] = useState('home');

    const sections = [
        { id: 1, component: <HeaderSection />, className: 'main-container', 
            componentState: '', sectionId: 'home-section' },

        { id: 2, component: <AboutSection />, className: 'main-container', 
            componentState: 'about', sectionId: 'about-section' },

        { id: 3, component: <FeatureSection />, className: 'main-container bg-primary pt-5 position-relative', 
            componentState: 'faqs', sectionId: 'features-section' },

        { id: 4, component: <TokenSaleSection />, className: 'main-container pt-0 token-section-container', 
            componentState: 'token', sectionId: 'token-section' },

        { id: 5, component: <RoadMapSection />, className: 'main-container pt-0 bg-primary', 
            componentState: 'roadmap', sectionId: 'roadmap-section' },

        { id: 6, component: <ContactSection />, className: 'main-container pt-0 bg-lightPrimary', 
            componentState: 'team', sectionId: '' },

        { id: 7, component: <Footer />, className: 'main-container pt-0 bg-primary', 
            componentState: 'footer', sectionId: 'faq-section' }
    ];

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            setCurrentState('home');
        }

    }, []);

    const goToSection = (sectionRef) => {
        document.getElementById(sectionRef).scrollIntoView({ behavior: 'smooth' });
        console.log(document.getElementById(sectionRef).offsetTop);
    }

    const onScroll = (e) => {
        console.log(e);
        console.log(window.pageYOffset);
    }

    return(

        <div className="app-flex-column w-100 bg-secondary position-relative">
            
            <img alt="" src={Images.bgHeader} className="header-bg-img" />
            
            <Topbar 
                currentState={currentState} 
                clickLink={({ value, sectionId }) => {
                    setCurrentState(value);
                    goToSection(sectionId);
                }}
            />

            <div className="app-flex-column w-100 text-white" 
            > 

                {
                    sections.map((section, i) => (
                        i === 1 ? 
                        <div className="about-section-container" key={i}>
                            <div className={section.className}
                                id={section?.sectionId}
                                name={section?.sectionId}
                            >
                                { section.component }                 
                            </div>
                        </div>
                        :
                        <div key={i} className={section.className} 
                            id={section?.sectionId}
                            name={section?.sectionId}
                        >
                            { 
                                i === 2 && 
                                <img alt="" src={Images.circleSide} className="position-absolute w-50 h-50" 
                                style={{ left: '-30%', top: '20%', zIndex: 10 }} />
                            }
                            { section.component }
                        </div>
                    ))
                }

            </div>

        </div>

    );

}

export default Main;