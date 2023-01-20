import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
  useIonViewDidEnter
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = (): any => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
    getInfo();
  }, []);
  // const prediosData: any = localStorage.getItem('sec_conn_bd');
  // const predios: any = JSON.parse(prediosData);
  const url = 'http://127.0.0.1:4000/espacios/';
  const urlInfo = 'http://127.0.0.1:4000/espacios/info';

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem('sec_conn_bd', JSON.stringify(data));
  };
  const getInfo = async () => {
    const response = await fetch(urlInfo);
    const data = await response.json();
    setState(data);
  };
  
  const prediosData: any = localStorage.getItem('sec_conn_bd');
  const predios: any = JSON.parse(prediosData);
  console.log(`Local storage: ${JSON.stringify(predios)}`);

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
      <IonList>
        <IonItem>
          <IonLabel>Ingrese alias:</IonLabel>
          <IonInput
            placeholder="Espacio"
            onIonChange={(event: any) => {
              console.log(event.target.value);
            }}
          ></IonInput>
          <IonButton
            onClick={() => {
              console.log(predios);
            }}
          >Add</IonButton>
        </IonItem>
      </IonList>
        <IonButton>Nuevo Espacio</IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Espacios</IonCardTitle>
            <IonCardSubtitle>Espacios agregados:</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {
                state.map ((p: any) => (
                  <Link to="/">
                    <IonItem>
                      <IonAvatar>
                        <img
                          src={p.logo}
                          alt={p.name}
                        />
                      </IonAvatar>
                      <IonLabel>
                        <p>{p.name}</p>
                      </IonLabel>
                    </IonItem>
                  </Link>
                ))
              }
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Main;
