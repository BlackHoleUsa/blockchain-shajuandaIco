import React from 'react';
import './Dashboard.css';

import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {

    return(

        <div className="w-100 h-100 app-flex-row align-align-items-start justify-content-start">
            
            <Sidebar />

            <div className="w-100 h-100 bg-primary" style={{ padding: '30px 50px' }}>

                <div></div>

            </div>

        </div>

    );

}

export default Dashboard;