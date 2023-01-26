import { IonButton, IonButtons, IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import { logIn } from 'ionicons/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Client } from '../models/client.model';
import SpacesMenu from './SpacesMenu';

interface ContainerProps {
  client: Client
}

const Header: React.FC<ContainerProps> = ({ client }) => {
  const [button, setButton] = useState<boolean>(false);

  const addButton = () => {
    setButton(!button);
  }

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonButton>
            {
              client.logo !== ''
                ? <img
                    src={client.logo}
                    alt="logo"
                    width="40"
                    height="40"  
                  />
                : <></>
            }
          </IonButton>
        </IonButtons>
        <IonButtons slot='end'>
          <IonButton
            onClick={() => addButton()}
          >
            <img 
              src="https://egon-cloud.com/Egon_ERP/_lib/img/logo.png"
              alt="egon-logo"
              width="20"
              height="20" 
            />
          </IonButton>
        </IonButtons>
      </IonToolbar>
      {
        button
          ? <SpacesMenu />
          : <></>
      }
    </IonHeader>
  );
};

export default Header;
