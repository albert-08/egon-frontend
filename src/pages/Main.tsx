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
    if (!localStorage.getItem('sec_conn_bd')) {
      localStorage.setItem('sec_conn_bd', JSON.stringify([]));
    }
    getClients();
  }, []);

  console.log(`Context: ${JSON.stringify(clients)}`);

  return (
    <IonPage>
      <Header client={{logo: '', name: '', logo2: '', slides: ''}}/>
        <IonContent>
          {
            clients.length > 0
              ? <AddedSpaces /> 
              : <AddNewSpace />
          }
        </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Main;
