import React, { useContext } from "react";
import "./Notifications.css";
import events from '../../data/data.json';

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonItemSliding,
  IonIcon,
  IonItemOption,
  IonItemOptions,
  IonList,
} from "@ionic/react";

import { AppContext } from "../../State";
import Header from "../../components/header/header";
import Event from "../../components/Event/EventsPreview";
import { checkmark, close } from "ionicons/icons";
import EventsPreview from "../../components/Event/EventsPreview";

const Notifications: React.FC = () => {
  const { state } = useContext(AppContext);
  return (
    <IonPage>
      <Header page={"Notifications"} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList className="eventsList">
          {Object.values(events.events).map((event, index) => (
            <IonItemSliding key={"item" + index} className="fit  ion-no-padding  primary--bg">
              <IonItem className="ion-no-padding  primary--bg">
                <EventsPreview key={"event_" + index} event={event} />
              </IonItem>
              <IonItemOptions className="ion-no-padding  primary--bg" side="end">
                  <IonItemOption color="primary" onClick={() => alert("Accept")}>
                    <IonIcon style={{fontSize: '2rem'}} color="light" icon={checkmark}/>
                  </IonItemOption>
                </IonItemOptions>
                <IonItemOptions className="danger--bg" side="start">
                    <IonItemOption color="danger" onClick={() => alert("Deny")}>
                        <IonIcon style={{fontSize: '2rem'}} color="light" icon={close}/>
                    </IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;