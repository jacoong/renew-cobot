import React, { useState } from 'react';
import style from './componentCss/Slidebar.module.css'
import { HiArrowDown } from "react-icons/hi2";

const Slidebar = ({children,value}) => {




  return (
    <div className={style.container}>
      <div className={style.container__introducebar}>
        <HiArrowDown></HiArrowDown>
        <div className={style.container__introducebar__title}>
          <p>{value}</p>
        </div>
      </div>
      <div className={style.container__card_slider} >
        {children}
      </div>
    </div>
  );
};

export default Slidebar;
