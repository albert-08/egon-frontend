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
      body: JSON.stringify({ database: space.bdname }),
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
    <Link to={`/home/${space.bdalias}`}>  
      <IonItem>
        <IonAvatar slot='start'>
          <img
            src={space.bdname}
            alt='logo-name'
          />
        </IonAvatar>
        <IonLabel>
          <p>{space.bdname}</p>
        </IonLabel>
      </IonItem>
    </Link>      
  );
};

export default SpaceItem;
