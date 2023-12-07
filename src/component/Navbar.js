import style from './componentCss/Navbar.module.css';
import reactDom from 'react-dom';
import { GrLanguage } from "react-icons/gr";
import React, {useState,useEffect,useParams,useContext} from 'react';
import { countries,Context } from '../store/todo_context';

function Navbar() {
  const [open, setOpen] = useState(false);
  const contextApi = useContext(Context);

  const handlePopUp = () =>{
    setOpen(!open);
  }

  const handleChangelang = (value) =>{
    contextApi.handleLanguage(value)
  }

  return (
    <div className={style.container}>
            <div className={style.container__wrap}>
            <div className={style.container__wrap__left}>
                <div className={style.container__wrap__left__logo}>
                <img className={style.container__wrap__left__logo__img} src="img/logo.png" alt="image" />
                </div>
                <div className={style.container__wrap__left__koboct}>
                    <p>koboct</p>
                </div>
                </div>
                <div className={style.container__wrap__right}>
                    <div className={style.container__wrap__right__language} onClick={handlePopUp}>
                        <GrLanguage></GrLanguage>

                        {open && (
                        <div className={style.container__wrap__right__popup}>
                          {countries.map((country, index) => (
                            <div className={style.container__wrap__right__popup__list} key={index} onClick={()=>handleChangelang(country)}>
                              <img  className={style.container__wrap__right__popup__list__svg} src={`svg/${country}.svg`} alt="image" />
                              <div className={style.container__wrap__right__popup__list__p_container}>
                              <p className={style.container__wrap__right__popup__list__p_container__p}>{country.toUpperCase()}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                </div>
            </div>
  
    </div>
  );
}

export default Navbar;