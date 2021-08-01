import React from 'react';
import './TokenSale.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';

const TokenSaleSection = (props) => {

    const arr = [1, 2];

    return(

        <div className="app-flex-column w-100 py-5 text-white justify-content-center align-items-center token-section">
            
            <h6 className="font-28px mb-1 heading-font">Token Sale</h6>
            <p className="font-16px d-block text-center paragraph-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            {
                arr?.map((allocate, i) => (
                    <React.Fragment key={i}>
                        <h6 className={`font-28px my-5 pt-2 text-uppercase heading-font`}>
                            { i === 0 ? 'token' : 'funds' } ALLOCATION
                        </h6>
                        <div className="evenly-content">
                            <GetContentText left={true} />
                            <GetContentText left={false} />
                        </div>

                        <div className="evenly-content">
                            <GetContentText left={true} />
                            <img alt="" src={Images.shapeLogo} className="evenly-content-img" />
                            <GetContentText left={false} />
                        </div>
                    </React.Fragment>
                ))
            }

        </div>

    );

}
 
const GetContentText = ({ left }) => {
    return <div className={`app-flex-column text-white pb-4 ${ left ? 'justify-content-start align-items-end' : 
    'justify-content-end align-items-start' } `}>
        <span className="mb-2 font-16px heading-font">Title one</span>
        <span className="font-14px text-justify get-content-text paragraph-font">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu
        </span>
    </div>
}

export default TokenSaleSection;