import React, { useContext, useState } from 'react';
import { AppContext } from '../State';
import { useHistory, useParams } from 'react-router-dom';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonCard,
    IonCardSubtitle,
    IonCardContent

} from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';

import comments from '../data/comments.json';

import CommentList from '../components/Comment/CommentList'


const Comments: React.FC = () => {
    const [message, setMessage] = useState<React.ReactText | undefined>('');
    let { id } = useParams();

    const imgStyle = {
        width: '50px'
    }


    const history = useHistory();
    const { state, dispatch } = useContext(AppContext);
    const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);
    let com = [];

    let component;

    Object.entries(comments.comments).map((j, k) => {
        if (j[0] == id) com.push(j[1]);
    })

    if (com.length <= 0) component = <p>Empty</p>
    else component = <CommentList comments = {com[0]} />

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Comments</IonTitle>
                    <IonButtons slot="end">
                        <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
                            <IonIcon icon={ellipsisVertical} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form method="post" action="">
                    <IonList>
                        <IonItem>
                            <IonInput placeholder="Type your message" type="text" required value={message} onInput={e => setMessage(e.currentTarget.value)} />
                        </IonItem>

                        <IonButton expand="block" type="submit">{'Comment'}</IonButton>
                    </IonList>
                </form>
                {component}
            </IonContent>
        </IonPage>
    );
};

export default Comments;