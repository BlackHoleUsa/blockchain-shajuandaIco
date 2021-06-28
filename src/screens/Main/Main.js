import React from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import { Images } from '../../Assets/Images';

const Main = () => {

    return(

        <div className="app-flex-column w-100 h-100 bg-primary position-relative">
            
            <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-35%', top: '-20%' }} />
            
            <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-18%' }} />
            
            <Topbar />

        </div>

    );

}

export default Main;