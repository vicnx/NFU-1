import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import { AppContext } from '../../State';
import { Redirect } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonToggle,
} from "@ionic/react";
import "./Settings.css";
import Header from "../../components/header/header";

const Settings: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [ theme, setTheme] = useState<React.ReactText | undefined>(state.theme);

  useEffect(() => {
    dispatch({ type: 'SET_THEME', value: theme})
  }, [theme, dispatch]);
  
  const toggleDarkModeHandler = () => {

  };

  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage className="ion-page-settings">
      <Header page="Settings" />
      <IonContent fullscreen className="ion-content-settings">
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Notifications</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item" >
            <IonLabel className="settings-label">Mostrar notificaciones de eventos <IonToggle color="secondary" name="darkMode"
              onIonChange={toggleDarkModeHandler}/></IonLabel>
          </IonItem>
          <IonItem className="settings-item">
            <IonLabel className="settings-label">Activar sonido de notificaciones <IonToggle color="secondary" /></IonLabel>
          </IonItem>
        </IonItemGroup>
        <br />
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Appearance</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label">Change theme
              <IonSelect value={theme} onIonChange={e => setTheme(e.detail.value)}>
                <IonSelectOption value="Light">Light</IonSelectOption>
                <IonSelectOption value="Dark">Dark</IonSelectOption>
              </IonSelect>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <br/>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Others</IonLabel>
          </IonItemDivider>
          <IonItem className="settings-item settings-option" >
            <IonLabel className="settings-label">Profile settings</IonLabel>
          </IonItem>
          <IonItem className="settings-item settings-option">
            <IonLabel className="settings-label">About</IonLabel>
          </IonItem>
          <IonItem className="settings-item settings-option">
            <IonLabel className="settings-label">Help</IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Settings;