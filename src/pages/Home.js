import React, {useState,useEffect,useParams,useContext} from 'react';
import PageKit from '../PageKit'
import VideoBanner from '../component/VideoBanner';
import ImageBanner from '../component/ImageBanner';
import TextBanner from '../component/TextBanner';
import Card from '../component/Card';
import Card2 from '../component/Card2';
import MainContainer from '../component/MainContainer';
import GridContainer from '../component/GridContainer';
import ScrollUpComponent from '../component/ScrollUpComponent';
import Slide from '../component/Slide';
import Slidebar from '../component/Slidebar';
import language from '../LanguagePack'
import { useNavigate } from "react-router-dom";
import {Context} from "../store/todo_context";
import WhiteSpace from '../component/WhiteSpace';
import WhiteSpaceWIthBorder from '../component/WhiteSpaceWIthBorder';
import CoulumeCard from '../component/CoulumeCard';
import ZigZagContainer from '../component/ZigZagContainer';
import NewsRoomCard from '../component/NewsRoomCard';
// import style from './pageKit.module.css';


function Home() {

  const contextApi = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const styles = {
    marginTop: '30px'
  };

  const centeral = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };




  useEffect(()=>{
    console.log('what type of undeifned');
    console.log(contextApi.language,'api of language')
    if(isLoading !== null){
      setIsLoading(true)
    }
  },[contextApi.language])

  
  return (
    <PageKit>
      {isLoading
      ?
      <>
      <WhiteSpace/>
          <TextBanner title={language[contextApi.language].mainPage['m-12']}></TextBanner>
          <TextBanner paragraph={language[contextApi.language].mainPage['m-9']}></TextBanner>
      <WhiteSpace/>
      <VideoBanner button={true} title={language[contextApi.language].mainPage['m-0']} paragraph={language[contextApi.language].mainPage['m-1']} videoSrc={"video/preview.mp4"}></VideoBanner>
      <WhiteSpace/>

      <ScrollUpComponent> 
          <TextBanner title={language[contextApi.language].mainPage['m-12']}></TextBanner>
        </ScrollUpComponent>

          <ScrollUpComponent> 
          <TextBanner paragraph={language[contextApi.language].mainPage['m-9']} button={'Learn more'}></TextBanner>
      </ScrollUpComponent>

      <WhiteSpaceWIthBorder/>




      

      <ZigZagContainer>

            <CoulumeCard imageSrc={'img/vrDevice.png'} title={'Vitual reality'} paragraph={language[contextApi.language].mainPage['m-9']} videoSrc={'video/Virtual_exercising.mp4'}></CoulumeCard>
  

            <CoulumeCard imageSrc={'img/vrDevice.png'} title={'Vitual reality'} paragraph={language[contextApi.language].mainPage['m-9']} videoSrc={'video/Virtual_tranning.mp4'}></CoulumeCard>
        </ZigZagContainer>

        
  <MainContainer>
        <WhiteSpaceWIthBorder/>


        <ScrollUpComponent type={'width_spread'}> 
            <GridContainer>
              
            <VideoBanner  minheightProp={'350px'} videoSrc={"video/preview2.mp4"}></VideoBanner>
            <div style={centeral}>
                
                <ScrollUpComponent> 
                  <TextBanner title={language[contextApi.language].mainPage['m-12']}></TextBanner>
                </ScrollUpComponent>
                <ScrollUpComponent> 
                    <TextBanner paragraph={language[contextApi.language].mainPage['m-9']} button={'Learn more'}></TextBanner>
                </ScrollUpComponent>
            </div>
            </GridContainer>
        </ScrollUpComponent> 


      <WhiteSpaceWIthBorder/>


      <ScrollUpComponent> 
          <TextBanner title={language[contextApi.language].mainPage['m-12']}></TextBanner>
        </ScrollUpComponent>

      <div style={styles}>
        <Card imgSrc={'img/Our_Offer.jpg'} title={language[contextApi.language].mainPage['m-2']} paragraph={language[contextApi.language].mainPage['m-3']}></Card> 
        </div>
        <ScrollUpComponent type={'scroll_left'}> 
        <GridContainer>
            <Card imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></Card>
            <Card imgSrc={'img/Our_Objectives.jpg'} title={language[contextApi.language].mainPage['m-6']} paragraph={language[contextApi.language].mainPage['m-7']}></Card>
        </GridContainer>
        </ScrollUpComponent> 

      <ScrollUpComponent> 
          <TextBanner title={language[contextApi.language].mainPage['m-12']}></TextBanner>
        </ScrollUpComponent>

          <ScrollUpComponent> 
          <TextBanner paragraph={language[contextApi.language].mainPage['m-9']}></TextBanner>
      </ScrollUpComponent>

      <ScrollUpComponent type={'scroll_right'}>
      <Slidebar value={'news'}>
      <NewsRoomCard imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></NewsRoomCard>
      <NewsRoomCard imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></NewsRoomCard>
      <NewsRoomCard imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></NewsRoomCard>
      <NewsRoomCard imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></NewsRoomCard>
      </Slidebar>
      </ScrollUpComponent>

      </MainContainer>
      <WhiteSpaceWIthBorder/>



      {/* <ScrollUpComponent type={'scroll_right_big'}> 
      <ImageBanner title={language[contextApi.language].mainPage['m-8']}></ImageBanner>
      </ScrollUpComponent>  */}







      {/* <Slide>
      <Card2 imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></Card2>
      <Card2 imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></Card2>
      <Card2 imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></Card2>
      <Card2 imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></Card2>
      <Card2 imgSrc={'img/Our_Methodology.jpg'} title={language[contextApi.language].mainPage['m-4']} paragraph={language[contextApi.language].mainPage['m-5']}></Card2>
      </Slide> */}
      </>
      :
      <div>Loading...</div>
    }
    </PageKit>
  );
}

export default Home;