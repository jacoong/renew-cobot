import React, { useEffect, useRef } from 'react';
import style from './componentCss/ScrollUpComponent.module.css';
import { useInView } from 'react-intersection-observer';

const ScrollUpComponent = ({ children,type='scroll_up' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const className = `${style.scroll_up_wrapper} ${inView ? style[`${type}`] : ''}`;

  useEffect(()=>{
console.log(inView,ref)
  },[inView])

  return (
    <div 
      ref={ref} 
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollUpComponent;

