import React, {useState} from 'react';
import style from './componentCss/Card2.module.css';
import reactDom from 'react-dom';
import { PiPlus } from "react-icons/pi";


function Card2({imgSrc,paragraph,title}) {
    
    

    const ShowImg = 'img/ShowImg.jpg'



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
     
            </div>
    </div> 



  );
}

export default Card2;

