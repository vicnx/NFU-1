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
    IonList
} from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import comments from '../data/comments.json';
import CommentList from '../components/Comment/CommentList';
import { useTranslation } from 'react-i18next';


const Comments: React.FC = () => {
    const [message, setMessage] = useState<React.ReactText | undefined>('');

    let { id }  = useParams();

    const { t } = useTranslation();

    let props = useParams()

    const history = useHistory();
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
                    <IonTitle>{ t('Comments.title') }</IonTitle>
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
                            <IonInput placeholder={ t('Comments.type') } type="text" required value={message} onInput={e => setMessage(e.currentTarget.value)} />
                        </IonItem>
                        <IonButton expand="block" type="submit">{ t('Comments.send_comment') }</IonButton>
                    </IonList>
                </form>
                {component}
            </IonContent>
        </IonPage>
    );
};

export default Comments;
