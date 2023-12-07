import React, {useState } from 'react';
import style from './pageKit.module.css';
import reactDom from 'react-dom';
import Navbar from './component/Navbar'


function PageKit({children}) {

  const handlelanguage = () => {

  }

  return (
    <React.Fragment>
    <div className={style.container}>
        <Navbar></Navbar>
        <main className={style.container__wrap__main}>
        {children}
        </main>
        {/* {reactDom.createPortal(<rightNavBar isMobile={isMobile} exception={exception} isbuttonApper={isbuttonApper} isbuttonPressed={isbuttonPressed}/>,document.getElementById('rightNavBar'))} */}
    </div>
    </React.Fragment>
  );
}

export default PageKit;