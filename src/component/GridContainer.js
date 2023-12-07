import React, {useState } from 'react';
import style from './componentCss/GridContainer.module.css';

function GridContainer({children}) {
    
    



  return (

    <div className={ style.container}> 
    {children}
    </div> 



  );
}

export default GridContainer;