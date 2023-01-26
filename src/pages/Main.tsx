import { IonContent, IonPage} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import AddedSpaces from '../components/AddedSpaces';
import AddNewSpace from '../components/AddNewSpace';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ClientContext from '../context/Client/ClientContext';

const Main: React.FC = (): any => {
  const { clients, getClients } = useContext(ClientContext);
  
  useEffect(() => {
    getClients();
  }, []);

  console.log(clients);

  return (
    <IonPage>
      <Header client={{logo: '', name: '', logo2: '', slides: ''}}/>
        <IonContent>
          {
            clients || clients?.length > 0
              ? <AddedSpaces /> 
              : <AddNewSpace />
          }
        </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Main;
