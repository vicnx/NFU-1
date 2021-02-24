import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../State';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  IonButton,
  IonContent,
  IonPage,
  IonSlide,
  IonSlides,
  getPlatforms,
  IonIcon
} from "@ionic/react";
import { arrowForwardCircleOutline, arrowBackCircleOutline } from "ionicons/icons";
import "./Welcome.css";
import icon from '../assets/img/nfu_icon.png'
import DeporteImg from "../assets/img/deporte_img.png";
import geo from "../assets/img/geo.png";
import friends from "../assets/img/friends-welcome.png";
import ready from "../assets/img/ready.png";

// import { Redirect } from 'react-router-dom';

const Welcome: React.FC = () => {

  const { state, dispatch } = useContext(AppContext);
  const [ welcome, setWelcome ] = useState<React.ReactText | undefined>('');
  const [ currentSlide, setCurrentSlide ] = useState(0);

  const { t } = useTranslation();
  let isDesktop = () => getPlatforms().includes('desktop') ? true : false

  let handleNext = (slides) => {
    setCurrentSlide(currentSlide+1)
    slides.slideNext();
  }

  let handlePrev = (slides) => {
    setCurrentSlide(currentSlide-1)
    slides.slidePrev();
  }
  
  let ionSlide = document.querySelector('ion-slides')

  useEffect(() => {
    dispatch({ type: 'WELCOME', value: welcome})
  }, [welcome, dispatch]);

  if (state.welcome === 'true'){return <Redirect to="/" />}

  return (
    <IonPage>
      <IonContent fullscreen className="welcome-page-content" scroll-y="false">
        <div className="welcome-page-content">
          <IonIcon icon={arrowBackCircleOutline} className="backSlide-btn" 
          style={{ display : currentSlide === 0 ? "none" : "initial" }}
          onClick={() => handlePrev(ionSlide)}
          hidden={!isDesktop()}/>
          <IonIcon icon={arrowForwardCircleOutline} className="nextSlide-btn" 
          style={{ display : currentSlide === 3 ? "none" : "initial" }}
          onClick={() => handleNext(ionSlide)}
          hidden={!isDesktop()}/>
          <IonSlides pager={true} >
            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer">
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t('welcome.title')}</span>
                  </div>
                  <img
                    src={DeporteImg}
                    alt="Deporte IMG"
                    className="welcomeImg"
                  />
                </div>

                <h2 className="slideTitle">{t('welcome.welcome')}</h2>
                <p className="slideText">
                {t('welcome.description')} 
               
                </p>
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer" style={{visibility: "hidden"}}>
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t('welcome.title')}</span>
                  </div>
                  <img src={friends} alt="Deporte IMG" className="welcomeImg" />
                </div>

                <h2 className="slideTitle">{t('welcome.meet')}</h2>
                <p className="slideText">
                {t('welcome.meetDescription')}
                  
                </p>
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer" style={{visibility: "hidden"}}>
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t('welcome.title')}</span>
                  </div>
                  <img
                    src={geo}
                    alt="Deporte IMG"
                    className="welcomeImg"
                  />
                </div>

                <h2 className="slideTitle">{t('welcome.find')}</h2>
                <p className="slideText">
                  {t('welcome.findDescription')}                  
                </p>
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer">
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t('welcome.title')}</span>
                  </div>
                  <img
                    src={ready}
                    alt="Deporte IMG"
                    className="welcomeImg flipImg"
                  />
                </div>

                <h2 className="slideTitle">{t('welcome.ready')}</h2>
                <IonButton fill="clear" className="welcome-btn continue-welcome-btn" onClick={() => setWelcome('true')}>{t('welcome.continue')}</IonButton>
              </div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
