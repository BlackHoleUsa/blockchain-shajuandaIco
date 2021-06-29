import React from 'react';

const BorderBox = ({ children, className, adjust, feature }) => {
    
    return(

        <div className={`${ !adjust ? 'p-2' : ''  } ${className}`} style={{ 
            border: !adjust ? '3px solid #0E0E0E' : 'none'
        }}>

            <div className={`rounded app-flex-column ${ feature ? 'bg-secondary' : 'bg-primary' } `}>
                { children }
            </div>

        </div>

    );

}
 
export default BorderBox;