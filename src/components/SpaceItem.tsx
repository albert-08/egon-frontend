import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Space } from '../models/space.model';

interface ContainerProps { 
  space: Space
}

const SpaceItem: React.FC<ContainerProps> = ({space}) => {
  const [client, setClient] = useState<any>({});

  const getClientData = async () => {
    const url = 'http://127.0.0.1:4000/clients/info/';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ database: space.db }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    setClient(data);
  }

  useEffect(() => {
    getClientData();
  }, []);
  
  return (
    <Link to={`/home/${client.name}`}>  
      <IonItem>
        <IonAvatar slot='start'>
          <img
            src={client.logo}
            alt='logo-name'
          />
        </IonAvatar>
        <IonLabel>
          <p>{client.name}</p>
        </IonLabel>
      </IonItem>
    </Link>      
  );
};

export default SpaceItem;
