import React, { useState } from 'react';
import style from './componentCss/WhiteSpaceWIthBorder.module.css'

const WhiteSpaceWIthBorder = ({}) => {


  return (
    <div className={style.container}>
    <div className={`${style.container__inner__up} ${style.container__inner__down}`}>
    <div className={`${style.container__inner__inner}`}>

    </div>
    </div>
    </div>

  );
};

export default WhiteSpaceWIthBorder;
