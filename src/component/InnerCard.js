import React, {Children, useState} from 'react';
import style from './componentCss/InnerCard.module.css';

function InnerCard({children}) {
    
    



    // `${flip ? ShowImg : imgSrc}`

  return (

    <div className={ style.container}> 
            <div className={ style.container__imgOrVideo_container}>
                    {children}
            </div>
    </div> 



  );
}

export default InnerCard;
