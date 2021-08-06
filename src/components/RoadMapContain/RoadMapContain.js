import React from 'react';
import './RoadMapContain.css';

import { FlexRow } from '../FlexRow/FlexRow';

const RoadMapContain = () => {

    const timings = ['Jan 2018', 'Feb 2018', 'March 2018', 'April 2018', 'May 2018'];

    const launch = ['Planning', 'ICO Launch', 'Token Sell', 'Token Start', 'Token Live'];

    return(

        <div className="road-map-contain app-flex-column w-100" style={{marginBottom: '100px'}}>
            
            <FlexRow className="justify-content-around padding-flex-row flex-align-headings heading-font">
                { 
                    timings.map((str, i) => (
                        <span key={i} className="font-18px text-roadMap mb-2">
                            {str}
                        </span>
                    ))
                }
            </FlexRow>

            <FlexRow className="justify-content-around padding-flex-row flex-align-headings heading-font">
                { 
                    launch.map((str, i) => (
                        <span key={i} className="font-20px text-white font-weight-bold">
                            {str}
                        </span>
                    ))
                }
            </FlexRow>

            <FlexRow className="padding-line bg-roadMap rounded my-5">
            </FlexRow>

            <FlexRow className="justify-content-around padding-flex-row d-lg-flex d-xl-flex d-md-flex d-sm-none remove-flex">
                { 
                    launch.map((str, i) => (
                        <span key={i} className="font-20px text-white text-center d-block text-road-map-margin heading-font"style={{marginLeft:'3%', marginRight:'3%'}} >
                            Lorem ipsum is simply dummy text of the printings.
                        </span>
                    ))
                }
            </FlexRow>

            <div className="w-100 app-flex-column show-flex">
                { 
                    launch.map((str, i) => (
                        <span key={i} className="font-18px text-white text-center d-block mb-2 heading-font">
                            Lorem ipsum is simply dummy text of the printings.
                        </span>
                    ))
                }
            </div>

        </div>

    );

}

export default RoadMapContain;