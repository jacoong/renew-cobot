import React, {useState } from 'react';
import style from './componentCss/ZigZagContainer.module.css';
function ZigZagContainer({children}) {
    
    



  return (

    <div className={ style.container}> 

    <div className={ style.container__first}>
    {children[0]}
    </div>

    <div className={ style.container__second}>
    {children[1]}
    </div>
    </div> 



  );
}

export default ZigZagContainer;