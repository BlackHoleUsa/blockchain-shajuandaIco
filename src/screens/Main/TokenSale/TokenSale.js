import React from 'react';
import './TokenSale.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';

const TokenSaleSection = (props) => {

    const arr = [1];

    return(

        <div className="app-flex-column w-100 py-5 text-white justify-content-center align-items-center token-section" style={{marginTop: '100px'}}>
            
            <h6 className="font-36px mb-1 paragraph-font" style={{fontWeight: 'bold'}}>Token Sale</h6>
            <p className="font-20px d-block text-center heading-font" style={{marginTop: '1%'}}>Token distribution accounts for every ‘in and out’ flow of tokens in the system.</p>

            {
                arr?.map((allocate, i) => (
                    <React.Fragment key={i}>
                        <h6 className={`font-28px my-5 pt-2 text-uppercase paragraph-font`}>
                            { i === 0 ? 'token' : 'funds' } ALLOCATION
                        </h6>
                        <spam className="left-sec">
                           <h3>35% Sa Ra</h3>
                           <h3>5% Investors</h3>
                           <h3>5% Developers</h3>
                        </spam>
                        <div className="evenly-content token-allocation">
                            <img alt="" src={Images.tokenAllocation} className="evenly-content-img" />
                            
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
        <span className="mb-2 font-20px heading-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>Title one</span>
        <span className="font-18px get-content-text heading-font" style={{opacity: '.6'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu
        </span>
    </div>
}

export default TokenSaleSection;