import React from 'react';
import './Footer.css';
import { GrFacebookOption, GrTwitter, AiOutlineInstagram } from 'react-icons/all';

const SocialMedia = () => {

    const iconClass = "text-white font-28px cursor-pointer-sort"

    return(

        <div className="social-media text-white">
            <div className="w-100 app-flex-row align-items-center justify-content-around">
                <div className="font-23px w-50 text-center">Follow Us</div>
                <div className="app-flex-row align-items-center justify-content-center w-50 text-center">
                    <GrFacebookOption className={`${iconClass} mr-4`} />
                    <GrTwitter className={`${iconClass} mr-4`} />
                    <AiOutlineInstagram className={iconClass} />
                </div>
            </div>
        </div>

    );

}

export default SocialMedia;