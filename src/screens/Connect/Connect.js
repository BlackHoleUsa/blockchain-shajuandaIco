import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import { Images } from '../../Assets/Images';
import CustomModal from '../../components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../Routes/Routes';

const Connect = (props) => {
    
    const [ showModal, setShowModal ] = useState(false);
    
    const history = useHistory();
    
    useEffect(() => {
        setShowModal(true);        
        return () => {
            setShowModal(false);
        }

    }, [])

    return(
    
        <div className="app-flex-column w-100 h-100 bg-secondary position-relative">
            <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-35%', top: '-20%' }} />
            <img alt="" src={Images.bgHeader} className="position-absolute w-50 h-100"
            style={{ left: '-18%' }} />
            
            <Topbar 
                currentState={''} 
                clickLink={({ value, sectionId }) => {
                    console.log(value);
                }} 
            />

            

            <CustomModal show={showModal} handleClose={() => {
                setShowModal(false);
                history.replace(`/${Routes.main}`)
            }} />

        </div>

    );

}
 
export default Connect;