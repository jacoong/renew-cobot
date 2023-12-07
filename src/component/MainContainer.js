import React, {useState} from 'react';
import style from './componentCss/MainContainer.module.css';



function MainContainer ({children}) {
    
    
  return (
    <div className={style.container}>  
    {children}
    </div> 
  );
}

export default MainContainer;