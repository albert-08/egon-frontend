import { IonAvatar, IonButton, IonButtons, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import { useContext, useEffect, useState } from 'react';
import ClientContext from '../context/Client/ClientContext';
import { Space } from '../models/space.model';

interface ContainerProps { 
  space: Space
}

const DeleteSpaceItem: React.FC<ContainerProps> = ({space}) => {
  const { clients, getClients } = useContext(ClientContext);
  const [logo, setLogo] = useState<any>({});
    
  const getClientData = async () => {
    const url = 'http://127.0.0.1:4000/clients/logo/';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ 
        bdname: space.bdname,
        csiid: space.csiid
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    setLogo(data);
  }

  useEffect(() => {
    getClientData();
  }, [clients]);
  
  const onDelete = () => {
    const itemToDelete = clients.findIndex((client: any) => client.csiid === space.csiid);
    clients.splice(itemToDelete, 1);
    localStorage.setItem('spaces', JSON.stringify(clients));
    getClients();
  }

  return (
    <IonItem>
      <IonAvatar slot='start'>
        <img
          src={logo.logoURL}
          alt='logo-name'
        />
      </IonAvatar>
      <IonLabel>
        <p>{space.bdalias}</p>
      </IonLabel>
      <IonButtons>
        <IonButton
          onClick={() => onDelete()}
        >
          <IonIcon icon={trashOutline}></IonIcon>
        </IonButton>
      </IonButtons>
    </IonItem>
  );
};

export default DeleteSpaceItem;
