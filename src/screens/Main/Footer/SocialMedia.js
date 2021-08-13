import React from 'react';
import './Footer.css';
import { GrFacebookOption, GrTwitter, AiOutlineInstagram } from 'react-icons/all';

const SocialMedia = () => {

    const iconClass = "text-white font-28px cursor-pointer-sort"

    const goToLink = (link) => {
        window.open(link, '_blank').focus();
    }

    return(

        <div className="social-media text-white">
            <div className="w-100 app-flex-row align-items-center justify-content-around">
                <div className="font-23px w-50 text-center heading-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>Follow Us</div>

                <div className="app-flex-row align-items-center justify-content-center w-50 text-center">

                    <GrFacebookOption className={`${iconClass} mr-4`} 
                     onClick={() => goToLink('https://facebook.com')} />

                    <GrTwitter className={`${iconClass} mr-4`} 
                     onClick={() => goToLink('https://twitter.com/Sa_Ra_Token')} />

                    <AiOutlineInstagram className={iconClass} 
                    onClick={() => goToLink('https://www.instagram.com/sa_ratoken/')} />

                </div>
            </div>
        </div>

    );

}

export default SocialMedia;