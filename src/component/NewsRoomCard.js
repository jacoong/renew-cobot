import React, {useState} from 'react';
import style from './componentCss/NewsRoomCard.module.css';
import reactDom from 'react-dom';
import { VscArrowCircleRight } from "react-icons/vsc";


function NewsRoomCard({imgSrc,paragraph,title}) {
    
    

    // `${flip ? ShowImg : imgSrc}`

  return (

    
    <div className={ style.container}> 
            <div className={ style.container__img_container}>
                    <img className={style.container__img_container__img} src={imgSrc}></img>
            </div>
           
            

            <div className={`${ style.container__padding__container}`}>

                <div className={style.container__padding__container__title}>
                        <p>
                            {title}
                        </p>
                    </div>

                <div className={style.container__padding__container__paragraph}>
                    <p>
                        {paragraph}
                    </p>
                </div>

                <div className={style.container__padding__container__go}>
                <VscArrowCircleRight />
                    <div className={style.container__padding__container__text}>
                    <p>Go detail</p>
                    </div>
                </div>

            </div>
    </div> 



  );
}

export default NewsRoomCard;

