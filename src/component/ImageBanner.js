import React from 'react';
import style from './componentCss/ImageBanner.module.css'



const ImageBanner =({title,paragraph}) => {


return (
    <div className={style.container}>
    <div className={style.container__image}>
        <img
            src="img/Run_Business.jpg"
        ></img>


        <div className={style.container__letterContainer}>
            <div className={style.container__letterContainer__container__title}>
                <p>{title}</p>
            </div>
            {paragraph  ?<div className={style.container__letterContainer__container__paragragh}><p>{paragraph}</p></div>:  null}
            
        </div>




    </div>
    <></>
</div>
);
}



export default ImageBanner;