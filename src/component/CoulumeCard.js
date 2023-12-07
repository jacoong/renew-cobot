import React, {Children, useState} from 'react';
import InnerCard from './InnerCard';
import TextBanner from './TextBanner';
import Button from './Button';
import style from './componentCss/CoulumeCard.module.css'
import ScrollUpComponent from './ScrollUpComponent';

function CoulumeCard({videoSrc,imageSrc,title,paragraph,button}) {
    
    



    // `${flip ? ShowImg : imgSrc}`

  return (

    <ScrollUpComponent>
    <div className={style.container}> 
            {
                videoSrc
                ?
                <InnerCard>
                <video  src={`${videoSrc}`} autoPlay playsInline loop  muted></video>
                </InnerCard>
                :
                null
            }
            {imageSrc
            ?
            <div className={ style.container__img_container}>
            <img src={imageSrc} alt={'imgError'}></img>
            </div>
            :
            null
            }
            {title ?            <TextBanner isInner={true} title={title}></TextBanner>: null}
            {paragraph ?   <ScrollUpComponent>     <TextBanner isInner={true} paragraph={paragraph}></TextBanner></ScrollUpComponent>: null}
            {button ?  <div className={style.container__buttonConatiner}><Button></Button></div>:null }
    </div> 
    </ScrollUpComponent>


  );
}

export default CoulumeCard;
