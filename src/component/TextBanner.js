import React, {ReactNode,useEffect} from 'react';
import style from './componentCss/TextBanner.module.css'
import Button from './Button';


const TextBanner =({title,paragraph,button,isInner=false}) => {

    useEffect(()=>{
        if(button){
            console.log('eee',button)
        }else{
            console.log('eeeeeeedd',button)
        }
    },[])

      
    

return (
    <div className={style.container}>
        <div className={`${style.container__letterContainer} ${isInner ? style.isInner :null}`}>
            {paragraph
            ?
            <div className={`${style.container__letterContainer__container__paragraph} ${isInner ? style.isInner :null}`}>
            <p>{paragraph}</p>
            </div> 
            :
            <div className={`${style.container__letterContainer__container__title} ${isInner ? style.isInner :null}`}>
            <p>{title}</p>
            </div>  
            }
            {
                button
                ?
                <div className={style.container__buttonConatiner}>
                <Button width='small'>
                    {button}
                </Button>
                </div>
                :
                null
            }
        </div>
    </div>


);
}



export default TextBanner;