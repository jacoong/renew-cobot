import React, {ReactNode} from 'react';
import style from './componentCss/buttom.module.css'



const Button =({ bolder='thin',Background_color='b-blue',width="middle",font_color="f-white",handleClick,children}) => {


return (
    <button className={`${style.button}  ${style[bolder]}  ${style[font_color]} ${style[Background_color]} ${style[width]}`}
    onClick={handleClick}
    >{children}</button>   
);
}



export default Button;