import React from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import { Images } from '../../Assets/Images';
import HeaderSection from './HeaderSection/HeaderSection';

const Main = () => {

    return(

        <div className="app-flex-column w-100 bg-secondary position-relative">
            
            <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-35%', top: '-20%', zIndex: 10 }} />
            
            <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-18%' }} />
            
            <Topbar />

            <div className="app-flex-column w-100 bg-secondary text-white main-container"> 
                
                <HeaderSection />

            </div>

        </div>

    );

}

export default Main;