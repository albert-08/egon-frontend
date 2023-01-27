import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Space } from '../models/space.model';

interface ContainerProps { 
  space: Space
}

const SpaceItem: React.FC<ContainerProps> = ({space}) => {
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
  }, []);
  
  return (
    <Link to={`/home/${space.bdalias}`}>  
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
      </IonItem>
    </Link>      
  );
};

export default SpaceItem;
