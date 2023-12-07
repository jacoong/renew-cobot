import { createContext, useContext,useState,useEffect } from 'react';

export const Context = createContext(null);

export const countries = ['fr','en','de','it','es','ko']

export default function TodosContextProvider({children}) {

    const [lang, setLang] = useState(null);
    const localStorageKey = 'lang'

      useEffect(()=>{
        const savedData = localStorage.getItem(localStorageKey);
        if(savedData){
            if (countries.includes(savedData)){
                setLang(savedData);
            }else{
                localStorage.setItem(localStorageKey,'fr'); // set fr if language is not range of countries
                setLang('fr');
            }
        }else{
          const userLanguage = navigator.language.substring(0, 2);
          console.log(userLanguage,1);
          if (countries.includes(userLanguage)){
            localStorage.setItem(localStorageKey,userLanguage);
            return setLang(userLanguage);
          }else{
            localStorage.setItem(localStorageKey,'fr');
            return setLang('fr');
          }
        }
      },[])
    
    const handleLanguage = (value) =>{
        setLang(value);
        localStorage.setItem(localStorageKey,value);
    }


      const contextValue = {
        language: lang,
        handleLanguage:handleLanguage
      };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}
