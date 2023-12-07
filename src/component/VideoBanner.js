import React, {useState } from 'react';
import style from './componentCss/VideoBanner.module.css';
import reactDom from 'react-dom';
import Button from './Button';


function VideoBanner({title,paragraph,videoSrc,button,minheightProp='700px'}) {

    const minHeight = {
        minHeight: minheightProp
    }

  return (

    <div style={minHeight} className={style.container}>
            <div className={style.container__video}>
                <video
                    src={videoSrc}
                    autoPlay
                    playsInline
                    loop
                    muted
                ></video>

                <></>
                <div className={style.container__letterContainer}>
                        <div className={style.container__letterContainer__container}>
                    <div className={style.container__letterContainer__container__title}>
                        <p>{title}</p>
                    </div>
                    <div className={style.container__letterContainer__container__paragragh}>
                        <p>{paragraph}</p>
                    </div>
                    {
                    button?       <Button width='small' Background_color='b-black'>
                    <p className={style.button__font_Size}>Learn more</p>
                </Button>:null

                    }
            
                    </div>
                </div>
            </div>
            <></>
    </div>
  );
}

export default VideoBanner;