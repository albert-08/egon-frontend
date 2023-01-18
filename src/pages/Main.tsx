import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter
} from '@ionic/react';
import { useState } from 'react';
import { User } from '../models/user.model';

const Main: React.FC = () => {

  const [user, setUser] = useState<User[]>([]);
  // const url = 'http://192.168.100.8:4000/users';
  // const apiKey = '';

  useIonViewDidEnter(async () => {
    // const response = await fetch(url, {
    //   headers: { 'x-API-KEY': apiKey}
    // });
    // const response = await fetch(url);
    // const data = await response.json();
    // setPeople(data);
    const user: any = localStorage.getItem('user');
    const userData: any = JSON.parse(user);
    setUser(userData);
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <img 
            src="https://egon-cloud.com/Egon_ERP/_lib/img/logo.png"
            alt="egon-logo"
            width="200"
            height="200" 
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>Espacios</IonTitle>
        <IonButton>Nuevo Espacio</IonButton>
        <br />
        <IonList>
          <IonItem>
            <IonAvatar>
              <img
                src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_28/urp_426.jpg"
                alt="mision-conca-logo"
              />
            </IonAvatar>
            <IonLabel>
              <p>Misión Conca</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar>
              <img
                src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_25/urp_16.png"
                alt="portal-san-felipe-logo"
              />
            </IonAvatar>
            <IonLabel>
              <p>Portal San Felipe</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar>
              <img
                src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_25/urp_16.png"
                alt="san-gil-clubs-logo"
              />
            </IonAvatar>
            <IonLabel>
              <p>San Gil Clubs</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Main;
