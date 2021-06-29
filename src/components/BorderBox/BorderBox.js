import React from 'react';

const BorderBox = ({ children, className }) => {
    
    return(

        <div className={`p-2 ${className}`} style={{ 
            border: '3px solid #0E0E0E'
        }}>

            <div className="rounded bg-primary app-flex-column">
                { children }
            </div>

        </div>

    );

}
 
export default BorderBox;