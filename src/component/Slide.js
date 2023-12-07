import React, { useState } from 'react';
import style from './componentCss/Slide.module.css'

const CardSlider = ({children}) => {
  const [position, setPosition] = useState(0);

  const handleNext = () => {
    setPosition(position - 100); // 예시로 100px씩 이동하도록 설정
  };

  return (
    <div className={style.container}>
      <div className={style.container__card_slider} style={{ transform: `translateX(${position}px)` }}>
        {children}
      </div>
      <button onClick={handleNext}>다음</button>
    </div>
  );
};

export default CardSlider;
