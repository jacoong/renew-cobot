import React, {useState} from 'react';
import style from './componentCss/Card.module.css';
import reactDom from 'react-dom';
import { PiPlus } from "react-icons/pi";


function Card({imgSrc,title,paragraph}) {
    
    
    const [flip, setFlip] = useState(false);

    const ShowImg = 'img/ShowImg.jpg'

    const CardClicked = () =>{
        setFlip(!flip);
    }

    // `${flip ? ShowImg : imgSrc}`

  return (

    
    <div className={ style.container} onClick={CardClicked}> 

    <>
    <img className={style.container__img} src={flip ? ShowImg:imgSrc}></img>
        <div className={`${style.container__padding}`}>
        <div className={`${flip ? style.container__padding__container__clicked : style.container__padding__container}`}>
        <div className={style.container__padding__container__title}>
                <p>
                    {flip ? paragraph : title}
                </p>
            </div>
        </div>
        <div className={style.container__padding__container__circle}>
                <div className={`${style.container__padding__container__circle__icon} ${flip ? style.clicked : ''}`}>
                        <PiPlus></PiPlus>
                    </div> 
                </div> 
        </div>
    </>


    </div> 



  );
}

export default Card;

